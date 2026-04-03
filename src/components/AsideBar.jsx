import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

export default function AsideBar() {
  return (
    <aside className='w-60 h-screen bg-gray-900 text-white p-4'>
        <h1 className='text-3xl text-center mt-4 font-bold'>Finance dashboard</h1>
        <div className='flex gap-4 flex-col mt-7'>
            <Button to="/" name="dashboard" className="w-full hover:bg-gray-400 text-center py-2 hover:text-white"/>
      <Button to="transaction" name="transaction"  className="w-full hover:bg-gray-400 text-center py-2 hover:text-white"/>
  
        </div>
    </aside>
  )
}
