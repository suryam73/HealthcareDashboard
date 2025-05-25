import React from 'react'
import AnatomySection from './AnatomySection'
import HealthStatusCards from './HealthStatusCards'
import CalendarView from './CalendarView'
import UpcomingSchedule from './UpcomingSchedule'

import ActivityChart from './ActivityChar'

const DashboardMainContent = () => {
  return (
    <main className="flex-1 p-6 bg-gray-50 overflow-auto">
    <div className="flex flex-col md:flex-row gap-6">
      {/* Left section - Anatomy */}
      <div className="col-span-5">
        <AnatomySection />
      </div>
      
   
      <div className="col-span-5 ">
        <CalendarView />
        {/* <div className="grid grid-cols-2 gap-6">
          <UpcomingSchedule />

        </div> */}
      </div>
    </div>
  </main>
  )
}

export default DashboardMainContent
