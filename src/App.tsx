import { Routes, Route, Navigate } from "react-router-dom";

import { LandingPage } from "./pages/LandingPage";
import { LoginPage } from "./pages/LoginPage";
import { SignUpPage } from "./pages/SignUpPage";

import { PlansPage } from "./pages/PlansPage";
import { ServicesPage } from "./pages/ServicesPage";
import { LoanRequestPage } from "./pages/LoanRequestPage";
import { InspectionPage } from "./pages/InspectionPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />

      <Route path="/plans" element={<PlansPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/loan-request" element={<LoanRequestPage />} />
      <Route path="/inspection" element={<InspectionPage />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
