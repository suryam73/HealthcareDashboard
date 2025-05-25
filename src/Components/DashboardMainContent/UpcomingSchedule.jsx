import React from 'react'
import { upcomingAppointments } from '../../data/upcomingAppointments';

const UpcomingSchedule = () => (
  <div className="bg-white rounded-2xl p-6 shadow-sm">
    <h3 className="text-lg font-semibold text-primaryColor mb-6">The Upcoming Schedule</h3>
    
    <div className="space-y-6">
      {upcomingAppointments.map((dayGroup, index) => (
        <div key={index}>
          <h4 className="text-sm font-medium text-gray-600 mb-3">On {dayGroup.day}</h4>
          <div className="flex flex-col md:flex-row w-full gap-3">
            {dayGroup.appointments.map((appointment) => (
  <div key={appointment.id} className="bg-backGroudColor rounded-xl p-3 md:p-4">
  <div className="flex items-start justify-between gap-6">
    <div className="flex flex-col gap-1 md:gap-2">
      <h5 className="font-medium text-primaryColor text-sm md:text-base mb-0.5">{appointment.title}</h5>
      <p className="text-xs text-primaryColor md:text-sm">{appointment.time}</p>
    </div>
    <img src={appointment.icon} className="w-5 h-5" />
  </div>
</div>

            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);


export default UpcomingSchedule
