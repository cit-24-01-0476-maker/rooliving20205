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
    <div className="min-h-screen bg-gray-100">
      <Header isAuthenticated={false} />
      
      <div className="max-w-md mx-auto px-6 py-12">
        <div className="bg-white border-4 border-gray-400 p-8">
          <div className="text-center mb-8 border-b-4 border-gray-800 pb-4">
            <h1 className="text-gray-900 mb-2">Welcome Back</h1>
            <p className="text-gray-600">
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
              <Link to="#" className="text-gray-700 border-b-2 border-gray-700">
                Forgot password?
              </Link>
            </div>

            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>

          <p className="text-center text-gray-600 mt-6 pt-6 border-t-2 border-dashed border-gray-300">
            Don't have an account?{' '}
            <Link to="/signup" className="text-gray-900 border-b-2 border-gray-900">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}