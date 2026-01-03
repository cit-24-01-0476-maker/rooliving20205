import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Button } from '../components/Button';
import { Home, Wrench, DollarSign, CheckCircle } from 'lucide-react';

export function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100">
      <Header isAuthenticated={false} />
      
      {/* Hero Section */}
      <section className="bg-gray-800 text-white border-b-4 border-gray-900">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <div className="border-4 border-dashed border-gray-600 p-8 mb-8 inline-block">
            <h1 className="text-gray-50 mb-6">
              Your Dream Home, Perfectly Planned
            </h1>
            <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
              A complete platform to plan your house and landscape, view 2D/3D designs, 
              book professional services, and connect with banks for loan guidance.
            </p>
          </div>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button 
              size="lg" 
              variant="primary"
              className="bg-white text-gray-800 border-white hover:bg-gray-100"
              onClick={() => navigate('/plans')}
            >
              Explore Plans
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-white bg-transparent hover:bg-gray-700"
              onClick={() => navigate('/services')}
            >
              Book Services
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-white bg-transparent hover:bg-gray-700"
              onClick={() => navigate('/loan-request')}
            >
              Request Loan
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-8">
          <div className="inline-block border-b-4 border-gray-800 pb-2">
            <h2 className="text-gray-900">
              Everything You Need in One Platform
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center border-2 border-gray-400 p-6 bg-white">
            <div className="w-16 h-16 border-2 border-gray-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <Home className="w-8 h-8 text-gray-700" />
            </div>
            <h3 className="text-gray-900 mb-2 border-b-2 border-gray-300 pb-2">House & Landscape Plans</h3>
            <p className="text-gray-600">
              View 2D and 3D plans tailored to your requirements
            </p>
          </div>
          
          <div className="text-center border-2 border-gray-400 p-6 bg-white">
            <div className="w-16 h-16 border-2 border-gray-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <Wrench className="w-8 h-8 text-gray-700" />
            </div>
            <h3 className="text-gray-900 mb-2 border-b-2 border-gray-300 pb-2">Professional Services</h3>
            <p className="text-gray-600">
              Book painters, gardeners, contractors, and more
            </p>
          </div>
          
          <div className="text-center border-2 border-gray-400 p-6 bg-white">
            <div className="w-16 h-16 border-2 border-gray-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <DollarSign className="w-8 h-8 text-gray-700" />
            </div>
            <h3 className="text-gray-900 mb-2 border-b-2 border-gray-300 pb-2">Loan Guidance</h3>
            <p className="text-gray-600">
              Connect with partner banks for home loan assistance
            </p>
          </div>
          
          <div className="text-center border-2 border-gray-400 p-6 bg-white">
            <div className="w-16 h-16 border-2 border-gray-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-gray-700" />
            </div>
            <h3 className="text-gray-900 mb-2 border-b-2 border-gray-300 pb-2">Land Inspection</h3>
            <p className="text-gray-600">
              Request professional land checks and surveys
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-200 py-16 border-t-2 border-b-2 border-gray-400">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="border-4 border-dashed border-gray-500 p-8 bg-white">
            <h2 className="text-gray-900 mb-4">
              Ready to Start Your Dream Project?
            </h2>
            <p className="text-gray-600 mb-8">
              Join thousands of homeowners who have successfully planned and built their dream homes.
            </p>
            <Button size="lg" onClick={() => navigate('/signup')}>
              Get Started Free
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 border-t-4 border-gray-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p>&copy; 2025 Home Landscape Platform. Academic UI/UX Prototype - CS2311</p>
        </div>
      </footer>
    </div>
  );
}