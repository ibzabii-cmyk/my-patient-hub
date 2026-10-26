
import { Bell, Home, LogOut, Menu, Settings } from "lucide-react";
import { useEffect, useState } from "react";

function Header({ toggleSidebar, toggleMobilSidebar }) {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScroll(window.scrollY > 0);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-3 z-40 flex min-h-[4.6875rem] w-full
      items-center rounded-2xl py-2 text-[#344767]
      transition-shadow duration-300
      ${
        isScroll
          ? "bg-white/80 shadow-[inset_0_0_1px_1px_rgba(255,255,255,0.9),0_20px_27px_0_rgba(0,0,0,0.05)] backdrop-blur-[30px]"
          : ""
      }`}
    >
      <div className="flex w-full items-center justify-between gap-3 px-4 py-3">
        <div className="flex items-center gap-4">
          {/* Mobile menu */}
          <button
            onClick={toggleMobilSidebar}
            className="rounded-lg p-2 hover:bg-gray-100 lg:hidden"
          >
            <Menu size={20} />
          </button>

          {/* Desktop menu */}
          <button
            onClick={toggleSidebar}
            className="hidden rounded-lg p-2 hover:bg-gray-100 lg:block"
          >
            <Menu size={20} />
          </button>

          <div className="flex items-center gap-2">
            <Home size={20} />
            <span>/</span>
            <span className="text-md font-normal text-gray-900">
              Dashboard
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <input
            type="text"
            placeholder="Type here..."
            className="hidden h-10 w-[180px] rounded-md border border-gray-200 bg-white px-3 text-sm outline-none focus:border-gray-400 sm:block"
          />

          <Settings size={20} className="hidden text-gray-900 sm:block" />
          <Bell size={20} className="text-gray-900" />

          <button className="flex items-center gap-2 text-sm text-gray-900">
            <LogOut size={20} />
            <span className="hidden sm:inline">Log out</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
