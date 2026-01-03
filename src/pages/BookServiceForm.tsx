import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Header } from '../components/Header';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { Upload } from 'lucide-react';

export function BookServiceForm() {
  const navigate = useNavigate();
  const { serviceId } = useParams();
  
  const [formData, setFormData] = useState({
    project: '',
    date: '',
    time: '',
    address: '',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/booking-confirmation');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header isAuthenticated={true} />
      
      <div className="max-w-2xl mx-auto px-6 py-8">
        <div className="bg-white border border-gray-200 rounded-lg p-8">
          <h1 className="text-gray-900 mb-2">Book Service</h1>
          <p className="text-gray-600 mb-8">Fill in the details to book your painting service</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2">Select Project</label>
              <select
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.project}
                onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                required
              >
                <option value="">Choose a project</option>
                <option value="proj-001">Modern Villa Project</option>
                <option value="proj-002">Garden Renovation</option>
                <option value="new">Create New Project</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Preferred Date"
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                required
              />

              <Input
                label="Preferred Time"
                type="time"
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Service Address</label>
              <textarea
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-24"
                placeholder="Enter complete address"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Additional Notes (Optional)</label>
              <textarea
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-24"
                placeholder="Any specific requirements or instructions"
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Upload Images (Optional)</label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 mb-2">Click to upload or drag and drop</p>
                <p className="text-gray-500">PNG, JPG up to 10MB</p>
                <input type="file" multiple className="hidden" />
              </div>
            </div>

            <div className="flex gap-4">
              <Button 
                type="button" 
                variant="outline" 
                className="flex-1"
                onClick={() => navigate(-1)}
              >
                Cancel
              </Button>
              <Button type="submit" className="flex-1">
                Confirm Booking
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
