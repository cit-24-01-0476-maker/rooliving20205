import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Card } from '../components/Card';
import { Search, FileText, Wrench, Home, DollarSign, MapPin, Clock, CheckCircle } from 'lucide-react';

export function HomeDashboard() {
  const navigate = useNavigate();

  const features = [
    { 
      icon: FileText, 
      title: 'Requirements', 
      desc: 'Define your project needs',
      color: 'bg-blue-100 text-blue-600',
      path: '/requirements/step1'
    },
    { 
      icon: Wrench, 
      title: 'Services', 
      desc: 'Book professional services',
      color: 'bg-green-100 text-green-600',
      path: '/services'
    },
    { 
      icon: Home, 
      title: '2D/3D Plans', 
      desc: 'View house designs',
      color: 'bg-purple-100 text-purple-600',
      path: '/plans'
    },
    { 
      icon: DollarSign, 
      title: 'Loan Guidance', 
      desc: 'Connect with banks',
      color: 'bg-orange-100 text-orange-600',
      path: '/loan-request'
    },
    { 
      icon: MapPin, 
      title: 'Land Check', 
      desc: 'Request land inspection',
      color: 'bg-red-100 text-red-600',
      path: '/land-inspection'
    }
  ];

  const projects = [
    { 
      id: 'proj-001', 
      name: 'Modern Villa Project', 
      status: 'In Progress',
      statusColor: 'text-blue-600 bg-blue-50',
      progress: 60,
      lastUpdate: '2 days ago'
    },
    { 
      id: 'proj-002', 
      name: 'Garden Renovation', 
      status: 'Planning',
      statusColor: 'text-yellow-600 bg-yellow-50',
      progress: 20,
      lastUpdate: '1 week ago'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Header isAuthenticated={true} />
      
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8 border-l-4 border-gray-800 pl-4">
          <h1 className="text-gray-900 mb-2">Welcome Back, John!</h1>
          <p className="text-gray-600">Manage your home projects all in one place</p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-2xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for services, plans, or projects..."
              className="w-full pl-12 pr-4 py-3 border-2 border-gray-400 bg-white focus:outline-none focus:border-gray-800"
            />
          </div>
        </div>

        {/* Feature Tiles */}
        <section className="mb-12">
          <h2 className="text-gray-900 mb-6 border-b-2 border-gray-800 pb-2 inline-block">Quick Access</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {features.map((feature) => (
              <Card 
                key={feature.title}
                onClick={() => navigate(feature.path)}
                className="text-center hover:border-gray-800 transition-all cursor-pointer"
              >
                <div className={`w-16 h-16 border-2 border-gray-400 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <feature.icon className="w-8 h-8 text-gray-700" />
                </div>
                <h3 className="text-gray-900 mb-1 border-b border-gray-300 pb-1">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* My Projects Status */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-gray-900 border-b-2 border-gray-800 pb-2">My Projects</h2>
            <button 
              onClick={() => navigate('/my-projects')}
              className="text-gray-700 hover:text-gray-900 border-b-2 border-transparent hover:border-gray-700"
            >
              View All →
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <Card key={project.id} onClick={() => navigate(`/project/${project.id}`)}>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-gray-900 mb-1 border-b border-gray-300 pb-1">{project.name}</h3>
                    <span className={`inline-block px-3 py-1 border-2 border-gray-400 mt-2`}>
                      {project.status}
                    </span>
                  </div>
                  <Clock className="w-5 h-5 text-gray-400" />
                </div>
                
                <div className="mb-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-600">Progress</span>
                    <span className="text-gray-900">{project.progress}%</span>
                  </div>
                  <div className="w-full border-2 border-gray-400 h-4">
                    <div 
                      className="bg-gray-800 h-full transition-all"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>
                
                <p className="text-gray-500 border-t-2 border-dashed border-gray-300 pt-3 mt-3">Last updated {project.lastUpdate}</p>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}