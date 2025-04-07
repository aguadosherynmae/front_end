import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SidebarLayout from './components/navigation'; 
import DashboardPage from './pages/dashboard';
import LoginPage from './pages/login_page';
import ViolationTypePage from './pages/violation_type_page';
import AddViolationPage from './pages/add_violation_page';
import ViolationRecord from './pages/violation_record_page';
import ReportPage from './pages/report_page';
import Drivers from './pages/drivers';
import Feedbacks from './pages/feedbacks';
import PaymentSetting from './pages/payment_setting_page';
import ProfilePage from './pages/profile_page';
import SecurityPage from './pages/security_page';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} /> {/* Login page without sidebar */}
        <Route
          path="/dashboard"
          element={
            <SidebarLayout>
              <DashboardPage />
            </SidebarLayout>
          }
        />
        <Route
          path="/violations"
          element={
            <SidebarLayout>
              <ViolationTypePage />
            </SidebarLayout>
          }
        />
        <Route
          path="/violations/v-add"
          element={
            <SidebarLayout>
              <AddViolationPage />
            </SidebarLayout>
          }
        />
        <Route
          path="/violations/v-records"
          element={
            <SidebarLayout>
              <ViolationRecord />
            </SidebarLayout>
          }
        />
        <Route
          path="/reports"
          element={
            <SidebarLayout>
              <ReportPage />
            </SidebarLayout>
          }
        />
        <Route
          path="/drivers"
          element={
            <SidebarLayout>
              <Drivers />
            </SidebarLayout>
          }
        />
        <Route
          path="/feedbacks"
          element={
            <SidebarLayout>
              <Feedbacks />
            </SidebarLayout>
          }
        />
        <Route
          path="/payment"
          element={
            <SidebarLayout>
              <PaymentSetting />
            </SidebarLayout>
          }
        />
        <Route
          path="/profile"
          element={
            <SidebarLayout>
              <ProfilePage />
            </SidebarLayout>
          }
        />
        <Route
          path="/security"
          element={
            <SidebarLayout>
              <SecurityPage />
            </SidebarLayout>
          }
        />
        {/* Optional: Handle logout route */}
        <Route
          path="/logout"
          element={
            <SidebarLayout>
              <div>Logging out...</div> {/* Replace with logout logic */}
            </SidebarLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;