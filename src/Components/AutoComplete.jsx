import React from 'react'
impor

const AutoComplete = () => {
  return (
    <div className='w-50 p-5 rounded max auto'>
      <div className='form-floating dropdown'>
      <input style={{background: "rgba(145,158,171,0.04"}} 
      type="text" id='search'  className='form-control' placeholder='Search' autoComplete='off'/>
      <label htmlFor="search"> Search</label>
      </div>

    </div>
  )
}

export default AutoComplete