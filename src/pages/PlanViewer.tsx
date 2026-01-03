import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { Header } from '../components/Header';
import { Button } from '../components/Button';
import { Download, Maximize2, Edit3, ArrowLeft } from 'lucide-react';

export function PlanViewer() {
  const navigate = useNavigate();
  const { planId } = useParams();
  const [searchParams] = useSearchParams();
  const mode = searchParams.get('mode') || '2d';

  return (
    <div className="min-h-screen bg-gray-100">
      <Header isAuthenticated={true} />
      
      <div className="max-w-7xl mx-auto px-6 py-8">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/plans')}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Plans
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Plan Viewer */}
          <div className="lg:col-span-2">
            <div className="bg-white border-2 border-gray-400 overflow-hidden">
              <div className="bg-gray-200 px-6 py-4 border-b-2 border-gray-400 flex items-center justify-between">
                <h2 className="text-gray-900">
                  {mode === '3d' ? '3D' : '2D'} Plan View
                </h2>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Maximize2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              {/* Plan Preview Area */}
              <div className="border-8 border-dashed border-gray-300 bg-gray-50 aspect-[4/3] flex items-center justify-center p-8">
                <div className="text-center">
                  <div className="w-32 h-32 border-4 border-gray-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    {mode === '3d' ? (
                      <span className="text-5xl">🏗️</span>
                    ) : (
                      <span className="text-5xl">📐</span>
                    )}
                  </div>
                  <div className="border-2 border-gray-400 bg-white p-4">
                    <p className="text-gray-600">
                      {mode === '3d' ? '3D' : '2D'} Plan Preview
                    </p>
                    <p className="text-gray-500 mt-2">
                      Interactive plan viewer would be displayed here
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Plan Information */}
          <div className="space-y-6">
            <div className="bg-white border-2 border-gray-400 p-6">
              <h3 className="text-gray-900 mb-4 border-b-2 border-gray-800 pb-2">Plan Details</h3>
              
              <div className="space-y-3 text-gray-600 mb-6">
                <div className="border-b border-gray-300 pb-2">
                  <p className="mb-1">Plan Name</p>
                  <p className="text-gray-900">Modern Villa - 2 Floor</p>
                </div>
                <div className="border-b border-gray-300 pb-2">
                  <p className="mb-1">Total Area</p>
                  <p className="text-gray-900">2000 sq ft</p>
                </div>
                <div className="border-b border-gray-300 pb-2">
                  <p className="mb-1">Layout</p>
                  <p className="text-gray-900">3 Bedrooms, 2 Bathrooms</p>
                </div>
                <div className="border-b border-gray-300 pb-2">
                  <p className="mb-1">Style</p>
                  <p className="text-gray-900">Contemporary</p>
                </div>
                <div>
                  <p className="mb-1">Floors</p>
                  <p className="text-gray-900">2 Floors</p>
                </div>
              </div>

              <div className="pt-6 border-t-2 border-gray-400">
                <h4 className="text-gray-900 mb-3 border-b border-gray-300 pb-2">Features</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2 border-l-2 border-gray-400 pl-2">
                    <span className="text-gray-800 mt-1">•</span>
                    <span>Modern open-plan living</span>
                  </li>
                  <li className="flex items-start gap-2 border-l-2 border-gray-400 pl-2">
                    <span className="text-gray-800 mt-1">•</span>
                    <span>Large windows for natural light</span>
                  </li>
                  <li className="flex items-start gap-2 border-l-2 border-gray-400 pl-2">
                    <span className="text-gray-800 mt-1">•</span>
                    <span>Attached garage</span>
                  </li>
                  <li className="flex items-start gap-2 border-l-2 border-gray-400 pl-2">
                    <span className="text-gray-800 mt-1">•</span>
                    <span>Garden-ready layout</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Actions */}
            <div className="bg-white border-2 border-gray-400 p-6 space-y-3">
              <Button variant="primary" className="w-full">
                <Edit3 className="w-4 h-4 mr-2" />
                Request Changes
              </Button>
              <Button variant="outline" className="w-full">
                <Download className="w-4 h-4 mr-2" />
                Download Plan
              </Button>
              <Button variant="outline" className="w-full">
                <Maximize2 className="w-4 h-4 mr-2" />
                View Fullscreen
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}