import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

export function InspectionPage() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    phone: "",
    address: "",
    preferredDate: "",
    note: ""
  });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <Header isAuthenticated={false} />

      <div className="max-w-3xl mx-auto px-6 py-12">
        <div className="rounded-2xl border border-white/10 bg-neutral-950/50 backdrop-blur p-8 shadow-2xl">
          <div className="flex items-start justify-between gap-6 flex-wrap">
            <div>
              <h1 className="text-3xl font-semibold">Land Inspection</h1>
              <p className="text-neutral-300 mt-2">
                Request professional land checks and surveys. (Demo UI)
              </p>
            </div>
            <Button variant="outline" onClick={() => navigate("/")}>Back Home</Button>
          </div>

          <form onSubmit={submit} className="mt-8 space-y-5">
            <Input
              label="Full Name"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
              required
            />
            <Input
              label="Phone Number"
              value={data.phone}
              onChange={(e) => setData({ ...data, phone: e.target.value })}
              required
            />
            <Input
              label="Land Address"
              value={data.address}
              onChange={(e) => setData({ ...data, address: e.target.value })}
              required
            />
            <Input
              label="Preferred Date"
              type="date"
              value={data.preferredDate}
              onChange={(e) => setData({ ...data, preferredDate: e.target.value })}
              required
            />

            <div>
              <label className="block text-neutral-200 mb-2">Note</label>
              <textarea
                className="w-full rounded-md px-4 py-3 border border-white/10 bg-neutral-950/40 text-neutral-100 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-orange-500/40 focus:border-orange-500"
                rows={4}
                placeholder="Any extra details..."
                value={data.note}
                onChange={(e) => setData({ ...data, note: e.target.value })}
              />
            </div>

            <div className="flex gap-3 flex-wrap">
              <Button type="submit" className="flex-1 min-w-[200px]">
                Submit Request
              </Button>
              <Button type="button" variant="outline" className="flex-1 min-w-[200px]" onClick={() => navigate("/services")}>
                Book Services
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
