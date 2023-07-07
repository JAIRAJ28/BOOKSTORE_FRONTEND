import React, { createContext, useRef, useState } from 'react'

export const AuthContext=createContext()

export const AuthContextProvider = ({children}) => {
    let [state,setState]=useState(false)
    let name=useRef(null)
    
    const handelAuth=(n)=>{
      setState(n)
    }
    
    
  
  return (
    <AuthContext.Provider value={{state,setState,handelAuth,name}}>
      {children}
    </AuthContext.Provider>
  )
}
