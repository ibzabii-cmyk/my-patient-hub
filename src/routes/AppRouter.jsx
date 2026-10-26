import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Dashboard from "../pages/Dashboard";
// import Appointment from "../pages/appointment/Appointment";git status
import Clinic from "../pages/clinic";
import Chat from "../pages/chat/Chat";
import Patients from "../pages/patients/Patients";
import Settings from "../pages/settings/Settings";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />

        <Route
          path="/dashboard"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />

        {/* <Route path="/appointment" element={<Appointment />} /> */}
        <Route
          path="/appointment"
          element={
            <h1 className="text-4xl text-center mt-7">Appointment Page</h1>
          }
        />
        <Route path="/findhospital" element={<Clinic />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/searchdoctor" element={<Patients />} />
        <Route path="/settings" element={<Settings />} />

        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
