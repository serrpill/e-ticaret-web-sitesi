import { useState, useEffect } from 'react';
import { LoginForm } from '../auth/LoginForm';
import SignupForm from '../auth/SignupForm';

interface LoginDrawerProps {
  open: boolean;
  onClose: () => void;
}

const LoginDrawer = ({ open, onClose }: LoginDrawerProps) => {
  const [showSignup, setShowSignup] = useState(false);

  useEffect(() => {
    if (open) setShowSignup(false);
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

  if (!open) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-40 z-40 transition-opacity"
        onClick={onClose}
      />
      {/* Drawer */}
      <aside className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-lg z-50 transition-transform duration-300 flex flex-col">
        <button
          className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-gray-700"
          onClick={onClose}
          aria-label="Kapat"
        >
          ×
        </button>
        <div className="flex-1 overflow-y-auto p-8 pt-12 flex flex-col gap-6">
          {!showSignup ? (
            <>
              <LoginForm onClose={onClose} />
              <div className="border-t pt-6 mt-2">
                <div className="font-bold text-lg mb-2">Henüz Üye Değil Misiniz?</div>
                <div className="mb-4 text-sm text-gray-600">Kolayca üye olabilirsiniz!</div>
                <button
                  className="w-full bg-black text-white py-2 rounded font-bold mb-4 hover:bg-gray-800 transition"
                  onClick={() => setShowSignup(true)}
                >
                  Hemen Üye Ol
                </button>
                <button
                  className="w-full border border-blue-600 text-blue-600 py-2 rounded font-bold mb-2 hover:bg-blue-50 transition flex items-center justify-center gap-2"
                  onClick={handleFacebookLogin}
                >
                  <span>f</span> Facebook ile Bağlan
                </button>
                <button
                  className="w-full border border-red-500 text-red-500 py-2 rounded font-bold hover:bg-red-50 transition flex items-center justify-center gap-2"
                  onClick={handleGoogleLogin}
                >
                  <span>G</span> Google ile Bağlan
                </button>
              </div>
            </>
          ) : (
            <SignupForm onBack={() => setShowSignup(false)} onSignupSuccess={() => setShowSignup(false)} />
          )}
        </div>
      </aside>
    </>
  );
};

export default LoginDrawer; 