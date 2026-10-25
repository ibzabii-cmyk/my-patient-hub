
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Layout from "../components/layout/Layout";

import Dashboard from "../pages/dashboard/Dashboard";
import Appointment from "../pages/appointment/Appointment";
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

        <Route
          path="/appointment"
          element={
            <Layout>
              <Appointment />
            </Layout>
          }
        />

        <Route
          path="/findhospital"
          element={
            <Layout>
              <Clinic />
            </Layout>
          }
        />

        <Route
          path="/chat"
          element={
            <Layout>
              <Chat />
            </Layout>
          }
        />

        <Route
          path="/searchdoctor"
          element={
            <Layout>
              <Patients />
            </Layout>
          }
        />

        <Route
          path="/settings"
          element={
            <Layout>
              <Settings />
            </Layout>
          }
        />

        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
