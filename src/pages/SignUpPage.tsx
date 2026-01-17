import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Input } from '../components/Input';
import { Button } from '../components/Button';

export function SignUpPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock sign up - redirect to dashboard
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-950 via-neutral-950 to-orange-600">
      <Header isAuthenticated={false} />
      
      <div className="max-w-md mx-auto px-6 py-12">
        <div className="bg-white/95 border border-white/20 shadow-2xl rounded-2xl p-8">
          <div className="text-center mb-8 border-b border-black/10 pb-4">
            <h1 className="text-neutral-900 mb-2">Create Account</h1>
            <p className="text-neutral-600">
              Join Home Landscape Platform
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <Input
              label="Full Name"
              type="text"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />

            <Input
              label="Phone Number"
              type="tel"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
            />

            <Input
              label="Email Address"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />

            <Input
              label="Password"
              type="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
            />

            <Input
              label="Confirm Password"
              type="password"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              required
            />

            <div className="flex items-start gap-2 border border-black/20 bg-white rounded-md p-3">
              <input
                type="checkbox"
                id="terms"
                checked={formData.agreeTerms}
                onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
                className="mt-1 w-4 h-4 accent-orange-600"
                required
              />
              <label htmlFor="terms" className="text-neutral-700">
                I agree to the Terms of Service and Privacy Policy
              </label>
            </div>

            <Button type="submit" className="w-full">
              Create Account
            </Button>
          </form>

          <p className="text-center text-neutral-700 mt-6 pt-6 border-t border-dashed border-black/20">
            Already have an account?{' '}
            <Link to="/login" className="text-neutral-900 hover:text-orange-600 border-b border-neutral-400 hover:border-orange-600">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
