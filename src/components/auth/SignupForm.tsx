import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../services/api';
import { RegisterCredentials } from '../../types';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';

interface SignupFormProps {
  onBack?: () => void;
  onSignupSuccess?: () => void;
}

const SignupForm = ({ onBack, onSignupSuccess }: SignupFormProps) => {
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (form.password !== form.confirmPassword) {
      setError('Şifreler eşleşmiyor');
      return;
    }

    try {
      const payload: RegisterCredentials = {
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
      } else {
        setError(message || 'Kayıt işlemi başarısız oldu');
      }
    } catch (error: any) {
      setError(error.response?.data?.message || 'Kayıt işlemi başarısız oldu');
    }
  };

  return (
    <div className="max-w-sm mx-auto bg-white p-8 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-2 text-gray-900">YENİ ÜYELİK</h2>
      <div className="mb-4 text-gray-700 font-medium">Hızlı ve güvenli alışverişe başlayın!</div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-orange-500"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
            placeholder="Adınız Soyadınız"
          />
        </div>
        
        <div>
          <input
            type="email"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-orange-500"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
            placeholder="E-mail adresiniz"
          />
        </div>
        
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-orange-500 pr-10"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
            placeholder="Şifreniz"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
          >
            {showPassword ? (
              <EyeSlashIcon className="h-5 w-5" />
            ) : (
              <EyeIcon className="h-5 w-5" />
            )}
          </button>
        </div>
        
        <div className="relative">
          <input
            type={showConfirmPassword ? 'text' : 'password'}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-orange-500 pr-10"
            value={form.confirmPassword}
            onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
            required
            placeholder="Şifrenizi Tekrar Girin"
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
          >
            {showConfirmPassword ? (
              <EyeSlashIcon className="h-5 w-5" />
            ) : (
              <EyeIcon className="h-5 w-5" />
            )}
          </button>
        </div>

        {error && (
          <div className="text-red-500 text-sm text-center">{error}</div>
        )}

        <div className="flex gap-4">
          {onBack && (
            <button
              type="button"
              onClick={onBack}
              className="flex-1 bg-gray-200 text-gray-800 py-2 rounded font-bold hover:bg-gray-300 transition"
            >
              Geri
            </button>
          )}
          <button
            type="submit"
            className="flex-1 bg-blue-600 text-white py-2 rounded font-bold hover:bg-blue-700 transition"
          >
            Kayıt Ol
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm; 