import React, { useState } from 'react';
import Axios from 'axios';
import '../styles/Register.css';
//import {useGetUserID} from "../hooks/useGetUserID";

function Register() {
  /*
  const [fullName,setFullName]=useState("");
  const [dob,setDOB]=useState("");
  const [email,setEmail]=useState("");
  const [country,setCountry]=useState("");
  const [courseName,setCourseName]=useState("");

  const addToCourseList=()=>{
    Axios.post("http://localhost:3001/insert", {fullName:fullName,dob:dob,email:email,country:country,courseName:courseName})
  };*/

  /*const userID=useGetUserID();*/
  const userId = localStorage.getItem('userID');

  const [userCourse,setUserCourse]=useState({
      fullName:"",
      dob:"",
      country:"",
      email:"",
      courseName:"",
      userOwner:userId,
  });

  const handleChange=(event)=>{
    const{name,value}=event.target;
    setUserCourse({...userCourse,[name]:value});
  };

  const onSubmit=async(event)=>{
    event.preventDefault();
    try{
      await Axios.post("http://localhost:3001/usercourses",userCourse);
      alert("You have registered for the course successfully!");
      window.location.pathname="/courses"
    }catch(err){
      console.error(err);
    }
  };

  return (
    <div className='Register'>
      <div className="RegForm">
        <h1> Registration Form </h1>
        <h3> Enter the details to register </h3>

        <form id="Register-form" onSubmit={onSubmit}>
          <label htmlFor="name">Full Name</label>
          <input placeholder="Enter full name..." type="text" id='fullName' name='fullName' onChange={handleChange}/>
          <label htmlFor="bof">Date of Birth</label>
          <input placeholder="Enter birthday..." type="date" id='dob' name='dob' onChange={handleChange}/>
          <label htmlFor="email">Email</label>
          <input placeholder="Enter email..." type="email" id='email' name='email' onChange={handleChange}/>
          <label htmlFor="country">Country</label>
          <input placeholder="Enter country..." type="text" id='country' name='country' onChange={handleChange}/>
          <label htmlFor="course">Course Name</label>
          <input placeholder="Enter course name..." type="text" id='courseName' name='courseName' onChange={handleChange}/>
          <button type="submit"> Register </button>
        </form>
      </div>
    </div>
  )
}

export default Register

/*<form id="Register-form">
          <label htmlFor="name">Full Name</label>
          <input placeholder="Enter full name..." type="text" onChange={(event)=>{setFullName(event.target.value);}}/>
          <label htmlFor="bof">Date of Birth</label>
          <input placeholder="Enter birthday..." type="date" onChange={(event)=>{setDOB(event.target.value);}}/>
          <label htmlFor="email">Email</label>
          <input placeholder="Enter email..." type="text" onChange={(event)=>{setEmail(event.target.value);}}/>
          <label htmlFor="country">Country</label>
          <input placeholder="Enter country..." type="text" onChange={(event)=>{setCountry(event.target.value);}}/>
          <label htmlFor="course">Course Name</label>
          <input placeholder="Enter course name..." type="text" onChange={(event)=>{setCourseName(event.target.value);}}/>
          <button type="submit" onClick={addToCourseList}> Register </button>
        </form>*/ 