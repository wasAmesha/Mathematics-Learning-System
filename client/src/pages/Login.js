import React, { useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Link} from "react-router-dom";
import Axios from 'axios';
import {useCookies} from "react-cookie";
import '../styles/Login.css';

function Login() {
  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");

  const[_,setCookies]=useCookies(["access_token"]);

  const onSubmit=async(event)=>{
    event.preventDefault();
    try{
      const response = await Axios.post("http://localhost:3001/auth/login",{username,password,});
      setCookies("access_token",response.data.token);
      window.localStorage.setItem("userID",response.data.userID);
      window.location.pathname="/"
      /*alert("You have Logged In!");*/
    }catch(err){
      console.error(err);
    }
  };

  return (
    <div className='login'>
        <div className="loginForm">
                <form id='form' className='flex flex-col' onSubmit={onSubmit}>
                  <AccountCircleIcon class='ProfileIcon'/>
                  <h2>Log In</h2>
                  <span>login and enjoy the services</span>

                    <input type="text" placeholder='username' id="username" value={username} onChange={(event)=>setUsername(event.target.value)}/>
                    <input type="password" placeholder='password' id="password" value={password} onChange={(event)=>setPassword(event.target.value)}/>
                    <button className='LogBtn' type='submit'>Log In</button>
                    <p>create new account</p>
                    <Link to="/signup">
                      <button>Sign Up</button>
                    </Link>
                </form>
        </div>
    </div>
  )
}

export default Login
