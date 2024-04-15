import React from 'react';
import {Link} from "react-router-dom";
import '../styles/Courses.css';
import CircleIcon from '@mui/icons-material/Circle';

function Courses() {
  return (
    <div className='courses'>
      <div className='courseContainer'>
        <h1> Courses </h1>
        <p> &nbsp;&nbsp;&nbsp;&nbsp; Embark on an exciting journey of mathematical discovery with our comprehensive 
            fundamental courses. Whether you're a curious beginner or looking to reinforce 
            your math skills, MathLog offers interactive lessons, engaging exercises and step-by-step 
            tutorials that make learning math a breeze. Unlock the power of numbers, equations and 
            concepts while building a solid foundation for your mathematical prowess. Join us and let 
            your math journey begin! </p>

        <div className='courseList'>
        <h2> <CircleIcon class='courseCircleIcon'/> Basic Arithmetic Course: </h2>
        <p> Course Description: This course covers fundamental arithmetic operations, including addition, subtraction, multiplication, and      division. It is designed for absolute beginners or those looking to strengthen their basic math skills. </p>
        <p> Topics Covered: Whole numbers, fractions, decimals, percentages, order of operations, and basic word problems. </p>
        <p> Target Audience: Suitable for students in elementary and middle school, as well as adults looking to refresh their arithmetic skills. </p>
        <p> Duration: Approximately 2-4 weeks </p>

        <h2> <CircleIcon class='courseCircleIcon'/> Pre-Algebra Course: </h2>
        <p> Course Description: Pre-algebra lays the groundwork for more advanced math concepts. This course introduces students to algebraic thinking and problem-solving techniques. </p>
        <p> Topics Covered: Variables, equations, inequalities, integers, exponents, basic geometry, and graphing. </p>
        <p> Target Audience: Typically designed for middle school students, but also helpful for adults who want to build a strong foundation for algebra. </p>
        <p> Duration: Approximately 6-8 weeks </p>

        <h2> <CircleIcon class='courseCircleIcon'/> Elementary Geometry Course: </h2>
        <p> Course Description: Geometry explores the properties and relationships of shapes, lines, angles, and spatial concepts. This course provides an introduction to geometry principles. </p>
        <p> Topics Covered: Points, lines, angles, polygons, triangles, quadrilaterals, circles, and basic area and perimeter calculations. </p>
        <p> Target Audience: Ideal for middle and high school students studying geometry for the first time. </p>
        <p> Duration: Approximately 8-12 weeks </p>

        <h2> <CircleIcon class='courseCircleIcon'/> Introduction to Calculus Course: </h2>
        <p> Course Description: This course serves as a bridge to more advanced mathematics, focusing on the fundamental concepts of calculus. It's for students who have a solid algebra and trigonometry background. </p>
        <p> Topics Covered: Limits, derivatives, integrals, basic differential equations, and applications of calculus. </p>
        <p> Target Audience: Typically, this course is taken by high school students preparing for college-level calculus or college students who need a refresher. </p>
        <p> Duration: Approximately 12-16 weeks </p>
        </div>
        <div className='regButton'>
          <Link to="/register">
            <button> Register Now </button>
          </Link>
        </div>
        <div className='viewButton'>
          <Link to="/mycourses">
            <button> View Registered Courses </button>
          </Link>
        </div>
        
      </div>
    </div>
  )
}

export default Courses;