import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Eye } from 'lucide-react';

export function PlansLibrary() {
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState<'2d' | '3d'>('2d');

  const plans = [
    {
      id: 'plan-001',
      title: 'Modern Villa - 2 Floor',
      size: '2000 sq ft',
      rooms: '3 BR, 2 Bath',
      style: 'Contemporary',
      thumbnail: '🏠'
    },
    {
      id: 'plan-002',
      title: 'Traditional House - Single Floor',
      size: '1500 sq ft',
      rooms: '2 BR, 2 Bath',
      style: 'Traditional',
      thumbnail: '🏡'
    },
    {
      id: 'plan-003',
      title: 'Luxury Villa - 3 Floor',
      size: '3500 sq ft',
      rooms: '5 BR, 4 Bath',
      style: 'Luxury',
      thumbnail: '🏛️'
    },
    {
      id: 'plan-004',
      title: 'Compact Home - Single Floor',
      size: '1200 sq ft',
      rooms: '2 BR, 1 Bath',
      style: 'Minimalist',
      thumbnail: '🏘️'
    },
    {
      id: 'plan-005',
      title: 'Garden Villa - 2 Floor',
      size: '2500 sq ft',
      rooms: '4 BR, 3 Bath',
      style: 'Garden Style',
      thumbnail: '🌳'
    },
    {
      id: 'plan-006',
      title: 'Urban House - 2 Floor',
      size: '1800 sq ft',
      rooms: '3 BR, 2 Bath',
      style: 'Urban Modern',
      thumbnail: '🏙️'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Header isAuthenticated={true} />
      
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="border-l-4 border-gray-800 pl-4">
            <h1 className="text-gray-900 mb-2">Plans Library</h1>
            <p className="text-gray-600">Browse and explore house designs</p>
          </div>

          {/* View Mode Toggle */}
          <div className="flex bg-white border-2 border-gray-400 p-1">
            <button
              onClick={() => setViewMode('2d')}
              className={`px-6 py-2 border-2 transition-colors ${
                viewMode === '2d'
                  ? 'bg-gray-800 text-white border-gray-800'
                  : 'text-gray-600 border-transparent hover:border-gray-400'
              }`}
            >
              2D Plans
            </button>
            <button
              onClick={() => setViewMode('3d')}
              className={`px-6 py-2 border-2 transition-colors ${
                viewMode === '3d'
                  ? 'bg-gray-800 text-white border-gray-800'
                  : 'text-gray-600 border-transparent hover:border-gray-400'
              }`}
            >
              3D Plans
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <Card key={plan.id}>
              {/* Thumbnail */}
              <div className="border-4 border-dashed border-gray-400 bg-gray-50 h-48 flex items-center justify-center mb-4">
                <span className="text-6xl">{plan.thumbnail}</span>
              </div>

              <h3 className="text-gray-900 mb-2 border-b-2 border-gray-300 pb-2">{plan.title}</h3>
              
              <div className="space-y-2 mb-4 text-gray-600 border-2 border-gray-300 p-3">
                <div className="flex justify-between border-b border-gray-300 pb-1">
                  <span>Size:</span>
                  <span className="text-gray-900">{plan.size}</span>
                </div>
                <div className="flex justify-between border-b border-gray-300 pb-1">
                  <span>Layout:</span>
                  <span className="text-gray-900">{plan.rooms}</span>
                </div>
                <div className="flex justify-between">
                  <span>Style:</span>
                  <span className="text-gray-900">{plan.style}</span>
                </div>
              </div>

              <Button
                variant="primary"
                className="w-full"
                onClick={() => navigate(`/plan/${plan.id}?mode=${viewMode}`)}
              >
                <Eye className="w-4 h-4 mr-2" />
                View {viewMode.toUpperCase()} Plan
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}