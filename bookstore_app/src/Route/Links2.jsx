import React from 'react'
import { NavLink } from 'react-router-dom'

export const Links2 = () => {
  return (
    <div>
    <NavLink to="/bookStore" className="navLink" activeClassName="activeNav">BookStore</NavLink>
    <NavLink to="/orders" className="navLink" activeClassName="activeNav">Orders</NavLink>
    <NavLink to="/yoursCart" className="navLink" activeClassName="activeNav">Cart</NavLink>
    </div>
  )
}
