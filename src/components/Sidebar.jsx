
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  CalendarDays,
  Stethoscope,
  Hospital,
  MessageCircle,
  ShoppingBag,
  Pill,
  Users,
  UserCircle,
  Settings,
  X,
  HeartPulse,
} from "lucide-react";

const menuItems = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Appointments",
    path: "/appointments",
    icon: CalendarDays,
  },
  {
    label: "Find Doctor",
    path: "/findDoctor",
    icon: Stethoscope,
  },
  {
    label: "Find Clinic",
    path: "/findClinic",
    icon: Hospital,
  },
  {
    label: "Chat",
    path: "/chat",
    icon: MessageCircle,
  },
  {
    label: "Find Marketplace",
    path: "/findMarketPlace",
    icon: ShoppingBag,
  },
  {
    label: "Find Pharmacy",
    path: "/findPharmacy",
    icon: Pill,
  },
  {
    label: "My Dependents",
    path: "/myDependents",
    icon: Users,
  },
  {
    label: "My Account",
    path: "/myAccount",
    icon: UserCircle,
  },
  {
    label: "Settings",
    path: "/settings",
    icon: Settings,
  },
];

function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <button
          type="button"
          aria-label="Close sidebar"
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed inset-y-0 left-0 z-50
          flex w-64 flex-col
          border-r border-gray-200 bg-white
          transition-transform duration-300
          lg:sticky lg:top-0 lg:h-screen lg:shrink-0
          lg:translate-x-0
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Logo */}
        <div className="flex items-center justify-between border-b border-gray-100 px-5 py-7">
          <NavLink
            to="/dashboard"
            onClick={onClose}
            className="flex items-center gap-3"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-purple-700 text-white">
              <HeartPulse size={25} />
            </div>

            <span className="text-lg font-bold text-slate-700">
              MyPatientHUB
            </span>
          </NavLink>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 lg:hidden"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 overflow-y-auto px-4 py-6">
          {menuItems.map(({ label, path, icon: Icon }) => (
            <NavLink
              key={path}
              to={path}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center gap-4 rounded-xl px-4 py-3 text-sm font-medium transition ${
                  isActive
                    ? "bg-pink-50 font-semibold text-pink-600"
                    : "text-slate-500 hover:bg-gray-50 hover:text-pink-600"
                }`
              }
            >
              <Icon size={20} />
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>

        {/* Bottom */}
        <div className="border-t border-gray-100 p-5">
          <p className="text-xs text-gray-400">
            © 2026 MyPatientHUB
          </p>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
