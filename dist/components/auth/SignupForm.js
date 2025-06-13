import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { api } from '../../services/api'; // axios instance'ı doğru şekilde import edildi
const SignupForm = ({ onBack, onSignupSuccess }) => {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        gender: '',
        phone: '',
        birth: '',
        acceptContract: false,
        acceptPrivacy: false,
        acceptCommercial: false,
    });
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm(f => ({
            ...f,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const payload = {
                email: form.email,
                password: form.password,
                name: `${form.firstName} ${form.lastName}`.trim(), // Ad ve soyadı birleştirildi
            };
            const response = await api.post('/users/register', payload); // API çağrısı yapıldı
            if (response.status === 201) {
                alert('Kayıt başarılı!');
                if (onSignupSuccess) {
                    onSignupSuccess();
                }
            }
            else {
                alert(`Kayıt işlemi tamamlandı ancak beklenmedik bir durum oluştu: ${response.status}`);
            }
        }
        catch (error) {
            console.error('Kayıt hatası:', error);
            alert(`Kayıt sırasında bir hata oluştu: ${error.response?.data?.message || error.message}`);
        }
    };
    return (_jsxs("form", { onSubmit: handleSubmit, className: "max-w-md mx-auto bg-white p-8 rounded shadow-md", children: [_jsx("h2", { className: "text-2xl font-bold mb-6 text-gray-900 text-center", children: "Yeni \u00DCyelik" }), _jsxs("div", { className: "mb-4", children: [_jsx("label", { className: "block mb-1", children: "Ad\u0131" }), _jsx("input", { name: "firstName", value: form.firstName, onChange: handleChange, required: true, className: "w-full border rounded px-3 py-2" })] }), _jsxs("div", { className: "mb-4", children: [_jsx("label", { className: "block mb-1", children: "Soyad\u0131" }), _jsx("input", { name: "lastName", value: form.lastName, onChange: handleChange, required: true, className: "w-full border rounded px-3 py-2" })] }), _jsxs("div", { className: "mb-4", children: [_jsx("label", { className: "block mb-1", children: "Email" }), _jsx("input", { name: "email", type: "email", value: form.email, onChange: handleChange, required: true, className: "w-full border rounded px-3 py-2" })] }), _jsxs("div", { className: "mb-4", children: [_jsx("label", { className: "block mb-1", children: "\u015Eifre" }), _jsx("input", { name: "password", type: "password", value: form.password, onChange: handleChange, required: true, className: "w-full border rounded px-3 py-2" })] }), _jsxs("div", { className: "mb-4", children: [_jsx("label", { className: "block mb-1", children: "Cinsiyet" }), _jsxs("div", { className: "flex gap-4", children: [_jsxs("label", { children: [_jsx("input", { type: "radio", name: "gender", value: "Erkek", checked: form.gender === 'Erkek', onChange: handleChange }), " Erkek"] }), _jsxs("label", { children: [_jsx("input", { type: "radio", name: "gender", value: "Kad\u0131n", checked: form.gender === 'Kadın', onChange: handleChange }), " Kad\u0131n"] }), _jsxs("label", { children: [_jsx("input", { type: "radio", name: "gender", value: "Belirtmek istemiyorum", checked: form.gender === 'Belirtmek istemiyorum', onChange: handleChange }), " Belirtmek istemiyorum"] })] })] }), _jsxs("div", { className: "mb-4 flex gap-2", children: [_jsxs("div", { children: [_jsx("label", { className: "block mb-1", children: "Cep Telefonu" }), _jsx("input", { name: "phone", value: form.phone, onChange: handleChange, required: true, className: "w-full border rounded px-3 py-2", placeholder: "(5xx) xxx xx xx" })] }), _jsxs("div", { children: [_jsx("label", { className: "block mb-1", children: "Do\u011Fum Tarihi" }), _jsx("input", { name: "birth", type: "date", value: form.birth, onChange: handleChange, required: true, className: "w-full border rounded px-3 py-2" })] })] }), _jsx("div", { className: "mb-2", children: _jsxs("label", { className: "flex items-center gap-2", children: [_jsx("input", { type: "checkbox", name: "acceptCommercial", checked: form.acceptCommercial, onChange: handleChange }), "Ayd\u0131nlatma Metninde belirtilen ilkeler nezdinde Elektronik Ticaret iletisi almak istiyorum."] }) }), _jsx("div", { className: "mb-2", children: _jsxs("label", { className: "flex items-center gap-2", children: [_jsx("input", { type: "checkbox", name: "acceptContract", checked: form.acceptContract, onChange: handleChange, required: true }), _jsx("span", { children: "\u00DCyelik s\u00F6zle\u015Fmesini kabul ediyorum." })] }) }), _jsx("div", { className: "mb-4", children: _jsxs("label", { className: "flex items-center gap-2", children: [_jsx("input", { type: "checkbox", name: "acceptPrivacy", checked: form.acceptPrivacy, onChange: handleChange, required: true }), _jsx("span", { children: "Ki\u015Fisel verilerin i\u015Flenmesine ili\u015Fkin Ayd\u0131nlatma Metnini okudum." })] }) }), _jsxs("div", { className: "flex gap-2 mt-6", children: [onBack && (_jsx("button", { type: "button", onClick: onBack, className: "flex-1 py-2 rounded bg-gray-200 hover:bg-gray-300 font-bold", children: "Geri" })), _jsx("button", { type: "submit", className: "flex-1 py-2 rounded bg-black text-white font-bold hover:bg-gray-800", children: "Kay\u0131t Ol" })] })] }));
};
export default SignupForm;
