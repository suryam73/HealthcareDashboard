import React from 'react'
import Header from './Components/Header/Header'
import Sidebar from './Components/Sidebar/Sidebar'
import DashboardMainContent from './Components/DashboardMainContent/DashboardMainContent'

function App() {
  return (
    <div className="h-screen flex flex-col bg-gray-50">
    <Header />
    <div className="flex ">
      <Sidebar />
      <DashboardMainContent />
    </div>
  </div>

  )
}

export default App
