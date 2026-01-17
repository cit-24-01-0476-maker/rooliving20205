import { Link, useNavigate } from 'react-router-dom';
import { Bell, User } from 'lucide-react';

interface HeaderProps {
  isAuthenticated?: boolean;
}

export function Header({ isAuthenticated = false }: HeaderProps) {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to={isAuthenticated ? "/dashboard" : "/"} className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-md border border-orange-500/40 bg-orange-600/15 flex items-center justify-center">
            <span className="text-orange-400 font-semibold">HL</span>
          </div>
          <span className="text-neutral-100 font-medium">Home Landscape</span>
        </Link>

        {isAuthenticated ? (
          <nav className="flex items-center gap-6">
            <Link to="/dashboard" className="text-neutral-200 hover:text-white border-b-2 border-transparent hover:border-orange-500/60">
              Dashboard
            </Link>
            <Link to="/services" className="text-neutral-200 hover:text-white border-b-2 border-transparent hover:border-orange-500/60">
              Services
            </Link>
            <Link to="/plans" className="text-neutral-200 hover:text-white border-b-2 border-transparent hover:border-orange-500/60">
              Plans
            </Link>
            <Link to="/my-projects" className="text-neutral-200 hover:text-white border-b-2 border-transparent hover:border-orange-500/60">
              My Projects
            </Link>
            <Link 
              to="/notifications" 
              className="relative text-neutral-200 hover:text-white"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-orange-500 rounded-full"></span>
            </Link>
            <Link to="/profile" className="text-neutral-200 hover:text-white">
              <User className="w-5 h-5" />
            </Link>
          </nav>
        ) : (
          <div className="flex items-center gap-4">
            <Link to="/login" className="text-neutral-200 hover:text-white px-4 py-2 border-2 border-transparent">
              Login
            </Link>
            <Link 
              to="/signup" 
              className="rounded-md bg-orange-600 text-black px-6 py-2 border-2 border-orange-600 hover:bg-orange-500"
            >
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
