import React, { useState } from 'react';
import { useAtom } from 'jotai';
import { userAtom } from '../../store';
import i18next from 'i18next';

export const LoginForm = () => {
  const [, setUser] = useAtom(userAtom);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      // Mock login logic
      if (email === 'user@example.com' && password === 'password') {
        const user = { id: '1', name: 'User', email, role: 'user' as const };
        setUser(user);
        localStorage.setItem('user', JSON.stringify(user));
      } else {
        setError(i18next.t('login.invalidCredentials'));
      }
    } catch (err) {
      setError(i18next.t('login.error'));
    } finally {
      setLoading(false);
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
      <div className="mb-4">
        <input
          type="password"
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-orange-500"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          placeholder="Şifreniz"
        />
      </div>
      <div className="flex items-center justify-between mb-6">
        <label className="flex items-center gap-2 text-gray-700">
          <input type="checkbox" checked={remember} onChange={e => setRemember(e.target.checked)} />
          Beni Hatırla
        </label>
        <a href="#" className="text-sm text-gray-700 hover:underline">Şifremi Unuttum</a>
      </div>
      {error && <div className="mb-4 text-red-600">{error}</div>}
      <div className="mb-2 text-gray-700 font-medium text-center">Hesabınıza giriş yapmak için bilgilerinizi girin.</div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded font-bold text-lg hover:bg-gray-700 transition disabled:opacity-50"
        disabled={loading}
      >
        Giriş Yap
      </button>
    </form>
  );
};