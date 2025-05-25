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

import { Images } from "../../Constant/images";
import HealthStatusCards from "./HealthStatusCards";
import ActivityChart from "./ActivityChar";

const AnatomySection = () => (
  <div className="w-full rounded-2xl p-3 md:p-6 shadow-sm">
    <div className="flex items-center justify-between mb-6 px-3">
      <h2 className="text-3xl font-semibold text-primaryColor">Dashboard</h2>
      <div className="flex items-center space-x-2 text-sm text-gray-500">
        <span>This Week</span>
        <ChevronRight className="w-4 h-4" />
      </div>
    </div>

    <div className="flex flex-col md:flex-row gap-10 relative  justify-between mb-6 px-5">
      <div className="bg-backGroudColor rounded-lg  ">
        <div className="">
        <img
          src={Images.humanBodyImage}
          alt="human body image"
          className="w-80 object-cover "
        />
        <div className="absolute bg-primaryColor text-white rounded-md p-2 text-[10px] top-20 right-56">
          Healthly Heart
        </div>
        <div className="absolute bg-cyan-400 text-white rounded-md p-2 text-[10px] top-64 left-4">
          Healthly Heart
        </div>
        </div>
     

      </div>
      <div>
        <HealthStatusCards/>
      </div>
    </div>

    <div>
      <ActivityChart/>
    </div>


  </div>
);

export default AnatomySection;
