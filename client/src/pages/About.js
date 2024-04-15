import React from 'react';
import AboutImg from "../assets/about.jpg";
import '../styles/About.css';

function About() {
  return (
    <div className='about'>
      <div className='aboutContainer'>
        <h1> About Us </h1>
        <p> &nbsp;&nbsp;&nbsp;&nbsp; Welcome to the MathLog, your go-to destination for 
            mastering the fundamentals of <br></br> mathematics and engaging in 
            thought-provoking problem discussions. Whether you're a <br></br>
            student looking to strengthen your math skills or an enthusiast 
            seeking a deeper <br></br> understanding of mathematical concepts, 
            you've come to the right place. </p>
        <h2> Our Mission </h2>
        <p> &nbsp;&nbsp;&nbsp;&nbsp; At the MathLog, our mission is to empower learners of all ages to develop a strong 
            <br></br> foundation in mathematics and cultivate a passion for problem-solving. We believe that <br></br> every 
            individual has the potential to grasp mathematical concepts when provided with <br></br> clear explanations, 
            interactive learning experiences and a supportive community to <br></br> engage with. </p>
        <h2> What We Offer </h2>
        <p> &nbsp;&nbsp;&nbsp;&nbsp; We offer a wide range of meticulously crafted lessons, tutorials, and interactive <br></br> exercises 
            covering the fundamental aspects of mathematics, from arithmetic to algebra,<br></br> geometry to calculus. 
            Our resources cater to learners at various levels, from beginners <br></br> to advanced enthusiasts. </p>
        <p> &nbsp;&nbsp;&nbsp;&nbsp; Our platform provides a dynamic space for enthusiasts to engage in stimulating <br></br> discussions 
            about challenging math problems. Share your insights, strategies and <br></br> creative solutions with a 
            community of fellow learners. Collaborate, learn and grow <br></br> together. Also keep track of your progress and accomplishments as you work through <br></br> our learning resources and complete exercises. </p>
        <h2> Join Our Community </h2>
        <p> &nbsp;&nbsp;&nbsp;&nbsp; We invite you to become a part of our vibrant and inclusive community of mathematics 
            enthusiasts. Whether you're here to learn, discuss, or contribute, you'll find a welcoming 
            environment where your curiosity and passion for mathematics can thrive.
        </p>
      </div>
      <img src={AboutImg} alt="AboutImage" className='aboutImg'/>
    </div>
  )
}

export default About
