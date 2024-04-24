import React from 'react'
import { useState,useEffect } from 'react'
import finhub from '../api/finhub'

const StockList = () => {
  const [watchlist, setWatchlist]  = useState(["GOOGL", "MSFT","AMZN"])
  useEffect(()=>{
    const fetchData = async() =>{
      try {
        const response =  await finhub.
        get("/quote?sybmbol=MSFT&token=cokcl81r01qq4pkuj38gcokcl81r01qq4pkuj390")

        console.log(response)
    
      } catch (error) {
        
      }
    }
    fetchData()
  },[])
  return (

    <div>StockList</div>
  )
}

export default StockList