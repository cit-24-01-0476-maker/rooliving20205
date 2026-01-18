import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import { Card } from "../components/Card";
import { Button } from "../components/Button";
import { Paintbrush, Hammer, Trees, Wrench } from "lucide-react";

const services = [
  { title: "Painting Service", desc: "Interior / exterior painting with quality finish.", icon: Paintbrush },
  { title: "Construction Help", desc: "Masons, carpenters, and site guidance.", icon: Hammer },
  { title: "Landscaping", desc: "Garden layout, plants, lighting, and maintenance.", icon: Trees },
  { title: "Repairs & Fix", desc: "Electrical, plumbing, and minor repairs.", icon: Wrench }
];

export function ServicesPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <Header isAuthenticated={false} />

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex items-start justify-between gap-6 flex-wrap">
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold">Book Services</h1>
            <p className="text-neutral-300 mt-2">
              Choose a service and book a professional. (Demo UI)
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" onClick={() => navigate("/")}>Back Home</Button>
            <Button onClick={() => navigate("/signup")}>Get Started</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <Card key={s.title}>
                <div className="w-14 h-14 rounded-xl border border-orange-500/40 bg-orange-600/15 flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-orange-400" />
                </div>
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="text-neutral-300 mt-2">{s.desc}</p>
                <div className="mt-5">
                  <Button className="w-full" onClick={() => navigate("/login")}>
                    Book Now
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 rounded-2xl border border-white/10 bg-neutral-950/40 backdrop-blur p-8">
          <h2 className="text-2xl font-semibold">Want a Full Project Package?</h2>
          <p className="text-neutral-300 mt-2">
            Combine plan + services + loan guidance in one package.
          </p>
          <div className="mt-5 flex gap-3 flex-wrap">
            <Button onClick={() => navigate("/loan-request")}>Request Loan</Button>
            <Button variant="outline" onClick={() => navigate("/plans")}>Explore Plans</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
