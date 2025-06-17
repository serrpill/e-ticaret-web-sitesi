import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../services/api';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';
const SignupForm = ({ onBack, onSignupSuccess }) => {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        if (form.password !== form.confirmPassword) {
            setError('Şifreler eşleşmiyor');
            return;
        }
        try {
            const payload = {
                email: form.email,
                password: form.password,
                name: form.name,
            };
            const apiResponse = await auth.register(payload);
            const { success, message, data } = apiResponse.data;
            if (success && data) {
                if (onSignupSuccess) {
                    onSignupSuccess();
                }
                navigate('/login');
            }
            else {
                setError(message || 'Kayıt işlemi başarısız oldu');
            }
        }
        catch (error) {
            setError(error.response?.data?.message || 'Kayıt işlemi başarısız oldu');
        }
    };
    return (_jsxs("div", { className: "max-w-sm mx-auto bg-white p-8 rounded shadow-md", children: [_jsx("h2", { className: "text-2xl font-bold mb-2 text-gray-900", children: "YEN\u0130 \u00DCYEL\u0130K" }), _jsx("div", { className: "mb-4 text-gray-700 font-medium", children: "H\u0131zl\u0131 ve g\u00FCvenli al\u0131\u015Fveri\u015Fe ba\u015Flay\u0131n!" }), _jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [_jsx("div", { children: _jsx("input", { type: "text", className: "w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-orange-500", value: form.name, onChange: (e) => setForm({ ...form, name: e.target.value }), required: true, placeholder: "Ad\u0131n\u0131z Soyad\u0131n\u0131z" }) }), _jsx("div", { children: _jsx("input", { type: "email", className: "w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-orange-500", value: form.email, onChange: (e) => setForm({ ...form, email: e.target.value }), required: true, placeholder: "E-mail adresiniz" }) }), _jsxs("div", { className: "relative", children: [_jsx("input", { type: showPassword ? 'text' : 'password', className: "w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-orange-500 pr-10", value: form.password, onChange: (e) => setForm({ ...form, password: e.target.value }), required: true, placeholder: "\u015Eifreniz" }), _jsx("button", { type: "button", onClick: () => setShowPassword(!showPassword), className: "absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500", children: showPassword ? (_jsx(EyeSlashIcon, { className: "h-5 w-5" })) : (_jsx(EyeIcon, { className: "h-5 w-5" })) })] }), _jsxs("div", { className: "relative", children: [_jsx("input", { type: showConfirmPassword ? 'text' : 'password', className: "w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-orange-500 pr-10", value: form.confirmPassword, onChange: (e) => setForm({ ...form, confirmPassword: e.target.value }), required: true, placeholder: "\u015Eifrenizi Tekrar Girin" }), _jsx("button", { type: "button", onClick: () => setShowConfirmPassword(!showConfirmPassword), className: "absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500", children: showConfirmPassword ? (_jsx(EyeSlashIcon, { className: "h-5 w-5" })) : (_jsx(EyeIcon, { className: "h-5 w-5" })) })] }), error && (_jsx("div", { className: "text-red-500 text-sm text-center", children: error })), _jsxs("div", { className: "flex gap-4", children: [onBack && (_jsx("button", { type: "button", onClick: onBack, className: "flex-1 bg-gray-200 text-gray-800 py-2 rounded font-bold hover:bg-gray-300 transition", children: "Geri" })), _jsx("button", { type: "submit", className: "flex-1 bg-blue-600 text-white py-2 rounded font-bold hover:bg-blue-700 transition", children: "Kay\u0131t Ol" })] })] })] }));
};
export default SignupForm;
