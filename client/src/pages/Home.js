import React from 'react';
import {Link} from "react-router-dom";
import '../styles/Home.css';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import BookImg from "../assets/book.jpeg";

function Home() {
  return (
    <div className='home'>
      <div className='headerContainer'>
        <h1> Welcome to MathLog! </h1>
        <p> &nbsp;&nbsp;&nbsp;&nbsp; Embark on an exciting journey of mathematical discovery with our comprehensive 
            fundamental learning website. Whether you're a curious beginner or looking to reinforce 
            your math skills, MathLog offers interactive lessons, engaging exercises and step-by-step 
            tutorials that make learning math a breeze. Unlock the power of numbers, equations and 
            concepts while building a solid foundation for your mathematical prowess. Join us and let 
            your math journey begin! </p>
        <p> &nbsp;&nbsp;&nbsp;&nbsp; Our diverse range of modules and exercises is here to cater to your learning needs. 
            Choose from variety of engaging modules that cover essential concepts, exercises and 
            discuss your problems with other users. </p>
            <br></br>
        <h2> Study Materials to refer <ArrowDropDownIcon class='dropIcon'/> </h2>
        <Link to="/lessons">
          <button> Lessons List </button>
        </Link>
        <h2> Exercises to practice <ArrowDropDownIcon class='dropIcon'/> </h2>
        <Link to="/exercises">
          <button> Exercises List </button>
        </Link>
        <h2> Quizes to evaluate <ArrowDropDownIcon class='dropIcon'/> </h2>
        <Link to="/quizes">
          <button> Go to Quiz </button>
        </Link>
        <h2> Register for the courses <ArrowDropDownIcon class='dropIcon'/> </h2>
        <Link to="/courses">
          <button> Course Details </button>
        </Link>
      </div>
      <img src={BookImg} alt="BookImage" className='homeImg'/>
    </div>
  )
}

export default Home;
