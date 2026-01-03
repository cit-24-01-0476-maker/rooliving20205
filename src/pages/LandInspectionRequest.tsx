import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { MapPin } from 'lucide-react';

export function LandInspectionRequest() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    location: '',
    city: '',
    state: '',
    pincode: '',
    date: '',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/inspection-status/insp-001');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header isAuthenticated={true} />
      
      <div className="max-w-2xl mx-auto px-6 py-8">
        <div className="bg-white border border-gray-200 rounded-lg p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
              <MapPin className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h1 className="text-gray-900">Land Inspection Request</h1>
              <p className="text-gray-600">Schedule a professional land survey and inspection</p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <p className="text-blue-800">
              Our certified inspectors will visit your land to assess soil quality, boundaries, 
              legal status, and provide a comprehensive report.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2">Land Location</label>
              <textarea
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-24"
                placeholder="Enter complete land address or location details"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="City"
                type="text"
                placeholder="Enter city"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                required
              />

              <Input
                label="State"
                type="text"
                placeholder="Enter state"
                value={formData.state}
                onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                required
              />
            </div>

            <Input
              label="Pincode"
              type="text"
              placeholder="Enter pincode"
              value={formData.pincode}
              onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
              required
            />

            <Input
              label="Preferred Inspection Date"
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              required
            />

            <div>
              <label className="block text-gray-700 mb-2">Additional Information (Optional)</label>
              <textarea
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-24"
                placeholder="Any specific areas of concern or requirements"
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              />
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="text-gray-900 mb-3">Inspection Includes:</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Soil quality analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Boundary verification</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Legal document review</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Topography assessment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Comprehensive report</span>
                </li>
              </ul>
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
