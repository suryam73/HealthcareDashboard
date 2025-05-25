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
import { calendarData } from "../../data/calendarData";
const CalendarView = () => (
  <div className="bg-backGroudColor rounded-2xl p-6 shadow-sm">
    <div className="flex items-center justify-between mb-6">
      <h3 className="text-lg font-semibold text-gray-800">
        {calendarData.month}
      </h3>
      <div className="flex items-center space-x-2">
        <button className="p-1 hover:bg-gray-100 rounded">
          <ChevronLeft className="w-4 h-4 text-gray-600" />
        </button>
        <button className="p-1 hover:bg-gray-100 rounded">
          <ChevronRight className="w-4 h-4 text-gray-600" />
        </button>
      </div>
    </div>


    <div className="grid grid-cols-7 gap-1 mb-4">
      {["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"].map((day) => (
        <div
          key={day}
          className="text-center text-xs font-medium text-gray-500 py-2"
        >
          {day}
        </div>
      ))}
    </div>

 
    <div className="grid grid-cols-7 gap-1 mb-6">
      {calendarData.days.map((day) => (
        <div key={day.date} className="relative">
          <div className="text-center py-2">
            <div className="text-lg font-medium text-primaryColor mb-1">
              {day.date}
            </div>
            <div className="space-y-1 bg-secondaryColor rounded-xl">
              {day?.appointments?.map((item , index)=>(
                <div key={index} className="flex p-3 flex-col items-center justify-center gap-4 text-center">
                <div className={` text-xs text-center p-1   rounded-lg ${item === "09:00" ? "bg-primaryColor text-white   " : ""}`}>  
                  {item}
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Appointment cards */}
    <div className="flex items-center  gap-4">
      <div className="bg-primaryColor text-white p-4 rounded-[24px]">
        <div className="flex flex-col gap-2">
          <div>
            <div>Dentist</div>
          </div>
          <div className="text-sm opacity-90">
            <div>09:00-11:00</div>
            <div className="text-xs text-nowrap opacity-75">Dr. Cameron Williamson</div>
          </div>
        </div>
      </div>

      <div className="bg-secondaryColor w-full p-4 rounded-xl">
        <div className="flex items-center space-x-2 mb-2">
          <span className="font-semibold text-primaryColor">
            Physiotherapy Appointment
          </span>
        </div>
        <div className="text-sm text-gray-600">
          <div>11:00-12:00</div>
          <div className="text-xs text-gray-500">Dr. Kevin Djones</div>
        </div>
      </div>
    </div>
  </div>
);

export default CalendarView;
