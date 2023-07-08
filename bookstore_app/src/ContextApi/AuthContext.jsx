import React, { createContext, useRef, useState } from 'react'

export const AuthContext=createContext()

export const AuthContextProvider = ({children}) => {
    let [auth,setAuth]=useState(true)
    let [token,setToken]=useState("")
    let name=useRef(null)
    
    const handelAuth=(n)=>{
      setAuth(n)
    }
  
    
  
  return (
    <AuthContext.Provider value={{auth,setAuth,handelAuth,name,token,setToken}}>
      {children}
    </AuthContext.Provider>
  )
}
