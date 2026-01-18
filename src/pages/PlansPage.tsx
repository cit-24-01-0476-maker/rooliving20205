import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import { Card } from "../components/Card";
import { Button } from "../components/Button";
import { Home, Ruler, Layers } from "lucide-react";

const plans = [
  { id: "P-101", title: "Modern 3BR House Plan", type: "House Plan", size: "1800 sq.ft", tag: "Popular" },
  { id: "P-204", title: "Compact 2BR Plan", type: "House Plan", size: "1200 sq.ft", tag: "Budget" },
  { id: "L-310", title: "Tropical Garden Layout", type: "Landscape", size: "Front + Back", tag: "New" },
  { id: "L-402", title: "Minimal Landscape Layout", type: "Landscape", size: "Front Yard", tag: "Trending" }
];

export function PlansPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <Header isAuthenticated={false} />

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex items-start justify-between gap-6 flex-wrap">
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold">Explore Plans</h1>
            <p className="text-neutral-300 mt-2">
              Browse house & landscape plans. View 2D/3D concepts and request a custom plan.
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" onClick={() => navigate("/")}>Back Home</Button>
            <Button onClick={() => navigate("/loan-request")}>Request Loan</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {plans.map((p) => (
            <Card key={p.id} className="p-0 overflow-hidden">
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-neutral-300 border border-white/10 rounded-full px-3 py-1">
                    {p.id}
                  </span>
                  <span className="text-xs text-black bg-orange-500 rounded-full px-3 py-1 font-semibold">
                    {p.tag}
                  </span>
                </div>

                <h3 className="text-lg font-semibold mt-4">{p.title}</h3>

                <div className="mt-3 space-y-2 text-sm text-neutral-300">
                  <div className="flex items-center gap-2">
                    <Home className="w-4 h-4 text-orange-400" />
                    <span>{p.type}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Ruler className="w-4 h-4 text-orange-400" />
                    <span>{p.size}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-orange-400" />
                    <span>2D / 3D available</span>
                  </div>
                </div>

                <div className="mt-5 flex gap-2">
                  <Button className="flex-1" onClick={() => navigate("/login")}>
                    View Details
                  </Button>
                  <Button variant="outline" className="flex-1" onClick={() => navigate("/services")}>
                    Book Service
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-white/10 bg-neutral-950/40 backdrop-blur p-8">
          <h2 className="text-2xl font-semibold">Need a Custom Plan?</h2>
          <p className="text-neutral-300 mt-2">
            Tell us your land size, budget, and preferred style. We will help you create the best plan.
          </p>
          <div className="mt-5 flex gap-3 flex-wrap">
            <Button onClick={() => navigate("/services")}>Request Designer</Button>
            <Button variant="outline" onClick={() => navigate("/signup")}>Create Account</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
