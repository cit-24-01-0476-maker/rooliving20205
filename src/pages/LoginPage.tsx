import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Input } from '../components/Input';
import { Button } from '../components/Button';

export function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    emailOrPhone: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login - redirect to dashboard
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-950 via-neutral-950 to-orange-600">
      <Header isAuthenticated={false} />
      
      <div className="max-w-md mx-auto px-6 py-12">
        <div className="bg-white/95 border border-white/20 shadow-2xl rounded-2xl p-8">
          <div className="text-center mb-8 border-b border-black/10 pb-4">
            <h1 className="text-neutral-900 mb-2">Welcome Back</h1>
            <p className="text-neutral-600">
              Login to your account
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <Input
              label="Email or Phone"
              type="text"
              placeholder="Enter your email or phone number"
              value={formData.emailOrPhone}
              onChange={(e) => setFormData({ ...formData, emailOrPhone: e.target.value })}
              required
            />

            <Input
              label="Password"
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
            />

            <div className="text-right">
              <Link to="#" className="text-neutral-700 hover:text-neutral-900 border-b border-neutral-400 hover:border-neutral-700">
                Forgot password?
              </Link>
            </div>

            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>

          <p className="text-center text-neutral-700 mt-6 pt-6 border-t border-dashed border-black/20">
            Don't have an account?{' '}
            <Link to="/signup" className="text-neutral-900 hover:text-orange-600 border-b border-neutral-400 hover:border-orange-600">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
