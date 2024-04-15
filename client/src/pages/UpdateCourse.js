import React, { useEffect,useState } from 'react';
import '../styles/UpdateCourse.css';
import {useParams} from "react-router-dom";
import Axios from 'axios';

function UpdateCourse() {

  const{id}=useParams();

  const [fullName,setFullName]=useState("");
  const [dob,setDOB]=useState("");
  const [email,setEmail]=useState("");
  const [country,setCountry]=useState("");
  const [courseName,setCourseName]=useState("");

  useEffect(()=>{
    const fetchUpdateData=async()=>{
      try{
        const response=await Axios.get("http://localhost:3001/usercourses/coursedetails/"+id);
        setFullName(response.data.fullName);

        const dobDate = new Date(response.data.dob);
        const formattedDOB = dobDate.toISOString().split('T')[0];
        setDOB(formattedDOB);

        //setDOB(response.data.dob);
        setEmail(response.data.email);
        setCountry(response.data.country);
        setCourseName(response.data.courseName);
        console.log(response);
      }catch(err){
        console.error(err);
      }
    }
    fetchUpdateData();
  },[])

  const onSubmit=async (event)=>{
    event.preventDefault();
    try{
      await Axios.put("http://localhost:3001/usercourses/updatecourses/"+id,{fullName,dob,email,country,courseName});
      alert("Course details have updated successfully!");
      window.location.pathname="/mycourses"
    }catch(err){
      console.error(err);
    }
  };

  return (
    <div className='updateCourse'>
      <div className="updateForm">
        <h1> Update Details </h1>
        <h3> Make your changes here </h3>

        <form id="Register-form" onSubmit={onSubmit}>
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text" value={fullName} onChange={(event)=>setFullName(event.target.value)}/>
          <label htmlFor="bof">Date of Birth</label>
          <input name="bof" placeholder="Enter birthday..." type="date" value={dob} onChange={(event)=>setDOB(event.target.value)}/>
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email" value={email} onChange={(event)=>setEmail(event.target.value)}/>
          <label htmlFor="country">Country</label>
          <input name="country" placeholder="Enter country..." type="text" value={country} onChange={(event)=>setCountry(event.target.value)}/>
          <label htmlFor="course">Course Name</label>
          <input name="course" placeholder="Enter course name..." type="text" value={courseName} onChange={(event)=>setCourseName(event.target.value)}/>
          <button type="submit"> Save </button>
        </form>
      </div>
    </div>
  )
}

export default UpdateCourse