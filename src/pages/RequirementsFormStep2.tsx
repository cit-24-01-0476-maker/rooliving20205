import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Input } from '../components/Input';
import { Button } from '../components/Button';

export function RequirementsFormStep2() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    gardenArea: '',
    plantPreferences: [] as string[],
    parking: '',
    outdoorSeating: false,
    waterFeatures: false
  });

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/requirements/step3');
  };

  const togglePlantPreference = (plant: string) => {
    setFormData(prev => ({
      ...prev,
      plantPreferences: prev.plantPreferences.includes(plant)
        ? prev.plantPreferences.filter(p => p !== plant)
        : [...prev.plantPreferences, plant]
    }));
  };

  const plants = ['Flowers', 'Shrubs', 'Trees', 'Lawn', 'Herbs', 'Succulents'];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header isAuthenticated={true} />
      
      <div className="max-w-3xl mx-auto px-6 py-8">
        <div className="bg-white border border-gray-200 rounded-lg p-8">
          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600">Step 2 of 3</span>
              <span className="text-gray-600">67%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: '67%' }} />
            </div>
          </div>

          <h1 className="text-gray-900 mb-2">Landscape Needs</h1>
          <p className="text-gray-600 mb-8">Describe your landscaping preferences</p>

          <form onSubmit={handleNext} className="space-y-6">
            <Input
              label="Garden Area (sq ft)"
              type="number"
              placeholder="e.g., 500"
              value={formData.gardenArea}
              onChange={(e) => setFormData({ ...formData, gardenArea: e.target.value })}
              required
            />

            <div>
              <label className="block text-gray-700 mb-3">Plant Preferences</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {plants.map(plant => (
                  <button
                    key={plant}
                    type="button"
                    onClick={() => togglePlantPreference(plant)}
                    className={`px-4 py-2 rounded-lg border transition-colors ${
                      formData.plantPreferences.includes(plant)
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-white text-gray-700 border-gray-300 hover:border-blue-400'
                    }`}
                  >
                    {plant}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Parking Spaces</label>
              <select
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.parking}
                onChange={(e) => setFormData({ ...formData, parking: e.target.value })}
                required
              >
                <option value="">Select parking spaces</option>
                <option value="1">1 Car</option>
                <option value="2">2 Cars</option>
                <option value="3">3 Cars</option>
                <option value="4+">4+ Cars</option>
              </select>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="outdoorSeating"
                  checked={formData.outdoorSeating}
                  onChange={(e) => setFormData({ ...formData, outdoorSeating: e.target.checked })}
                  className="w-5 h-5"
                />
                <label htmlFor="outdoorSeating" className="text-gray-700">
                  Include outdoor seating area
                </label>
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="waterFeatures"
                  checked={formData.waterFeatures}
                  onChange={(e) => setFormData({ ...formData, waterFeatures: e.target.checked })}
                  className="w-5 h-5"
                />
                <label htmlFor="waterFeatures" className="text-gray-700">
                  Include water features (fountain, pond)
                </label>
              </div>
            </div>

            <div className="flex gap-4 pt-6">
              <Button 
                type="button" 
                variant="outline" 
                className="flex-1"
                onClick={() => navigate('/requirements/step1')}
              >
                Previous
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
