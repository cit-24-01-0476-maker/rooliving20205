import { useNavigate, useParams } from 'react-router-dom';
import { Header } from '../components/Header';
import { Button } from '../components/Button';
import { CheckCircle, Circle, Clock, User, MapPin, Calendar } from 'lucide-react';

export function InspectionStatus() {
  const navigate = useNavigate();
  const { inspectionId } = useParams();

  const steps = [
    { 
      id: 'requested', 
      title: 'Request Submitted', 
      status: 'completed',
      date: 'Dec 20, 2025'
    },
    { 
      id: 'scheduled', 
      title: 'Inspection Scheduled', 
      status: 'completed',
      date: 'Dec 22, 2025'
    },
    { 
      id: 'completed', 
      title: 'Inspection Completed', 
      status: 'in-progress',
      date: 'Expected: Dec 28, 2025'
    },
    { 
      id: 'report', 
      title: 'Report Available', 
      status: 'pending',
      date: 'Pending'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header isAuthenticated={true} />
      
      <div className="max-w-4xl mx-auto px-6 py-8">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/my-projects')}
          className="mb-6"
        >
          ← Back to Projects
        </Button>

        <div className="bg-white border border-gray-200 rounded-lg p-8 mb-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
              <MapPin className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h1 className="text-gray-900 mb-1">Land Inspection Status</h1>
              <p className="text-gray-600">Request ID: {inspectionId?.toUpperCase()}</p>
            </div>
          </div>

          {/* Inspector Details */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
            <h2 className="text-gray-900 mb-4">Inspector Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <User className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="text-gray-600">Inspector Name</p>
                  <p className="text-gray-900">Rajesh Kumar</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="text-gray-600">Scheduled Date</p>
                  <p className="text-gray-900">December 28, 2025</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="text-gray-600">Time</p>
                  <p className="text-gray-900">10:00 AM - 2:00 PM</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="text-gray-600">Location</p>
                  <p className="text-gray-900">Springfield, ST</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Status Timeline */}
        <div className="bg-white border border-gray-200 rounded-lg p-8">
          <h2 className="text-gray-900 mb-6">Inspection Progress</h2>
          
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div key={step.id} className="relative">
                {index < steps.length - 1 && (
                  <div className="absolute left-5 top-12 w-0.5 h-12 bg-gray-200" />
                )}
                
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                    step.status === 'completed' 
                      ? 'bg-green-100 text-green-600' 
                      : step.status === 'in-progress'
                      ? 'bg-blue-100 text-blue-600'
                      : 'bg-gray-100 text-gray-400'
                  }`}>
                    {step.status === 'completed' ? (
                      <CheckCircle className="w-6 h-6" />
                    ) : step.status === 'in-progress' ? (
                      <Clock className="w-6 h-6" />
                    ) : (
                      <Circle className="w-6 h-6" />
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-gray-900 mb-1">{step.title}</h3>
                    <p className="text-gray-600">{step.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
              <p className="text-yellow-800">
                The inspector will contact you 24 hours before the scheduled inspection.
              </p>
            </div>
            
            <Button 
              variant="primary"
              className="w-full"
              onClick={() => navigate('/my-projects')}
            >
              Back to Projects
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
