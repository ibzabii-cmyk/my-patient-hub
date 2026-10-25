import {
  CalendarDays,
  ClipboardPlus,
  LayoutDashboard,
  MessageSquare,
  Settings,
  Store,
  UserRound,
  Users,
  Pill,
  Hospital,
} from "lucide-react";

export const mainMenu = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
  },
  {
    title: "Appointment",
    icon: CalendarDays,
    path: "/appointments",
  },
  {
    title: "Find Doctor",
    icon: ClipboardPlus,
    path: "/findDoctor",
  },
  {
    title: "Find Clinic",
    icon: Hospital,
    path: "/findClinic",
  },
  {
    title: "Find Marketplace",
    icon: Store,
    path: "/findMarketPlace",
  },
  {
    title: "Chat",
    icon: MessageSquare,
    path: "/chat",
  },
  {
    title: "Find Pharmacy",
    icon: Pill,
    path: "/findPharmacy",
  },
  {
    title: "My Dependents",
    icon: Users,
    path: "/myDependents",
  },
  {
    title: "My Account",
    icon: UserRound,
    path: "/myAccount",
  },
  {
    title: "Settings",
    icon: Settings,
    path: "/settings",
  },
];
