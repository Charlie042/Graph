import React from 'react'
import finhub from '../api/finhub'
import { useState, useEffect } from 'react'


const AutoComplete = () => {
  const [search,setSearch] = useState("")
  const [result,setResult] = useState([])

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
      if(isMount){
        setResult(response.data.result)
      }
      
    
      console.log(response)
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
      </div>

    </div>
  )
}

export default AutoComplete