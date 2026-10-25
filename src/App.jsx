import { Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Appointments from "./pages/Appointments";
import FindDoctor from "./pages/FindDoctor";
import FindClinic from "./pages/FindClinic";
import Chat from "./pages/Chat";
import FindMarketPlace from "./pages/FindMarketPlace";
import FindPharmacy from "./pages/FindPharmacy";
import MyDependents from "./pages/MyDependents";
import MyAccount from "./pages/MyAccount";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      {/* Home without Sidebar and Header */}
      <Route path="/" element={<Home />} />

      {/* Pages with Sidebar and Header */}
      <Route
        path="/dashboard"
        element={
          <Layout>
            <Dashboard />
          </Layout>
        }
      />

      <Route
        path="/appointments"
        element={
          <Layout>
            <Appointments />
          </Layout>
        }
      />

      <Route
        path="/findDoctor"
        element={
          <Layout>
            <FindDoctor />
          </Layout>
        }
      />

      <Route
        path="/findClinic"
        element={
          <Layout>
            <FindClinic />
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
        path="/findMarketPlace"
        element={
          <Layout>
            <FindMarketPlace />
          </Layout>
        }
      />

      <Route
        path="/findPharmacy"
        element={
          <Layout>
            <FindPharmacy />
          </Layout>
        }
      />

      <Route
        path="/myDependents"
        element={
          <Layout>
            <MyDependents />
          </Layout>
        }
      />

      <Route
        path="/myAccount"
        element={
          <Layout>
            <MyAccount />
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

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
