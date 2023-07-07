import React from 'react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../ContextApi/AuthContext'

export const Links = () => {
  let {auth,setAuth,handelAuth,name,setToken,token}=useContext(AuthContext)
  return (
    <div>
    <NavLink to="/" className="navLink" activeClassName="activeNav">LOGIN</NavLink>
    <NavLink to="/signup" className="navLink" activeClassName="activeNav">SIGN IN</NavLink>
    </div>
  )
}
