import React,  { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Header from '../components/Header'
import { useState } from 'react'
import { debounce } from '../components/debounce'
import { useMemo } from "react";
export default function Transactions() {
  const { transactions } = useContext(AppContext)
 const [search  , setSearch] = useState("")

const searchData = transactions.filter((item) =>
  item.category.toLowerCase().includes(search.toLowerCase()) ||
  item.type.toLowerCase().includes(search.toLowerCase()) ||
  item.date.includes(search)
);
 


const handleSearch = useMemo(
  () =>
    debounce((value) => {
      setSearch(value);
    }, 300),
  []
);
  return (
    <div className='px-4 md:px-10 py-6 md:py-10'>
      <Header />
      <div className="mt-6 md:mt-8">
        <div>
    <input
        type="text"
        placeholder="Search by category..."
        className="w-full text-white sm:w-1/3 p-2 border rounded mb-4"
        value={search}
        name='text'
        onChange={(e) => handleSearch(e.target.value)}
      />

        </div>
        <h1 className="text-2xl font-bold mb-6 dark:text-white">All Transactions</h1>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Category</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Type</th>
                  <th className="px-6 py-4 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                {searchData.map((t) => (
                  <tr key={t.id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200">
                      {new Date(t.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200">{t.category}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        t.type === 'income'
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                          : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                      }`}>
                        {t.type}
                      </span>
                    </td>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm font-semibold text-right ${
                      t.type === 'income' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                    }`}>
                      {t.type === 'income' ? '+' : '-'}₹{t.amount.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
