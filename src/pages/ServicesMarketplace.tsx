import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Star, Paintbrush, Flower2, HardHat, Zap, Wrench } from 'lucide-react';

export function ServicesMarketplace() {
  const navigate = useNavigate();

  const services = [
    {
      id: 'painter',
      icon: Paintbrush,
      name: 'Painter',
      description: 'Professional interior and exterior painting services',
      rating: 4.8,
      reviews: 156,
      priceRange: '₹5,000 - ₹50,000',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      id: 'gardener',
      icon: Flower2,
      name: 'Gardener',
      description: 'Expert landscaping and garden maintenance',
      rating: 4.9,
      reviews: 203,
      priceRange: '₹3,000 - ₹30,000',
      color: 'bg-green-100 text-green-600'
    },
    {
      id: 'contractor',
      icon: HardHat,
      name: 'Contractor',
      description: 'Complete construction and renovation services',
      rating: 4.7,
      reviews: 89,
      priceRange: '₹50,000 - ₹5,00,000',
      color: 'bg-orange-100 text-orange-600'
    },
    {
      id: 'electrician',
      icon: Zap,
      name: 'Electrician',
      description: 'Licensed electrical installation and repair',
      rating: 4.8,
      reviews: 134,
      priceRange: '₹2,000 - ₹25,000',
      color: 'bg-yellow-100 text-yellow-600'
    },
    {
      id: 'plumber',
      icon: Wrench,
      name: 'Plumber',
      description: 'Professional plumbing services and repairs',
      rating: 4.6,
      reviews: 98,
      priceRange: '₹1,500 - ₹20,000',
      color: 'bg-purple-100 text-purple-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Header isAuthenticated={true} />
      
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8 border-l-4 border-gray-800 pl-4">
          <h1 className="text-gray-900 mb-2">Services Marketplace</h1>
          <p className="text-gray-600">Book professional services for your home project</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card key={service.id}>
              <div className={`w-16 h-16 border-2 border-gray-400 rounded-full flex items-center justify-center mb-4`}>
                <service.icon className="w-8 h-8 text-gray-700" />
              </div>
              
              <h3 className="text-gray-900 mb-2 border-b-2 border-gray-300 pb-2">{service.name}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              
              <div className="flex items-center gap-2 mb-3 border-2 border-dashed border-gray-300 p-2">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-gray-700" />
                  <span className="text-gray-900">{service.rating}</span>
                </div>
                <span className="text-gray-500">({service.reviews} reviews)</span>
              </div>
              
              <div className="mb-4 pb-4 border-b-2 border-gray-400">
                <p className="text-gray-600">Price Range</p>
                <p className="text-gray-900">{service.priceRange}</p>
              </div>
              
              <Button 
                variant="primary"
                className="w-full"
                onClick={() => navigate(`/services/${service.id}`)}
              >
                View Service
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}