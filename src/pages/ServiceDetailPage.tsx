import { useNavigate, useParams } from 'react-router-dom';
import { Header } from '../components/Header';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Star, Check, Paintbrush } from 'lucide-react';

export function ServiceDetailPage() {
  const navigate = useNavigate();
  const { serviceId } = useParams();

  const packages = [
    {
      name: 'Basic',
      price: '₹5,000',
      features: [
        'Single room coverage',
        'Standard paint quality',
        'Basic color consultation',
        '1 week completion'
      ]
    },
    {
      name: 'Standard',
      price: '₹15,000',
      features: [
        'Up to 3 rooms',
        'Premium paint quality',
        'Color consultation',
        'Minor wall repairs',
        '2 weeks completion',
        '6 months warranty'
      ],
      recommended: true
    },
    {
      name: 'Premium',
      price: '₹35,000',
      features: [
        'Entire house coverage',
        'Premium imported paint',
        'Expert design consultation',
        'Complete wall preparation',
        'Decorative finishes',
        '3 weeks completion',
        '1 year warranty'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header isAuthenticated={true} />
      
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Service Header */}
        <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8">
          <div className="flex items-start gap-6">
            <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
              <Paintbrush className="w-10 h-10" />
            </div>
            
            <div className="flex-1">
              <h1 className="text-gray-900 mb-2">Professional Painting Service</h1>
              <p className="text-gray-600 mb-4">
                Transform your home with our expert painting services. We use high-quality materials 
                and skilled professionals to deliver exceptional results.
              </p>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="text-gray-900">4.8</span>
                  <span className="text-gray-500">(156 reviews)</span>
                </div>
                <span className="text-gray-300">|</span>
                <span className="text-gray-600">Verified Service Provider</span>
              </div>
            </div>
          </div>
        </div>

        {/* Service Description */}
        <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8">
          <h2 className="text-gray-900 mb-4">About This Service</h2>
          <p className="text-gray-600 mb-4">
            Our professional painters bring years of experience to every project. We handle everything 
            from surface preparation to final touches, ensuring a flawless finish that lasts.
          </p>
          <p className="text-gray-600">
            Whether you need interior painting, exterior coating, or decorative finishes, our team 
            is equipped to handle projects of all sizes with attention to detail and quality craftsmanship.
          </p>
        </div>

        {/* Packages */}
        <div className="mb-8">
          <h2 className="text-gray-900 mb-6">Choose Your Package</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <Card 
                key={pkg.name}
                className={pkg.recommended ? 'border-blue-500 border-2 relative' : ''}
              >
                {pkg.recommended && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full">
                    Recommended
                  </div>
                )}
                
                <h3 className="text-gray-900 mb-2">{pkg.name}</h3>
                <div className="mb-6">
                  <span className="text-gray-900">{pkg.price}</span>
                  <span className="text-gray-500"> onwards</span>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={pkg.recommended ? 'primary' : 'outline'}
                  className="w-full"
                  onClick={() => navigate(`/book-service/${serviceId}?package=${pkg.name.toLowerCase()}`)}
                >
                  Book {pkg.name}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
