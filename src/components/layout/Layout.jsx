
import { useState } from "react";
import Header from "./Header";
import Sidebar from "./sidebar/Sidebar";

function Layout({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMobileSidebar = () => {
    setIsMobile(!isMobile);
  };

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="flex min-h-screen w-full bg-gray-100">
      <Sidebar
        collapsed={collapsed}
        isMobile={isMobile}
        setIsMobile={setIsMobile}
      />

      <main className="min-w-0 flex-1 p-4 md:p-6">
        <Header
          toggleSidebar={toggleSidebar}
          toggleMobilSidebar={toggleMobileSidebar}
        />

        {children}
      </main>
    </div>
  );
}

export default Layout;
