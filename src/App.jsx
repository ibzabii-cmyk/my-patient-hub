import { Routes, Route } from "react-router-dom";
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
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/findDoctor" element={<FindDoctor />} />
        <Route path="/findClinic" element={<FindClinic />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="findMarketPlace" element={<FindMarketPlace />} />
        <Route path="findPharmacy" element={<FindPharmacy />} />
        <Route path="myDependents" element={<MyDependents />} />
        <Route path="myAccount" element={<MyAccount />} />
        <Route path="settings" element={<Settings />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
