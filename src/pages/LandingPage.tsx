import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Button } from '../components/Button';
import { Home, Wrench, DollarSign, CheckCircle } from 'lucide-react';

export function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <Header isAuthenticated={false} />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-600 via-orange-600 to-neutral-950" />
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,white,transparent_55%)]" />

        <div className="relative max-w-7xl mx-auto px-6 py-20 text-center">
          <div className="mx-auto max-w-3xl rounded-2xl border border-white/15 bg-neutral-950/60 backdrop-blur p-10 shadow-2xl">
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-4">
              Your Dream Home, Perfectly Planned
            </h1>
            <p className="text-neutral-200/90 mb-10 max-w-2xl mx-auto">
              One platform to explore house & landscape plans, view 2D/3D designs, book professional services,
              and get home-loan guidance.
            </p>

            <div className="flex gap-3 justify-center flex-wrap">
              <Button size="lg" onClick={() => navigate('/plans')}>
                Explore Plans
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/70 text-white hover:bg-white/10"
                onClick={() => navigate('/services')}
              >
                Book Services
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/70 text-white hover:bg-white/10"
                onClick={() => navigate('/loan-request')}
              >
                Request Loan
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <div className="inline-block border-b-2 border-orange-500/60 pb-2">
            <h2 className="text-2xl md:text-3xl font-semibold">Everything You Need in One Platform</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="rounded-2xl border border-white/10 bg-neutral-950/40 backdrop-blur p-6">
            <div className="w-14 h-14 rounded-xl border border-orange-500/40 bg-orange-600/15 flex items-center justify-center mx-auto mb-4">
              <Home className="w-7 h-7 text-orange-400" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-center">House & Landscape Plans</h3>
            <p className="text-neutral-300 text-center">View 2D and 3D plans tailored to your requirements</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-neutral-950/40 backdrop-blur p-6">
            <div className="w-14 h-14 rounded-xl border border-orange-500/40 bg-orange-600/15 flex items-center justify-center mx-auto mb-4">
              <Wrench className="w-7 h-7 text-orange-400" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-center">Professional Services</h3>
            <p className="text-neutral-300 text-center">Book painters, gardeners, contractors, and more</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-neutral-950/40 backdrop-blur p-6">
            <div className="w-14 h-14 rounded-xl border border-orange-500/40 bg-orange-600/15 flex items-center justify-center mx-auto mb-4">
              <DollarSign className="w-7 h-7 text-orange-400" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-center">Loan Guidance</h3>
            <p className="text-neutral-300 text-center">Connect with partner banks for home loan assistance</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-neutral-950/40 backdrop-blur p-6">
            <div className="w-14 h-14 rounded-xl border border-orange-500/40 bg-orange-600/15 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-7 h-7 text-orange-400" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-center">Land Inspection</h3>
            <p className="text-neutral-300 text-center">Request professional land checks and surveys</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-orange-600">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <div className="rounded-2xl border border-black/10 bg-neutral-950/70 backdrop-blur p-10 shadow-2xl">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3">Ready to Start Your Dream Project?</h2>
            <p className="text-neutral-200/90 mb-8">
              Join homeowners who have successfully planned and built their dream homes.
            </p>
            <Button size="lg" onClick={() => navigate('/signup')}>
              Get Started Free
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-950 text-neutral-400 py-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p>&copy; 2025 Home Landscape Platform. Academic UI/UX Prototype - CS2311</p>
        </div>
      </footer>
    </div>
  );
}
