import React from 'react'
import AsideBar from './components/AsideBar'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className='flex gap-5' style={{ display: "flex" }}>
      <AsideBar />
      <div style={{ flex: 1 }}>
        <Outlet />
      </div>
    </div>
  )
}
