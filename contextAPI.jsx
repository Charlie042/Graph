import React from "react";
import { createContext } from "react";
import { useState } from "react";

const AppContext = createContext()

const AppProvider = ({children}) => {
  const [stock, setStock] = useState([])
  const [watchlist, setWatchlist]  = useState(["GOOGL", "MSFT","AMZN"])
  const [search,setSearch] = useState("")
  const [result,setResult] = useState([])


  const addStock = (stock) => {
    if (watchlist.indexOf(stock) == -1) {
      setWatchlist([...watchlist,stock])
    }
  }
  const deleteStock = (stock) => {
    watchlist.filter((el) => {
     return el !== stock
    })
  }




  return (
    <AppContext.Provider value={{watchlist,stock,search,result,addStock,
    setResult,setSearch,setStock,setWatchlist}}>
        {children}
        </AppContext.Provider>
  )
}
export{ AppContext,AppProvider}