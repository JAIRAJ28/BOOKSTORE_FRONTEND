import React, { useState } from 'react';
import style from './Css/Signin.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Signup = () => {
  const [state, setState] = useState({
    name: '',
    email: '',
    password: ''
  });

  const nav = useNavigate();

  const handleChange = (e) => {
    setState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://127.0.0.1:5000/book/signup', state)
      .then((res) => {
        console.log(res);
        toast.success(`${res.data.message}  Login To Enter The Book World`);
        setTimeout(()=>{
          nav('/');
        },6000)
        
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={style.mainLogin}>
      <ToastContainer position="bottom-center" /> {/* Set the position to bottom-center */}
      <form action="" className={style.loginForm} onSubmit={handleSubmit}>
        <label htmlFor="">NAME</label>
        <input
          type="text"
          placeholder="ENTER YOUR NAME"
          name="name"
          value={state.name}
          required
          onChange={handleChange}
        />
        <label htmlFor="">Email</label>
        <input
          type="text"
          placeholder="ENTER YOUR EMAIL"
          name="email"
          value={state.email}
          required
          onChange={handleChange}
        />
        <label htmlFor="">PASSWORD</label>
        <input
          type="password"
          placeholder="ENTER YOUR PASSWORD"
          name="password"
          value={state.password}
          required
          onChange={handleChange}
        />
        <input type="Submit" value="SIGN IN" />
      </form>
    </div>
  );
};
