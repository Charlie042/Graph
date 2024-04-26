import React from 'react'
import { useState,useEffect } from 'react'
import finhub from '../api/finhub'

const StockList = () => {
  const [stock, setStock] = useState()
  const [watchlist, setWatchlist]  = useState(["GOOGL", "MSFT","AMZN"])
  useEffect(()=>{
    let isMount = true
    const fetchData = async() =>{
      
      try {
        const responses = await Promise.all(watchlist.map((stock)=> {
          return finhub.get("/quote",{
            params: {
              symbol: stock
            }
          }) 
        }))
        

        //console.log(responses)

        const data = responses.map((response)=> {
          return {
            data : response.data,
            params: response.config.params.symbol
          }
        })
        console.log(data)
        if (isMount){
          setStock(data)
        }
    
      } catch (error) {
        
      }
    }
    fetchData()
    return () => isMount = false
  },[])
  return (

    <div>
      <table className='table hover mt-5'>
        <thead style={{color: "red"}}>
          <tr>
            <th scope='col'>
              Name
            </th>
            <th scope='col'>
              Name
            </th>
            <th scope='col'>
              Name
            </th>
            <th scope='col'>
              Name
            </th>

          </tr>
        </thead>
      </table>
    </div>
  )
}

export default StockList