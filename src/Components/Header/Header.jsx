import React from "react";
import {
  Search,
  Bell,
  Plus,
  Home,
  History,
  Calendar,
  Users,
  BarChart3,
  FileText,
  MessageCircle,
  HelpCircle,
  Settings,
  Heart,
  Activity,
  Smile,
  Bone,
  Clock,
  User,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

const Header = () => (
  <header className="bg- px-10 py-4 sticky top-0 z-30 bg-backGroudColor flex items-center justify-between border-b border-gray-100">
    <div className=" flex items-center bg-backGroudColor ">
      <h1 className="text-2xl font-bold">
        <span className="text-cyan-400">Health</span>
        <span className="text-primaryColor">care.</span>
      </h1>
    </div>
    <div className="relative hidden md:block border border-slate-200 rounded-lg ">
      <Search className="absolute  left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
      <input
        type="text"
        placeholder="Search"
        className="pl-10 pr-4 w-96 py-2 bg-gray-50 border-0 rounded-lg  text-sm focus:outline-none focus:ring-2 focus:ring-primaryColor"
      />

      <Bell className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2  text-primaryColor" />
    </div>

    <div className="flex items-center space-x-4">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
          <User className="w-4 h-4 text-white" />
        </div>
      </div>

      <button className="bg-primaryColor text-white p-2 rounded-lg ">
        <Plus className="w-4 h-4" />
      </button>
    </div>
  </header>
);

export default Header;
