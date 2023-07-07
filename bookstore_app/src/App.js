import logo from './logo.svg';
import './App.css';
import { Login } from './Components/Login';
import { NavLink, useNavigate } from 'react-router-dom';
import {Allroute}  from './Route/Allroute'
import { useContext } from 'react';
import { AuthContext } from './ContextApi/AuthContext';
import { Links } from './Route/Links1';
import { Links2 } from './Route/Links2';
function App() {
  let {auth,setAuth,handelAuth,name,setToken,token}=useContext(AuthContext)
  const nav = useNavigate();
  return (
    <div className="App">  
    <div className='Navbar'>
   { auth?<Links2/>:<Links/>}
   <button onClick={()=>{
    handelAuth(false)
    nav("/")
    }}
    style={{padding:"5px 30px",marginLeft:"30%",borderRadius:"20px"}}>LOGOUT</button>
    </div>
    <Allroute/>
    </div>
  );
}

export default App;
