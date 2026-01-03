import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Button } from '../components/Button';
import { CheckCircle, Building2, Phone, Clock } from 'lucide-react';

export function LoanSubmittedSuccess() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header isAuthenticated={true} />
      
      <div className="max-w-2xl mx-auto px-6 py-12">
        <div className="bg-white border border-gray-200 rounded-lg p-8 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          
          <h1 className="text-gray-900 mb-3">Request Submitted Successfully!</h1>
          <p className="text-gray-600 mb-8">
            Your loan contact request has been sent to the bank. They will reach out to you soon.
          </p>

          {/* Next Steps */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left">
            <h2 className="text-gray-900 mb-4 text-center">What Happens Next?</h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-gray-900 mb-1">Bank Review</h3>
                  <p className="text-gray-600">
                    The bank will review your request within 24 hours
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-gray-900 mb-1">Bank Contact</h3>
                  <p className="text-gray-600">
                    A loan officer will contact you within 2-3 business days
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="text-gray-900 mb-1">Initial Consultation</h3>
                  <p className="text-gray-600">
                    Discuss your requirements and loan eligibility
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
            <p className="text-yellow-800">
              <strong>Note:</strong> Keep your documents ready - ID proof, income proof, and property documents.
            </p>
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
              View My Projects
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
