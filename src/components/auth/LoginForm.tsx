import React, { useState } from 'react';
import i18next from 'i18next';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';

interface LoginFormProps {
  onClose?: () => void;
}

export const LoginForm = ({ onClose }: LoginFormProps) => {
  const { login, isLoading } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
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
    } catch (err: any) {
      console.error('Login error:', err);
      setError(err.response?.data?.message || i18next.t('login.error'));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto bg-white p-8 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-2 text-gray-900">HOŞ GELDİNİZ</h2>
      <div className="mb-4 text-gray-700 font-medium">Hızlı ve güvenli alışverişe giriş yapın!</div>
      <div className="mb-4">
        <input
          type="email"
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-orange-500"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          placeholder="E-mail adresiniz"
        />
      </div>
      <div className="mb-4 relative">
        <input
          type={showPassword ? 'text' : 'password'}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-orange-500 pr-10"
          value={password}
          onChange={e => setPassword(e.target.value)}
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
      <div className="flex items-center justify-between mb-6">
        <label className="flex items-center gap-2 text-gray-700">
          <input type="checkbox" checked={remember} onChange={e => setRemember(e.target.checked)} />
          Beni Hatırla
        </label>
        <a href="#" className="text-sm text-gray-700 hover:underline">Şifremi Unuttum</a>
      </div>
      {error && <div className="mb-4 text-red-600">{error}</div>}
      {success && <div className="mb-4 text-green-600">{success}</div>}
      <div className="mb-2 text-gray-700 font-medium text-center">Hesabınıza giriş yapmak için bilgilerinizi girin.</div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded font-bold text-lg hover:bg-gray-700 transition disabled:opacity-50"
        disabled={isLoading}
      >
        Giriş Yap
      </button>
    </form>
  );
};