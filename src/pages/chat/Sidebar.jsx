import {
  LayoutDashboard,
  CalendarDays,
  Stethoscope,
  Hospital,
  MessageSquare,
  Store,
  Pill,
  Users,
  UserRound,
  Settings,
  HelpCircle,
  Apple,
  Smartphone,
} from "lucide-react";

const menuItems = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Appointments",
    icon: CalendarDays,
  },
  {
    name: "Find Doctor",
    icon: Stethoscope,
  },
  {
    name: "Find Clinic",
    icon: Hospital,
  },
  {
    name: "Chat",
    icon: MessageSquare,
    active: true,
  },
  {
    name: "Find MarketPlace",
    icon: Store,
  },
  {
    name: "Find Pharmacy",
    icon: Pill,
  },
  {
    name: "My Dependents",
    icon: Users,
  },
  {
    name: "My Account",
    icon: UserRound,
  },
  {
    name: "Settings",
    icon: Settings,
  },
];

function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 z-30 hidden h-screen w-[265px] bg-[#f8f9fb] lg:block">
      {/* Logo */}
      <div className="flex h-[98px] items-center border-b border-gray-100 px-12">
        <div className="flex items-center gap-2">
          <div className="relative flex h-11 w-9 items-center justify-center">
            <div className="absolute text-[35px] font-bold leading-none text-[#0053a6]">
              M
            </div>

            <div className="absolute top-[17px] text-[9px] font-bold text-[#e1009d]">
              HUB
            </div>
          </div>

          <span className="text-sm font-semibold text-[#405273]">
            MyPatientHUB
          </span>
        </div>
      </div>

      {/* Menu */}
      <div className="px-8 pt-5">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.name}
              className={`mb-2 flex h-[52px] items-center gap-3 rounded-lg px-4 transition ${
                item.active
                  ? "bg-white font-semibold text-[#405273] shadow-sm"
                  : "text-[#687994] hover:bg-white"
              }`}
            >
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                  item.active
                    ? "bg-[#d9009b] text-white shadow-[0_4px_10px_rgba(217,0,155,0.25)]"
                    : "bg-white text-[#526385] shadow-[0_3px_8px_rgba(50,50,93,0.12)]"
                }`}
              >
                <Icon size={16} strokeWidth={2} />
              </div>

              <span className="text-sm">{item.name}</span>
            </div>
          );
        })}
      </div>

      {/* Download Card */}
      <div className="absolute bottom-4 left-8 right-4 overflow-hidden rounded-2xl bg-gradient-to-br from-[#e738a9] to-[#a953d0] p-4 text-white">
        <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full border border-white/10"></div>
        <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full border border-white/10"></div>

        <div className="relative">
          <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-lg bg-white text-[#d9009b]">
            <HelpCircle size={21} />
          </div>

          <h3 className="text-base font-bold">Download</h3>

          <p className="text-xs font-semibold">
            MyPIHUB Mobile App
          </p>

          <div className="mt-4 flex gap-2">
            <button className="flex h-8 flex-1 items-center justify-center rounded-lg bg-white text-[#d9009b]">
              <Apple size={15} />
            </button>

            <button className="flex h-8 flex-1 items-center justify-center rounded-lg bg-white text-[#d9009b]">
              <Smartphone size={15} />
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;