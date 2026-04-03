import React from 'react'
import DashboardCards from '../components/DashboardCards'
import LineChart from '../components/LineChart'
import Header from '../components/Header'
import TransactionsTable from '../components/TransactionsTable'
import PieChartBox from '../components/pieChart'

export default function Home() {
  return (
    <div className='px-4 md:px-10 py-6 md:py-10'>
       <Header/>
       <div className='mt-6 md:mt-8'>
         <DashboardCards/>
       </div>
       <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 mt-6 md:mt-8'>
         <LineChart/>
         <PieChartBox/>
       </div>
       <div className='mt-6 md:mt-8'>
         <TransactionsTable/>
       </div>
    </div>
  )
}
