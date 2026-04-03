import React from 'react'
import AsideBar from '../components/AsideBar'
import Box from '../components/DashboardCards'
import DashboardCards from '../components/DashboardCards'
import LineChart from '../components/LinerChart'
import Header from '../components/Header'
import TransactionsTable from '../components/TransactionsTable'
import PieChartBox from '../components/pieChart'
export default function Home() {
  return (
    <div className='px-10 py-10'>
       <Header/>
   <div className='flex gap-4 mt-5'>
   <DashboardCards/>
   
   </div>
  <div>
     <LineChart/>
     <PieChartBox/>
  </div>
   <TransactionsTable/>
    </div>
  )
}
