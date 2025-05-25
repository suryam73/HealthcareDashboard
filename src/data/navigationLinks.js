import {
  LayoutDashboard,
  SlidersHorizontal,
  CalendarDays,
  SquarePlus,
  BarChart3,
  MessageCircleMore,
  Phone,
  Settings,
} from "lucide-react";

export const navigationLinksGeneral = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: SlidersHorizontal, label: "History" },
  { icon: CalendarDays, label: "Calendar" },
  { icon: SquarePlus, label: "Appointments" },
  { icon: BarChart3, label: "Statistics" },

];

export const navigationLinksTool = [

  { icon: MessageCircleMore, label: "Chat" },
  { icon: Phone, label: "Support" },
];


export const navigationLinksSetting = [
  { icon: Settings, label: "Setting" },
];