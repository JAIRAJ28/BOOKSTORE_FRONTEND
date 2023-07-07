import React from "react";
import { Route,Routes } from "react-router-dom";
import { Login } from "../Components/Login";
import { Orders } from "../Components/Orders";
import { Cart } from "../Components/Cart";
import { Signup } from "../Components/Signup";
import { BookStore } from "../Components/BookStore";


export const Allroute = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/bookStore" element={<BookStore/>}/>
            <Route path="/yoursCart" element={<Cart/>}/>
            <Route path="/orders" element={<Orders/>}/>
        </Routes>
    </div>
  )
}
