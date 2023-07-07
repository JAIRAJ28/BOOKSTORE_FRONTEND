import React, { useContext, useState } from 'react'
import style from './Css/Login.module.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../ContextApi/AuthContext';
export const Login = () => {
  const [state, setState] = useState({
    email:'',
    password:''
  });

  let {auth,setAuth,handelAuth,name,setToken,token}=useContext(AuthContext)

  const nav = useNavigate();

  const handleChange = (e) => {
    setState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handelSubmit=(e)=>{
   e.preventDefault()
   axios
   .post('http://127.0.0.1:5000/book/login', state)
   .then((res) => {
     console.log(res);
     handelAuth(true)
     name.current=res.data.name
     setToken(res.data.token)
     toast.success(`Logged In Successfully, Welcome`);
     setTimeout(()=>{
       nav('/bookStore');
     },6000)
     
   })
   .catch((err) => toast.error('Please Provide Valid Credentials!'));
  }
  

  return (
    <div className={style.mainLogin}>
      <ToastContainer position="bottom-center" />
        <form action="" className={style.loginForm} onSubmit={handelSubmit}>
            <label htmlFor="">Email</label>
            <input type="text" placeholder='ENTER YOUR EMAIL' name="email" value={state.email} onChange={handleChange} />
            <label htmlFor="">PASSWORD</label>
            <input type="password" placeholder='ENTER YOUR PASSWORD' name="password" value={state.password} onChange={handleChange}/>
            <input type="Submit" value="LOGIN" />

            <p className={style.ptg}>Login To Visit The Store</p>
        </form>
    </div>
  )
}
