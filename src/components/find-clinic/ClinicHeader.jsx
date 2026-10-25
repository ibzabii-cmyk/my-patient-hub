
import { Bell, Search, Settings, LogOut, Menu, Hospital } from "lucide-react";

function ClinicHeader({ onMenuClick }) {
  return (
    <header className="flex flex-wrap items-center justify-between gap-4 rounded-t-2xl bg-gradient-to-r from-pink-600 via-fuchsia-600 to-purple-700 px-6 py-5 text-white">
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={onMenuClick}
          aria-label="Toggle menu"
          className="rounded-lg p-2 transition hover:bg-white/20"
        >
          <Menu size={22} />
        </button>

        <Hospital size={26} />

        <div>
          <p className="text-xs text-white/70">
            / Findhospital
          </p>
          <h2 className="text-lg font-bold">
            Findhospital
          </h2>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-gray-600">
          <Search size={18} />
          <input
            type="text"
            placeholder="Type here..."
            aria-label="Header search"
            className="w-32 bg-transparent text-sm outline-none sm:w-44"
          />
        </div>

        <button type="button" className="flex items-center gap-2 hover:text-pink-200">
          <LogOut size={18} />
          <span className="hidden sm:inline">Log out</span>
        </button>

        <button type="button" aria-label="Settings" className="hover:text-pink-200">
          <Settings size={20} />
        </button>

        <button type="button" aria-label="Notifications" className="hover:text-pink-200">
          <Bell size={20} />
        </button>
      </div>
    </header>
  );
}

export default ClinicHeader;
