import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../services/api';
const AuthContext = createContext(undefined);
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        // Check for token in localStorage on initial load
        const storedToken = localStorage.getItem('token');
        const storedUser = localStorage.getItem('user');
        if (storedToken && storedUser) {
            setToken(storedToken);
            try {
                setUser(JSON.parse(storedUser));
            }
            catch (e) {
                console.error("Failed to parse user from localStorage", e);
                logout(); // Clear invalid data
            }
        }
        setIsLoading(false);
    }, []);
    const login = async (email, password) => {
        try {
            setIsLoading(true);
            const response = await auth.login({ email, password });
            const { success, message, data } = response.data;
            if (success && data) {
                setUser(data.user);
                setToken(data.token);
                localStorage.setItem('token', data.token);
                localStorage.setItem('user', JSON.stringify(data.user));
            }
            else {
                throw new Error(message || 'Giriş başarısız oldu');
            }
        }
        catch (error) {
            console.error('Login failed:', error);
            throw error;
        }
        finally {
            setIsLoading(false);
        }
    };
    const logout = () => {
        setToken(null);
        setUser(null);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    };
    return (_jsx(AuthContext.Provider, { value: { user, token, login, logout, isLoading }, children: children }));
};
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
