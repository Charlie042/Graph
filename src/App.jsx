import * as React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { StockDetailedPage } from './pages/StockDetailedPage'
import { StockOverviewPage } from './pages/StockOverviewPage'
import './App.css'

function App() {
 

  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element= {<StockDetailedPage/>}/>
    <Route path='/details/:symbol' element= {<StockOverviewPage/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App
