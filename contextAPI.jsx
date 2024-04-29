import React from "react";
import { createContext } from "react";
import { useState } from "react";

const AppContext = createContext()

const AppProvider = ({children}) => {
  const [stock, setStock] = useState([])
  const [watchlist, setWatchlist]  = useState(["GOOGL", "MSFT","AMZN"])
  const [search,setSearch] = useState("")
  const [result,setResult] = useState([])




  return (
    <AppContext.Provider value={{watchlist,stock,search,result,
    setResult,setSearch,setStock,setWatchlist}}>
        {children}
        </AppContext.Provider>
  )
}
export{ AppContext,AppProvider}