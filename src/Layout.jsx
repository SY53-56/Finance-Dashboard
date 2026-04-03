import React, { useState } from 'react'
import AsideBar from './components/AsideBar'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
      
      {/* Sidebar */}
      <div
        className={`
          fixed z-50 top-0 left-0 h-full w-64 bg-white dark:bg-gray-800
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 lg:static lg:block
        `}
      >
        <AsideBar />
      </div>

      {/* Main Content */}
      <div className="flex-1 w-full">
        
        {/* Mobile Navbar */}
        <div className="flex justify-between lg:hidden p-4 bg-white dark:bg-gray-800 shadow">
            <h1 className='text-3xl text-white font-bold'>Finance transaction</h1>
          <button
            onClick={() => setOpen(!open)}
            className="px-3 py-2 bg-gray-200 dark:bg-gray-700 rounded"
          >
            ☰
          </button>
        </div>

        {/* Page Content */}
        <div className="p-5">
          <Outlet />
        </div>
      </div>
    </div>
  )
}