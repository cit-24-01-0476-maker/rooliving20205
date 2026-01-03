import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Button } from '../components/Button';
import { CheckCircle, Calendar, MapPin, Clock } from 'lucide-react';

export function BookingConfirmation() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header isAuthenticated={true} />
      
      <div className="max-w-2xl mx-auto px-6 py-12">
        <div className="bg-white border border-gray-200 rounded-lg p-8 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          
          <h1 className="text-gray-900 mb-3">Booking Confirmed!</h1>
          <p className="text-gray-600 mb-8">
            Your service booking has been successfully placed. The service provider will contact you shortly.
          </p>

          {/* Booking Summary */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left">
            <h2 className="text-gray-900 mb-4">Booking Summary</h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-gray-400 mt-0.5" />
                <div>
                  <p className="text-gray-600">Date</p>
                  <p className="text-gray-900">December 28, 2025</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-gray-400 mt-0.5" />
                <div>
                  <p className="text-gray-600">Time</p>
                  <p className="text-gray-900">10:00 AM</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
                <div>
                  <p className="text-gray-600">Address</p>
                  <p className="text-gray-900">123 Main Street, Springfield, ST 12345</p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Booking ID</span>
                <span className="text-gray-900">BKG-2025-001234</span>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <Button 
              variant="outline" 
              className="flex-1"
              onClick={() => navigate('/dashboard')}
            >
              Back to Dashboard
            </Button>
            <Button 
              className="flex-1"
              onClick={() => navigate('/my-projects')}
            >
              Track in My Projects
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
