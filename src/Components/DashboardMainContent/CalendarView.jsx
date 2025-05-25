import React from "react";

import {
  ChevronLeft,
  ChevronRight,

} from "lucide-react";
import { calendarData } from "../../data/calendarData";
import { Images } from "../../Constant/images";
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
      className="text-center text-[10px] md:text-xs font-medium text-gray-500 py-1 md:py-2"
    >
      {day}
    </div>
    
      ))}
    </div>

    <div className="grid grid-cols-7 gap-1 mb-6">
      {calendarData.days.map((day) => (
    <div
    key={day.date}
    className={`relative ${day.date === 26 ? "bg-secondaryColor rounded-xl" : ""}`}
  >
    <div className="text-center py-1 md:py-2">
      <div className="text-base md:text-lg font-medium text-primaryColor mb-1">
        {day.date}
      </div>
      <div className="space-y-1 rounded-xl">
        {day?.appointments?.map((item, index) => (
          <div
            key={index}
            className="flex px-2 py-1 flex-col items-center justify-center gap-2 text-center"
          >
            <div
              className={`text-[10px] md:text-xs p-1 md:p-2 rounded-lg ${
                item === "09:00" ? "bg-primaryColor text-white" : ""
              }`}
            >
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
    <div className="flex flex-col md:flex-row items-center gap-4">
  <div className="bg-primaryColor w-full text-white p-3 md:p-4 rounded-[24px]">
    <div className="flex flex-col gap-1 md:gap-2">
      <div className="flex items-center justify-between">
        <div className="text-[11px] md:text-[12px]">Dentist</div>
        <img className="w-4 h-4 md:w-5 md:h-5" src={Images.toothImage} />
      </div>
      <div className="text-[10px] md:text-xs opacity-90">
        <div>09:00-11:00</div>
        <div className="text-[10px] md:text-xs text-nowrap opacity-75">
          Dr. Cameron Williamson
        </div>
      </div>
    </div>
  </div>

  <div className="bg-secondaryColor w-full p-3 md:p-4 rounded-[24px]">
    <div className="flex items-center gap-2 justify-between">
      <div className="text-[11px] md:text-[12px] font-semibold text-nowrap text-primaryColor">
        Physiotherapy Appointment
      </div>
      <img className="w-4 h-4 md:w-5 md:h-5" src={Images.armsImage} />
    </div>

    <div className="text-[10px] md:text-xs text-gray-600">
      <div>11:00-12:00</div>
      <div className="text-[10px] md:text-xs text-gray-500">Dr. Kevin Djones</div>
    </div>
  </div>
</div>

  </div>
);

export default CalendarView;
