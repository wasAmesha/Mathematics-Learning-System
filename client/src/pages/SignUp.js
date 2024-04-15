import React, { useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import signImg from '../assets/sign.jpg';
import Axios from 'axios';
import '../styles/SignUp.css';

function SignUp() {
  const [username,setUsername]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  /*const [confirmPassword,setConfirmPassword]=useState("");*/

  const onSubmit=async(event)=>{
    event.preventDefault();
    try{
      await Axios.post("http://localhost:3001/auth/signup",{username,password,email,});
      alert("You have Signed Up successfully!");
      window.location.pathname="/login"
    }catch(err){
      console.error(err);
    }
  };

  return (
    <div className='signup'>
        <div className="leftSide"
        style={{ backgroundImage: `url(${signImg})` }}>
      </div>
      <div className="rightSide">
                <form id='form' className='flex flex-col' onSubmit={onSubmit}>
                  <AccountCircleIcon class='ProfileIcon'/>
                  <h2>Sign Up</h2>
                  <span>sign up and enjoy the services</span>

                    <input type="text" placeholder='username' id="username" value={username} onChange={(event)=>setUsername(event.target.value)}/>
                    <input type="email" placeholder='email address' value={email} onChange={(event)=>setEmail(event.target.value)}/>
                    <input type="password" placeholder='password' value={password} onChange={(event)=>setPassword(event.target.value)}/>
                    <input type="password" placeholder='confirm password' />
                    <button className='SignBtn' type='submit'>Sign Up</button>
                </form>
        </div>
    </div>
  )
}

export default SignUp

/*value={confirmPassword} onChange={(event)=>setConfirmPassword(event.target.value)}*/
