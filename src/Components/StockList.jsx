import React from 'react'
import { useState,useEffect } from 'react'
import { BsCaretDownFill } from "react-icons/bs"
import { BsCaretUpFill } from "react-icons/bs";
import { useGlobal } from '../../useGlobal';

import finhub from '../api/finhub'

const StockList = () => {
  const {stock,setStock, watchlist,setWatchlist} = useGlobal()
  const changeColor = (change) => {
  return  change > 0 ? "success" : "danger"
  }

  const changeIcon = (icon) => {
    return icon > 0 ? <BsCaretUpFill/>  : <BsCaretDownFill/>
  }
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
              Last
            </th>
            <th scope='col'>
              chg
            </th>
            <th scope='col'>
              chg%
            </th>
            <th scope='col'>
              high
            </th>
            <th scope='col'>
              low
            </th>
            <th scope='col'>
              open
            </th>
            <th scope='col'>
            pclose
            </th>

          </tr>
        </thead>
        <tbody>
          {stock.map((stockdata)=> {
            return (
              <tr className='table-row' key={stockdata.params}>
                <th>{stockdata.params}</th>
                <td>{stockdata.data.c}</td>
                <td className={`text-${changeColor(stockdata.data.d)}`}>{stockdata.data.d} {changeIcon(stockdata.data.d)}</td>
                <td className={`text-${changeColor(stockdata.data.dp)}`}>{stockdata.data.dp} {changeIcon(stockdata.data.dp)}</td>
                <td>{stockdata.data.h}</td>
                <td>{stockdata.data.l}</td>
                <td>{stockdata.data.o}</td>
                <td>{stockdata.data.pc}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default StockList