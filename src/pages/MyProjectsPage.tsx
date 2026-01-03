import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Plus, Calendar, TrendingUp } from 'lucide-react';

export function MyProjectsPage() {
  const navigate = useNavigate();

  const projects = [
    {
      id: 'proj-001',
      name: 'Modern Villa Project',
      status: 'In Progress',
      statusColor: 'bg-blue-50 text-blue-600',
      progress: 60,
      created: 'Dec 10, 2025',
      lastUpdate: '2 days ago',
      description: '4 bedroom villa with modern landscape design'
    },
    {
      id: 'proj-002',
      name: 'Garden Renovation',
      status: 'Planning',
      statusColor: 'bg-yellow-50 text-yellow-600',
      progress: 20,
      created: 'Dec 15, 2025',
      lastUpdate: '1 week ago',
      description: 'Complete garden redesign with water features'
    },
    {
      id: 'proj-003',
      name: 'Home Interior Updates',
      status: 'Completed',
      statusColor: 'bg-green-50 text-green-600',
      progress: 100,
      created: 'Nov 5, 2025',
      lastUpdate: '3 weeks ago',
      description: 'Interior painting and minor renovations'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header isAuthenticated={true} />
      
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-gray-900 mb-2">My Projects</h1>
            <p className="text-gray-600">Track and manage all your home projects</p>
          </div>
          <Button onClick={() => navigate('/requirements/step1')}>
            <Plus className="w-5 h-5 mr-2" />
            New Project
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Card key={project.id}>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-gray-900 mb-2">{project.name}</h3>
                  <span className={`inline-block px-3 py-1 rounded-full ${project.statusColor}`}>
                    {project.status}
                  </span>
                </div>
                <TrendingUp className="w-5 h-5 text-gray-400" />
              </div>

              <p className="text-gray-600 mb-4">{project.description}</p>

              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-600">Progress</span>
                  <span className="text-gray-900">{project.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-200 mb-4">
                <div className="flex items-center gap-2 text-gray-500">
                  <Calendar className="w-4 h-4" />
                  <span>Created {project.created}</span>
                </div>
                <span className="text-gray-500">Updated {project.lastUpdate}</span>
              </div>

              <Button 
                variant="primary"
                className="w-full"
                onClick={() => navigate(`/project/${project.id}`)}
              >
                Open Project
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
