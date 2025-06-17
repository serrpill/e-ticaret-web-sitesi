import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import i18next from 'i18next';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';
export const LoginForm = ({ onClose }) => {
    const { login, isLoading } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);
        try {
            await login(email, password);
            setSuccess(i18next.t('login.success'));
            if (onClose) {
                onClose();
            }
            navigate('/');
        }
        catch (err) {
            console.error('Login error:', err);
            setError(err.response?.data?.message || i18next.t('login.error'));
        }
    };
    return (_jsxs("form", { onSubmit: handleSubmit, className: "max-w-sm mx-auto bg-white p-8 rounded shadow-md", children: [_jsx("h2", { className: "text-2xl font-bold mb-2 text-gray-900", children: "HO\u015E GELD\u0130N\u0130Z" }), _jsx("div", { className: "mb-4 text-gray-700 font-medium", children: "H\u0131zl\u0131 ve g\u00FCvenli al\u0131\u015Fveri\u015Fe giri\u015F yap\u0131n!" }), _jsx("div", { className: "mb-4", children: _jsx("input", { type: "email", className: "w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-orange-500", value: email, onChange: e => setEmail(e.target.value), required: true, placeholder: "E-mail adresiniz" }) }), _jsxs("div", { className: "mb-4 relative", children: [_jsx("input", { type: showPassword ? 'text' : 'password', className: "w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-orange-500 pr-10", value: password, onChange: e => setPassword(e.target.value), required: true, placeholder: "\u015Eifreniz" }), _jsx("button", { type: "button", onClick: () => setShowPassword(!showPassword), className: "absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500", children: showPassword ? (_jsx(EyeSlashIcon, { className: "h-5 w-5" })) : (_jsx(EyeIcon, { className: "h-5 w-5" })) })] }), _jsxs("div", { className: "flex items-center justify-between mb-6", children: [_jsxs("label", { className: "flex items-center gap-2 text-gray-700", children: [_jsx("input", { type: "checkbox", checked: remember, onChange: e => setRemember(e.target.checked) }), "Beni Hat\u0131rla"] }), _jsx("a", { href: "#", className: "text-sm text-gray-700 hover:underline", children: "\u015Eifremi Unuttum" })] }), error && _jsx("div", { className: "mb-4 text-red-600", children: error }), success && _jsx("div", { className: "mb-4 text-green-600", children: success }), _jsx("div", { className: "mb-2 text-gray-700 font-medium text-center", children: "Hesab\u0131n\u0131za giri\u015F yapmak i\u00E7in bilgilerinizi girin." }), _jsx("button", { type: "submit", className: "w-full bg-blue-600 text-white py-3 rounded font-bold text-lg hover:bg-gray-700 transition disabled:opacity-50", disabled: isLoading, children: "Giri\u015F Yap" })] }));
};
