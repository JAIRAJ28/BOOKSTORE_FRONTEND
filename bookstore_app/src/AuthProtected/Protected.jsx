import React, { useContext } from 'react'
import { AuthContext } from '../ContextApi/AuthContext'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const AuthProtected = ({children}) => {
  let {auth,setAuth,handelAuth,name,setToken,token}=useContext(AuthContext)
 

   let nav=useNavigate()
   if(!auth){
    toast.error('Please Login To Visit The Site!');
    nav("/login")
    return
   }

  return (
    <div>
      {children}
    </div>
  )
}
