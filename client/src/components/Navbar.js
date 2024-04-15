import React,{useState} from 'react';
import Logo from "../assets/mathlog_logo.PNG";
import {Link} from "react-router-dom";
import ReorderIcon from '@mui/icons-material/Reorder';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import '../styles/Navbar.css';
import {useCookies} from "react-cookie";
import Dropdown from '../components/Dropdown';
//import { Button } from '@mui/material';

function Navbar() {
  const[openLinks,setOpenLinks]=useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  //const [click, setClick] = useState(false);
  //const[click,setClick]=useState(false);
  //const[dropdown,setDropdown]=useState(false);
  //const closeMobileMenu=()=>setClick(false);
  
  const toggleNavbar=()=>{
    setOpenLinks(!openLinks);
  };
/*
  const onMouseEnter = () => {
    setDropdownVisible(true);
  };

  const onMouseLeave = () => {
    setDropdownVisible(false);
  };

  const onClick = () => {
    setClick(false);
  };
*/
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  /*
  const onMouseEnter=()=>{
    setDropdown(true);
  };

  const onMouseLeave=()=>{
    setDropdown(false);
  };

  const onClick=()=>setClick(false);*/

  const [cookies,setCookies]=useCookies(["access_token"]);

  const logout=()=>{
    setCookies("access_token","");
    window.localStorage.removeItem("userID");
  };
  
  return (
    <div className='navbar'>
        <div className='leftSide' id={openLinks ? "open":"close"}>
            <img src={Logo} alt="logo"/>
            <div className='hiddenLinks'>
              <Link to="/"> Home </Link>
              <Link to="#" onClick={toggleDropdown} > Services </Link>
              {dropdownVisible && <Dropdown />}
              <Link to="/about"> About </Link>
              <Link to="/review"> Review </Link>
              {!cookies.access_token ?(
                <Link to="/login"> <button> Log In </button> </Link>) : (<button onClick={logout} > Log Out </button>)
              }
            </div>
        </div> 
        <div className='rightSide'>
            <Link to="/"> Home </Link>
            <Link to="#" onClick={toggleDropdown} > Services <ArrowDropDownIcon class='dropIcon'/> </Link>
            {dropdownVisible && <Dropdown />}
            <Link to="/about"> About </Link>
            <Link to="/review"> Review </Link>
            <div className='logBtn'>
              {!cookies.access_token ?(
                <Link to="/login">Log In</Link>) : (<Link to="/" onClick={logout}>Log Out</Link>)
              }
            </div>
            <button onClick={toggleNavbar}>
              <ReorderIcon/>
            </button>
        </div>    
    </div>
  )
}

export default Navbar
