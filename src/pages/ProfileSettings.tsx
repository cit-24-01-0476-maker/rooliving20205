import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Card } from '../components/Card';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { User, MapPin, Mail, LogOut } from 'lucide-react';

export function ProfileSettings() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+91 9876543210'
  });

  const [contactForm, setContactForm] = useState({
    subject: '',
    message: ''
  });

  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Profile updated successfully!');
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message sent successfully!');
    setContactForm({ subject: '', message: '' });
  };

  const handleLogout = () => {
    if (confirm('Are you sure you want to logout?')) {
      navigate('/');
    }
  };

  const savedAddresses = [
    { id: 1, label: 'Home', address: '123 Main Street, Springfield, ST 12345' },
    { id: 2, label: 'Work', address: '456 Business Avenue, Springfield, ST 12346' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header isAuthenticated={true} />
      
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-gray-900 mb-2">Profile & Settings</h1>
          <p className="text-gray-600">Manage your account information and preferences</p>
        </div>

        <div className="space-y-6">
          {/* Profile Information */}
          <Card>
            <div className="flex items-center gap-3 mb-6">
              <User className="w-6 h-6 text-blue-600" />
              <h2 className="text-gray-900">Profile Information</h2>
            </div>

            <form onSubmit={handleProfileUpdate} className="space-y-4">
              <Input
                label="Full Name"
                type="text"
                value={profile.name}
                onChange={(e) => setProfile({ ...profile, name: e.target.value })}
              />

              <Input
                label="Email Address"
                type="email"
                value={profile.email}
                onChange={(e) => setProfile({ ...profile, email: e.target.value })}
              />

              <Input
                label="Phone Number"
                type="tel"
                value={profile.phone}
                onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
              />

              <Button type="submit" variant="primary">
                Update Profile
              </Button>
            </form>
          </Card>

          {/* Saved Addresses */}
          <Card>
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="w-6 h-6 text-green-600" />
              <h2 className="text-gray-900">Saved Addresses</h2>
            </div>

            <div className="space-y-4">
              {savedAddresses.map((addr) => (
                <div key={addr.id} className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="text-gray-900 mb-1">{addr.label}</p>
                    <p className="text-gray-600">{addr.address}</p>
                  </div>
                  <Button variant="ghost" size="sm">
                    Edit
                  </Button>
                </div>
              ))}
              <Button variant="outline" className="w-full">
                Add New Address
              </Button>
            </div>
          </Card>

          {/* Contact Form */}
          <Card>
            <div className="flex items-center gap-3 mb-6">
              <Mail className="w-6 h-6 text-purple-600" />
              <h2 className="text-gray-900">Contact Support</h2>
            </div>

            <form onSubmit={handleContactSubmit} className="space-y-4">
              <Input
                label="Subject"
                type="text"
                placeholder="Enter subject"
                value={contactForm.subject}
                onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                required
              />

              <div>
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
                  placeholder="How can we help you?"
                  value={contactForm.message}
                  onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                  required
                />
              </div>

              <Button type="submit" variant="primary">
                Send Message
              </Button>
            </form>
          </Card>

          {/* Logout */}
          <Card>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-gray-900 mb-1">Logout</h3>
                <p className="text-gray-600">Sign out from your account</p>
              </div>
              <Button 
                variant="outline" 
                onClick={handleLogout}
                className="text-red-600 border-red-300 hover:bg-red-50"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
