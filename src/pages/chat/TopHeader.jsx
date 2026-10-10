import {
  Search,
  LogOut,
  Settings,
  Bell,
  Menu,
} from "lucide-react";

function TopHeader() {
  return (
    <header className="flex h-[98px] items-center justify-between bg-[#f8f9fb] px-5 sm:px-8 lg:px-10">
      {/* Left */}
      <div className="flex items-center gap-5">
        <button className="text-[#405273] lg:hidden">
          <Menu size={24} />
        </button>

        <button className="hidden text-[#405273] lg:block">
          <Menu size={22} />
        </button>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="relative hidden sm:block">
          <Search
            size={19}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-[#405273]"
          />

          <input
            type="text"
            placeholder="Type here..."
            className="h-10 w-[208px] rounded-lg border border-[#d5dbe4] bg-white pl-10 pr-3 text-sm outline-none placeholder:text-[#a4aec0] focus:border-[#405273]"
          />
        </div>

        {/* Logout */}
        <button className="flex items-center gap-1 text-xs font-semibold text-[#405273]">
          <LogOut size={14} />
          <span className="hidden sm:inline">Log out</span>
        </button>

        <button className="text-[#405273]">
          <Settings size={16} />
        </button>

        <button className="text-[#405273]">
          <Bell size={16} />
        </button>
      </div>
    </header>
  );
}

export default TopHeader;