import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Home, Receipt, Moon, Sun } from 'lucide-react'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

export default function AsideBar() {
 
  return (
    <aside className="w-64 min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white p-6 shadow-xl">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Finance Dashboard
        </h1>
      
      </div>

      <div className="flex flex-col gap-2">
        <Link
          to="/"
          className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
            location.pathname === '/'
              ? 'bg-blue-600 text-white shadow-md'
              : 'hover:bg-gray-700 text-gray-300 hover:text-white'
          }`}
        >
          <Home className="w-5 h-5" />
          Dashboard
        </Link>
        <Link
          to="/transactions"
          className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
            location.pathname === '/transactions'
              ? 'bg-blue-600 text-white shadow-md'
              : 'hover:bg-gray-700 text-gray-300 hover:text-white'
          }`}
        >
          <Receipt className="w-5 h-5" />
          Transactions
        </Link>
      </div>
    </aside>
  )
}
