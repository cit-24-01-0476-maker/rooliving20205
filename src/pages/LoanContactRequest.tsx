import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { Building2 } from 'lucide-react';

export function LoanContactRequest() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    bank: '',
    income: '',
    contactTime: '',
    phone: '',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/loan-success');
  };

  const banks = [
    'State Bank of India',
    'HDFC Bank',
    'ICICI Bank',
    'Axis Bank',
    'Punjab National Bank'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header isAuthenticated={true} />
      
      <div className="max-w-2xl mx-auto px-6 py-8">
        <div className="bg-white border border-gray-200 rounded-lg p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
              <Building2 className="w-8 h-8 text-purple-600" />
            </div>
            <div>
              <h1 className="text-gray-900">Loan Contact Request</h1>
              <p className="text-gray-600">Connect with a bank for home loan guidance</p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <p className="text-blue-800">
              Our partner banks will contact you within 2-3 business days to discuss your 
              home loan requirements and guide you through the process.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2">Select Preferred Bank</label>
              <select
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.bank}
                onChange={(e) => setFormData({ ...formData, bank: e.target.value })}
                required
              >
                <option value="">Choose a bank</option>
                {banks.map(bank => (
                  <option key={bank} value={bank}>{bank}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Monthly Income Range (₹)</label>
              <select
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.income}
                onChange={(e) => setFormData({ ...formData, income: e.target.value })}
                required
              >
                <option value="">Select income range</option>
                <option value="25-50">₹25,000 - 50,000</option>
                <option value="50-75">₹50,000 - 75,000</option>
                <option value="75-100">₹75,000 - 1,00,000</option>
                <option value="100+">₹1,00,000+</option>
              </select>
            </div>

            <Input
              label="Contact Phone Number"
              type="tel"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
            />

            <div>
              <label className="block text-gray-700 mb-2">Preferred Contact Time</label>
              <select
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.contactTime}
                onChange={(e) => setFormData({ ...formData, contactTime: e.target.value })}
                required
              >
                <option value="">Select preferred time</option>
                <option value="morning">Morning (9 AM - 12 PM)</option>
                <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
                <option value="evening">Evening (4 PM - 7 PM)</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Additional Notes (Optional)</label>
              <textarea
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-24"
                placeholder="Any specific requirements or questions"
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              />
            </div>

            <div className="flex gap-4 pt-6">
              <Button 
                type="button" 
                variant="outline" 
                className="flex-1"
                onClick={() => navigate('/dashboard')}
              >
                Cancel
              </Button>
              <Button type="submit" className="flex-1">
                Submit Request
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
