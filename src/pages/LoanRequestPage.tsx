import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

export function LoanRequestPage() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    fullName: "",
    phone: "",
    email: "",
    city: "",
    monthlyIncome: "",
    loanAmount: "",
    message: ""
  });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo: just go login
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <Header isAuthenticated={false} />

      <div className="max-w-3xl mx-auto px-6 py-12">
        <div className="rounded-2xl border border-white/10 bg-neutral-950/50 backdrop-blur p-8 shadow-2xl">
          <div className="flex items-start justify-between gap-6 flex-wrap">
            <div>
              <h1 className="text-3xl font-semibold">Request Loan</h1>
              <p className="text-neutral-300 mt-2">
                Fill details and we will connect you with partner banks. (Demo UI)
              </p>
            </div>
            <Button variant="outline" onClick={() => navigate("/")}>Back Home</Button>
          </div>

          <form onSubmit={submit} className="mt-8 space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Full Name"
                value={data.fullName}
                onChange={(e) => setData({ ...data, fullName: e.target.value })}
                required
              />
              <Input
                label="Phone Number"
                value={data.phone}
                onChange={(e) => setData({ ...data, phone: e.target.value })}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Email"
                type="email"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
                required
              />
              <Input
                label="City"
                value={data.city}
                onChange={(e) => setData({ ...data, city: e.target.value })}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Monthly Income (LKR)"
                value={data.monthlyIncome}
                onChange={(e) => setData({ ...data, monthlyIncome: e.target.value })}
                required
              />
              <Input
                label="Requested Loan Amount (LKR)"
                value={data.loanAmount}
                onChange={(e) => setData({ ...data, loanAmount: e.target.value })}
                required
              />
            </div>

            <div>
              <label className="block text-neutral-200 mb-2">Message</label>
              <textarea
                className="w-full rounded-md px-4 py-3 border border-white/10 bg-neutral-950/40 text-neutral-100 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-orange-500/40 focus:border-orange-500"
                placeholder="Any additional details..."
                rows={4}
                value={data.message}
                onChange={(e) => setData({ ...data, message: e.target.value })}
              />
            </div>

            <div className="flex gap-3 flex-wrap">
              <Button type="submit" className="flex-1 min-w-[200px]">
                Submit Request
              </Button>
              <Button type="button" variant="outline" className="flex-1 min-w-[200px]" onClick={() => navigate("/plans")}>
                Explore Plans
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
