import { Routes, Route, Navigate } from "react-router-dom";

import { LandingPage } from "./pages/LandingPage";
import { LoginPage } from "./pages/LoginPage";
import { SignUpPage } from "./pages/SignUpPage";

// ✅ Temporary placeholder pages (so navigation won't break)
function ComingSoon({ title }: { title: string }) {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="rounded-2xl border border-white/10 bg-neutral-950/50 backdrop-blur p-8">
          <h1 className="text-3xl font-semibold mb-3">{title}</h1>
          <p className="text-neutral-300 mb-6">
            This page is not implemented yet. (Placeholder page to prevent white screen)
          </p>
          <a
            href="#/"
            className="inline-block rounded-md bg-orange-600 text-black px-6 py-2 font-medium"
          >
            Go Home
          </a>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />

      {/* ✅ Add routes that LandingPage navigates to */}
      <Route path="/plans" element={<ComingSoon title="Explore Plans" />} />
      <Route path="/services" element={<ComingSoon title="Book Services" />} />
      <Route path="/loan-request" element={<ComingSoon title="Request Loan" />} />
      <Route path="/inspection" element={<ComingSoon title="Land Inspection" />} />

      {/* ✅ fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
