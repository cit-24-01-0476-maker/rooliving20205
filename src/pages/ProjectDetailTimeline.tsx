import { useNavigate, useParams } from 'react-router-dom';
import { Header } from '../components/Header';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { CheckCircle, Circle, FileText, Home, Wrench, DollarSign, MapPin } from 'lucide-react';

export function ProjectDetailTimeline() {
  const navigate = useNavigate();
  const { projectId } = useParams();

  const timeline = [
    {
      id: 'requirements',
      title: 'Requirements',
      description: 'Define project specifications',
      status: 'completed',
      icon: FileText,
      action: () => navigate('/requirements/step1')
    },
    {
      id: 'design',
      title: 'Design',
      description: 'View and select 2D/3D plans',
      status: 'completed',
      icon: Home,
      action: () => navigate('/plans')
    },
    {
      id: 'services',
      title: 'Services',
      description: 'Book professional services',
      status: 'in-progress',
      icon: Wrench,
      action: () => navigate('/services')
    },
    {
      id: 'loan',
      title: 'Loan Contact',
      description: 'Connect with bank for financing',
      status: 'pending',
      icon: DollarSign,
      action: () => navigate('/loan-request')
    },
    {
      id: 'inspection',
      title: 'Land Inspection',
      description: 'Schedule land survey',
      status: 'pending',
      icon: MapPin,
      action: () => navigate('/land-inspection')
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-600 bg-green-100';
      case 'in-progress': return 'text-blue-600 bg-blue-100';
      default: return 'text-gray-400 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header isAuthenticated={true} />
      
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/my-projects')}
            className="mb-4"
          >
            ← Back to Projects
          </Button>
          <h1 className="text-gray-900 mb-2">Modern Villa Project</h1>
          <p className="text-gray-600">Track your project progress through each stage</p>
        </div>

        {/* Project Overview */}
        <Card className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-gray-600 mb-1">Project Status</p>
              <p className="text-gray-900">In Progress</p>
            </div>
            <div>
              <p className="text-gray-600 mb-1">Overall Progress</p>
              <p className="text-gray-900">60%</p>
            </div>
            <div>
              <p className="text-gray-600 mb-1">Estimated Completion</p>
              <p className="text-gray-900">Mar 15, 2026</p>
            </div>
          </div>
        </Card>

        {/* Timeline */}
        <div className="space-y-4">
          {timeline.map((step, index) => (
            <Card key={step.id} className="relative">
              {index < timeline.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-8 bg-gray-200" />
              )}
              
              <div className="flex items-start gap-6">
                <div className={`w-16 h-16 ${getStatusColor(step.status)} rounded-full flex items-center justify-center flex-shrink-0`}>
                  {step.status === 'completed' ? (
                    <CheckCircle className="w-8 h-8" />
                  ) : step.status === 'in-progress' ? (
                    <step.icon className="w-8 h-8" />
                  ) : (
                    <Circle className="w-8 h-8" />
                  )}
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-gray-900 mb-1">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full capitalize ${getStatusColor(step.status)}`}>
                      {step.status.replace('-', ' ')}
                    </span>
                  </div>

                  <Button 
                    variant={step.status === 'in-progress' ? 'primary' : 'outline'}
                    onClick={step.action}
                    className="mt-4"
                  >
                    {step.status === 'completed' ? 'View Details' : 
                     step.status === 'in-progress' ? 'Continue' : 'Start'}
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
