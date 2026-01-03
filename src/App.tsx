import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { SignUpPage } from './pages/SignUpPage';
import { LoginPage } from './pages/LoginPage';
import { HomeDashboard } from './pages/HomeDashboard';
import { ServicesMarketplace } from './pages/ServicesMarketplace';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { BookServiceForm } from './pages/BookServiceForm';
import { BookingConfirmation } from './pages/BookingConfirmation';
import { MyProjectsPage } from './pages/MyProjectsPage';
import { ProjectDetailTimeline } from './pages/ProjectDetailTimeline';
import { RequirementsFormStep1 } from './pages/RequirementsFormStep1';
import { RequirementsFormStep2 } from './pages/RequirementsFormStep2';
import { RequirementsFormStep3 } from './pages/RequirementsFormStep3';
import { PlansLibrary } from './pages/PlansLibrary';
import { PlanViewer } from './pages/PlanViewer';
import { LoanContactRequest } from './pages/LoanContactRequest';
import { LoanSubmittedSuccess } from './pages/LoanSubmittedSuccess';
import { LandInspectionRequest } from './pages/LandInspectionRequest';
import { InspectionStatus } from './pages/InspectionStatus';
import { NotificationsPage } from './pages/NotificationsPage';
import { ProfileSettings } from './pages/ProfileSettings';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<HomeDashboard />} />
        <Route path="/services" element={<ServicesMarketplace />} />
        <Route path="/services/:serviceId" element={<ServiceDetailPage />} />
        <Route path="/book-service/:serviceId" element={<BookServiceForm />} />
        <Route path="/booking-confirmation" element={<BookingConfirmation />} />
        <Route path="/my-projects" element={<MyProjectsPage />} />
        <Route path="/project/:projectId" element={<ProjectDetailTimeline />} />
        <Route path="/requirements/step1" element={<RequirementsFormStep1 />} />
        <Route path="/requirements/step2" element={<RequirementsFormStep2 />} />
        <Route path="/requirements/step3" element={<RequirementsFormStep3 />} />
        <Route path="/plans" element={<PlansLibrary />} />
        <Route path="/plan/:planId" element={<PlanViewer />} />
        <Route path="/loan-request" element={<LoanContactRequest />} />
        <Route path="/loan-success" element={<LoanSubmittedSuccess />} />
        <Route path="/land-inspection" element={<LandInspectionRequest />} />
        <Route path="/inspection-status/:inspectionId" element={<InspectionStatus />} />
        <Route path="/notifications" element={<NotificationsPage />} />
        <Route path="/profile" element={<ProfileSettings />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
