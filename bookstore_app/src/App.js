import logo from './logo.svg';
import './App.css';
import { Login } from './Components/Login';
import { NavLink } from 'react-router-dom';
import {Allroute}  from './Route/Allroute'




function App() {
  
  return (
    <div className="App">  
    <div className='Navbar'>
    <NavLink to="/" className="navLink" activeClassName="activeNav">LOGIN</NavLink>
    <NavLink to="/signup" className="navLink" activeClassName="activeNav">SIGN IN</NavLink>
    {/* <NavLink to="/bookStore" className="navLink" activeClassName="activeNav">Login</NavLink>
    <NavLink to="/yoursCart" className="navLink" activeClassName="activeNav">Login</NavLink>
    <NavLink to="/orders" className="navLink" activeClassName="activeNav">Login</NavLink> */}
    </div>
    <Allroute/>
    </div>
  );
}

export default App;
