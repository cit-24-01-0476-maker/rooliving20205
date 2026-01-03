import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Input } from '../components/Input';
import { Button } from '../components/Button';

export function RequirementsFormStep1() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    floors: '',
    rooms: '',
    bathrooms: '',
    landSize: '',
    budget: ''
  });

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/requirements/step2');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header isAuthenticated={true} />
      
      <div className="max-w-3xl mx-auto px-6 py-8">
        <div className="bg-white border border-gray-200 rounded-lg p-8">
          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600">Step 1 of 3</span>
              <span className="text-gray-600">33%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: '33%' }} />
            </div>
          </div>

          <h1 className="text-gray-900 mb-2">House Basics</h1>
          <p className="text-gray-600 mb-8">Tell us about your house requirements</p>

          <form onSubmit={handleNext} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2">Number of Floors</label>
                <select
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.floors}
                  onChange={(e) => setFormData({ ...formData, floors: e.target.value })}
                  required
                >
                  <option value="">Select floors</option>
                  <option value="1">1 Floor</option>
                  <option value="2">2 Floors</option>
                  <option value="3">3 Floors</option>
                  <option value="4+">4+ Floors</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Number of Rooms</label>
                <select
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.rooms}
                  onChange={(e) => setFormData({ ...formData, rooms: e.target.value })}
                  required
                >
                  <option value="">Select rooms</option>
                  <option value="1">1 Bedroom</option>
                  <option value="2">2 Bedrooms</option>
                  <option value="3">3 Bedrooms</option>
                  <option value="4">4 Bedrooms</option>
                  <option value="5+">5+ Bedrooms</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2">Number of Bathrooms</label>
                <select
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.bathrooms}
                  onChange={(e) => setFormData({ ...formData, bathrooms: e.target.value })}
                  required
                >
                  <option value="">Select bathrooms</option>
                  <option value="1">1 Bathroom</option>
                  <option value="2">2 Bathrooms</option>
                  <option value="3">3 Bathrooms</option>
                  <option value="4+">4+ Bathrooms</option>
                </select>
              </div>

              <Input
                label="Land Size (sq ft)"
                type="number"
                placeholder="e.g., 2000"
                value={formData.landSize}
                onChange={(e) => setFormData({ ...formData, landSize: e.target.value })}
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Budget Range (₹)</label>
              <select
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                required
              >
                <option value="">Select budget range</option>
                <option value="10-20">₹10 - 20 Lakhs</option>
                <option value="20-30">₹20 - 30 Lakhs</option>
                <option value="30-50">₹30 - 50 Lakhs</option>
                <option value="50-75">₹50 - 75 Lakhs</option>
                <option value="75+">₹75 Lakhs+</option>
              </select>
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
                Next Step
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
