import React, { useEffect,useState } from 'react';
import {useParams} from "react-router-dom";
import Axios from 'axios';
import '../styles/DropCourse.css';

function DropCourse() {

  const{id}=useParams();

  const [fullName,setFullName]=useState("");
  const [courseName,setCourseName]=useState("");

  useEffect(()=>{
    const fetchDeleteData=async()=>{
      try{
        const response=await Axios.get("http://localhost:3001/usercourses/coursedetails/"+id);
        setFullName(response.data.fullName);
        setCourseName(response.data.courseName);
        console.log(response);
      }catch(err){
        console.error(err);
      }
    }
    fetchDeleteData();
  },[])

  const onSubmit=async (event)=>{
    event.preventDefault();
    try{
      await Axios.delete("http://localhost:3001/usercourses/deletecourses/"+id);
      alert("You have unregistered from the course!");
      window.location.pathname="/mycourses"
    }catch(err){
      console.error(err);
    }
  };

  return (
    <div className='dropCourse'>
      <div className="dropForm">
        <h1> Drop Course </h1>
        <h3> Enter the details to drop the course </h3>

        <form id="Drop-form" onSubmit={onSubmit}>
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text" value={fullName} onChange={(event)=>setFullName(event.target.value)}/>
          <label htmlFor="course">Course Name</label>
          <input name="course" placeholder="Enter course name..." type="text" value={courseName} onChange={(event)=>setCourseName(event.target.value)}/>
          <button type="submit"> Unregister me </button>
        </form>
      </div>
    </div>
  )
}

export default DropCourse