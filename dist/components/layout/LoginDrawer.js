import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { LoginForm } from '../auth/LoginForm';
import SignupForm from '../auth/SignupForm';
const LoginDrawer = ({ open, onClose }) => {
    const [showSignup, setShowSignup] = useState(false);
    useEffect(() => {
        if (open)
            setShowSignup(false);
    }, [open]);
    // Google OAuth yönlendirmesi (örnek)
    const handleGoogleLogin = () => {
        window.location.href =
            'https://accounts.google.com/o/oauth2/v2/auth?client_id=YOUR_GOOGLE_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=token&scope=email%20profile';
    };
    // Facebook OAuth yönlendirmesi (örnek)
    const handleFacebookLogin = () => {
        window.location.href =
            'https://www.facebook.com/v10.0/dialog/oauth?client_id=YOUR_FACEBOOK_APP_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=token&scope=email,public_profile';
    };
    if (!open)
        return null;
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: "fixed inset-0 bg-black bg-opacity-40 z-40 transition-opacity", onClick: onClose }), _jsxs("aside", { className: "fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-lg z-50 transition-transform duration-300 flex flex-col", children: [_jsx("button", { className: "absolute top-4 right-4 text-2xl text-gray-500 hover:text-gray-700", onClick: onClose, "aria-label": "Kapat", children: "\u00D7" }), _jsx("div", { className: "flex-1 overflow-y-auto p-8 pt-12 flex flex-col gap-6", children: !showSignup ? (_jsxs(_Fragment, { children: [_jsx(LoginForm, { onClose: onClose }), _jsxs("div", { className: "border-t pt-6 mt-2", children: [_jsx("div", { className: "font-bold text-lg mb-2", children: "Hen\u00FCz \u00DCye De\u011Fil Misiniz?" }), _jsx("div", { className: "mb-4 text-sm text-gray-600", children: "Kolayca \u00FCye olabilirsiniz!" }), _jsx("button", { className: "w-full bg-black text-white py-2 rounded font-bold mb-4 hover:bg-gray-800 transition", onClick: () => setShowSignup(true), children: "Hemen \u00DCye Ol" }), _jsxs("button", { className: "w-full border border-blue-600 text-blue-600 py-2 rounded font-bold mb-2 hover:bg-blue-50 transition flex items-center justify-center gap-2", onClick: handleFacebookLogin, children: [_jsx("span", { children: "f" }), " Facebook ile Ba\u011Flan"] }), _jsxs("button", { className: "w-full border border-red-500 text-red-500 py-2 rounded font-bold hover:bg-red-50 transition flex items-center justify-center gap-2", onClick: handleGoogleLogin, children: [_jsx("span", { children: "G" }), " Google ile Ba\u011Flan"] })] })] })) : (_jsx(SignupForm, { onBack: () => setShowSignup(false), onSignupSuccess: () => setShowSignup(false) })) })] })] }));
};
export default LoginDrawer;
