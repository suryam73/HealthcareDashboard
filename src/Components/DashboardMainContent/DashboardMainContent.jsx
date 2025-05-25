import React from 'react'
import AnatomySection from './AnatomySection'
import HealthStatusCards from './HealthStatusCards'
import CalendarView from './CalendarView'
import UpcomingSchedule from './UpcomingSchedule'

const DashboardMainContent = () => {
  return (
    <main className="flex-1 p-3 xl:p-6 bg-gray-50 overflow-auto">
    <div className="flex flex-col xl:flex-row gap-6">

      <div className="col-span-5">
        <AnatomySection />
      </div>
      
   
      <div className="col-span-5 ">
        <CalendarView />
  
          <UpcomingSchedule />

      </div>
    </div>
  </main>
  )
}

export default DashboardMainContent
