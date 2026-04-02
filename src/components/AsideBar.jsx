import React from 'react'
import { Link } from 'react-router-dom'

export default function AsideBar() {
  return (
    <aside className='w-96 h-[100vh] bg-blue-500 rounded-lg px-3  py-2'>
        <div className='flex gap-4 flex-col'>
      <Link to="/">dashBoard</Link>
      <Link to="/transaction">transition</Link>
        </div>
    </aside>
  )
}
