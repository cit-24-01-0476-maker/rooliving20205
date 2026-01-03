import { Link, useNavigate } from 'react-router-dom';
import { Bell, User } from 'lucide-react';

interface HeaderProps {
  isAuthenticated?: boolean;
}

export function Header({ isAuthenticated = false }: HeaderProps) {
  const navigate = useNavigate();

  return (
    <header className="bg-white border-b-2 border-gray-400 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to={isAuthenticated ? "/dashboard" : "/"} className="flex items-center gap-2">
          <div className="w-10 h-10 border-2 border-gray-800 rounded flex items-center justify-center">
            <span className="text-gray-800">HL</span>
          </div>
          <span className="text-gray-800">Home Landscape</span>
        </Link>

        {isAuthenticated ? (
          <nav className="flex items-center gap-6">
            <Link to="/dashboard" className="text-gray-600 hover:text-gray-900 border-b-2 border-transparent hover:border-gray-600">
              Dashboard
            </Link>
            <Link to="/services" className="text-gray-600 hover:text-gray-900 border-b-2 border-transparent hover:border-gray-600">
              Services
            </Link>
            <Link to="/plans" className="text-gray-600 hover:text-gray-900 border-b-2 border-transparent hover:border-gray-600">
              Plans
            </Link>
            <Link to="/my-projects" className="text-gray-600 hover:text-gray-900 border-b-2 border-transparent hover:border-gray-600">
              My Projects
            </Link>
            <Link 
              to="/notifications" 
              className="relative text-gray-600 hover:text-gray-900"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-gray-800 rounded-full"></span>
            </Link>
            <Link to="/profile" className="text-gray-600 hover:text-gray-900">
              <User className="w-5 h-5" />
            </Link>
          </nav>
        ) : (
          <div className="flex items-center gap-4">
            <Link to="/login" className="text-gray-600 hover:text-gray-900 px-4 py-2 border-2 border-transparent">
              Login
            </Link>
            <Link 
              to="/signup" 
              className="bg-gray-800 text-white px-6 py-2 border-2 border-gray-800 hover:bg-gray-700"
            >
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}