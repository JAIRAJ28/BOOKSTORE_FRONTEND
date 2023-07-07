import React from "react";
import { Route,Routes } from "react-router-dom";
import { Login } from "../Components/Login";
import { Orders } from "../Components/Orders";
import { Cart } from "../Components/Cart";
import { Signup } from "../Components/Signup";
import { BookStore } from "../Components/BookStore";
import { AuthProtected } from '../AuthProtected/Protected'

export const Allroute = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/bookStore" element={
            <AuthProtected>
            <BookStore/>
            </AuthProtected>}/>
            <Route path="/yoursCart" element={<AuthProtected><Cart/></AuthProtected>}/>
            <Route path="/orders" element={<AuthProtected><Orders/></AuthProtected>}/>
        </Routes>
    </div>
  )
}
