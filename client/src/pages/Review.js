import React, { useState } from 'react';
import mathImg from '../assets/math.png';
import '../styles/Review.css';
//import {Link} from "react-router-dom";

function Review() {

  const userId = localStorage.getItem('userID');

  const [userReview,setUserReview]=useState({
      username:"",
      email:"",
      comment:"",
      reviewOwner:userId,
  });

  const handleChange=(event)=>{
    const{name,value}=event.target;
    setUserReview({...userReview,[name]:value});
  };

  return (
    <div className='Review'>
      <div className="leftSide"
        style={{ backgroundImage: `url(${mathImg})` }}>
      </div>
      <div className="rightSide">
        <h1> Review Us </h1>

        <form id="Review-form" >
          <label htmlFor="username">Username</label>
          <input name="username" placeholder="Enter your username..." type="text" onChange={handleChange}/>
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter your email..." type="email" onChange={handleChange}/>
          <label htmlFor="comment">Comment</label>
          <textarea
            rows="6"
            placeholder="Enter your comment..."
            name="comment"
            required
            onChange={handleChange}
          ></textarea>
          <button type='submit'> Send </button>
          
        </form>
      </div>
    </div>
  )
}

export default Review