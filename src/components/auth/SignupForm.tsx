import { useState } from 'react';
import { api } from '../../services/api'; // axios instance'ı doğru şekilde import edildi

interface SignupFormProps {
  onBack?: () => void;
  onSignupSuccess?: () => void;
}

const SignupForm = ({ onBack, onSignupSuccess }: SignupFormProps) => {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm(f => ({
      ...f,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => { // Async hale getirildi
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
      } else {
        alert(`Kayıt işlemi tamamlandı ancak beklenmedik bir durum oluştu: ${response.status}`);
      }
    } catch (error: any) {
      console.error('Kayıt hatası:', error);
      alert(`Kayıt sırasında bir hata oluştu: ${error.response?.data?.message || error.message}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 text-center">Yeni Üyelik</h2>
      <div className="mb-4">
        <label className="block mb-1">Adı</label>
        <input name="firstName" value={form.firstName} onChange={handleChange} required className="w-full border rounded px-3 py-2" />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Soyadı</label>
        <input name="lastName" value={form.lastName} onChange={handleChange} required className="w-full border rounded px-3 py-2" />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Email</label>
        <input name="email" type="email" value={form.email} onChange={handleChange} required className="w-full border rounded px-3 py-2" />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Şifre</label>
        <input name="password" type="password" value={form.password} onChange={handleChange} required className="w-full border rounded px-3 py-2" />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Cinsiyet</label>
        <div className="flex gap-4">
          <label><input type="radio" name="gender" value="Erkek" checked={form.gender === 'Erkek'} onChange={handleChange} /> Erkek</label>
          <label><input type="radio" name="gender" value="Kadın" checked={form.gender === 'Kadın'} onChange={handleChange} /> Kadın</label>
          <label><input type="radio" name="gender" value="Belirtmek istemiyorum" checked={form.gender === 'Belirtmek istemiyorum'} onChange={handleChange} /> Belirtmek istemiyorum</label>
        </div>
      </div>
      <div className="mb-4 flex gap-2">
        <div>
          <label className="block mb-1">Cep Telefonu</label>
          <input name="phone" value={form.phone} onChange={handleChange} required className="w-full border rounded px-3 py-2" placeholder="(5xx) xxx xx xx" />
        </div>
        <div>
          <label className="block mb-1">Doğum Tarihi</label>
          <input name="birth" type="date" value={form.birth} onChange={handleChange} required className="w-full border rounded px-3 py-2" />
        </div>
      </div>
      <div className="mb-2">
        <label className="flex items-center gap-2">
          <input type="checkbox" name="acceptCommercial" checked={form.acceptCommercial} onChange={handleChange} />
          Aydınlatma Metninde belirtilen ilkeler nezdinde Elektronik Ticaret iletisi almak istiyorum.
        </label>
      </div>
      <div className="mb-2">
        <label className="flex items-center gap-2">
          <input type="checkbox" name="acceptContract" checked={form.acceptContract} onChange={handleChange} required />
          <span>Üyelik sözleşmesini kabul ediyorum.</span>
        </label>
      </div>
      <div className="mb-4">
        <label className="flex items-center gap-2">
          <input type="checkbox" name="acceptPrivacy" checked={form.acceptPrivacy} onChange={handleChange} required />
          <span>Kişisel verilerin işlenmesine ilişkin Aydınlatma Metnini okudum.</span>
        </label>
      </div>
      <div className="flex gap-2 mt-6">
        {onBack && (
          <button type="button" onClick={onBack} className="flex-1 py-2 rounded bg-gray-200 hover:bg-gray-300 font-bold">Geri</button>
        )}
        <button type="submit" className="flex-1 py-2 rounded bg-black text-white font-bold hover:bg-gray-800">Kayıt Ol</button>
      </div>
    </form>
  );
};

export default SignupForm; 