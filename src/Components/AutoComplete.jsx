import React from 'react'
import finhub from '../api/finhub'
import { useState, useEffect } from 'react'
import { useGlobal } from '../../useGlobal'


const AutoComplete = () => {
  const {search,result,setSearch,setResult,addStock} = useGlobal();

  const renderDrop = () =>{
   
    const render =  search ? "show" : null

    return (
      <ul style={{
        height: "100px",
        overflowY: "scroll",
        overflowX: "hidden",
        cursor: "pointer"
      }}
      className={`dropdown-menu ${render}`}>
        {result.map(result => {
          return <li onClick={()=> {
            addStock(result.symbol)
            setSearch('')
          }} key={result.symbol} 
         className='dropdown-item' >{result.description} ({result.symbol})</li>
        })}
      </ul>
    )
  }

  useEffect(()=> {
    let isMount = true
    const fetchData = async() => {

      try {
      
        const response = await finhub.get("/search",
      {
        params: {
          q: search
        }
      
      })
      console.log(response.data.result)
      if(isMount){
        setResult(response.data.result)
      }
      
    
      
      } catch (error) {
        console.log(response.error)
      }
        
    }
    if(search.length > 0){
      fetchData()
    }else{
      setResult([])
    }
    return () => isMount = false
  },[search])
  return (
    <div className='w-50 p-5 rounded max auto'>
      <div className='form-floating dropdown'>
      <input style={{background: "rgba(145,158,171,0.04"}} 
      type="text" id='search'  className='form-control' placeholder='Search' autoComplete='off'
      value={search} onChange={(e)=> setSearch(e.target.value)}/>
      <label htmlFor="search"> Search</label>
    {renderDrop()}
      </div>

    </div>
  )
}

export default AutoComplete