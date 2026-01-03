import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Button } from '../components/Button';
import { Upload, FileText } from 'lucide-react';

export function RequirementsFormStep3() {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/project/proj-001');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header isAuthenticated={true} />
      
      <div className="max-w-3xl mx-auto px-6 py-8">
        <div className="bg-white border border-gray-200 rounded-lg p-8">
          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600">Step 3 of 3</span>
              <span className="text-gray-600">100%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: '100%' }} />
            </div>
          </div>

          <h1 className="text-gray-900 mb-2">Upload & Confirm</h1>
          <p className="text-gray-600 mb-8">Add reference materials and review your requirements</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-3">Upload Land Sketch (Optional)</label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors cursor-pointer">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 mb-2">Click to upload land sketch or survey document</p>
                <p className="text-gray-500">PDF, PNG, JPG up to 10MB</p>
                <input type="file" className="hidden" accept=".pdf,.png,.jpg,.jpeg" />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-3">Upload Reference Images (Optional)</label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors cursor-pointer">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 mb-2">Upload images of designs you like</p>
                <p className="text-gray-500">Multiple files allowed. PNG, JPG up to 5MB each</p>
                <input type="file" multiple className="hidden" accept=".png,.jpg,.jpeg" />
              </div>
            </div>

            {/* Summary */}
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-6 h-6 text-blue-600" />
                <h2 className="text-gray-900">Requirements Summary</h2>
              </div>
              
              <div className="space-y-3 text-gray-600">
                <div className="flex justify-between">
                  <span>Floors:</span>
                  <span className="text-gray-900">2 Floors</span>
                </div>
                <div className="flex justify-between">
                  <span>Bedrooms:</span>
                  <span className="text-gray-900">3 Bedrooms</span>
                </div>
                <div className="flex justify-between">
                  <span>Bathrooms:</span>
                  <span className="text-gray-900">2 Bathrooms</span>
                </div>
                <div className="flex justify-between">
                  <span>Land Size:</span>
                  <span className="text-gray-900">2000 sq ft</span>
                </div>
                <div className="flex justify-between">
                  <span>Budget:</span>
                  <span className="text-gray-900">₹30 - 50 Lakhs</span>
                </div>
                <div className="flex justify-between">
                  <span>Garden Area:</span>
                  <span className="text-gray-900">500 sq ft</span>
                </div>
                <div className="flex justify-between">
                  <span>Parking:</span>
                  <span className="text-gray-900">2 Cars</span>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-6">
              <Button 
                type="button" 
                variant="outline" 
                className="flex-1"
                onClick={() => navigate('/requirements/step2')}
              >
                Previous
              </Button>
              <Button type="submit" className="flex-1">
                Submit Requirements
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
