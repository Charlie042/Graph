import * as React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { StockDetailedPage } from './pages/StockDetailedPage'
import { StockOverviewPage } from './pages/StockOverviewPage'
import { AppProvider } from '../contextAPI.jsx'
import './App.css'

function App() {
 

  return (
<AppProvider>
<BrowserRouter>
   <Routes>
    <Route path='/' element= {<StockDetailedPage/>}/>
    <Route path='/details/:symbol' element= {<StockOverviewPage/>}/>
   </Routes>
   </BrowserRouter>
 
</AppProvider>
    )
  }

export default App
