import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Transactions from './pages/Transactions'
import Layout from './Layout'
import AddTransaction from './pages/AddTransaction'
import Insights from './pages/Insights'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="transactions" element={<Transactions />} />
          <Route  path="add" element={<AddTransaction/>}/>
          <Route path='insight' element={<Insights/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App