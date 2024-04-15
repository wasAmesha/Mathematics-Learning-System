import React from 'react';
import '../styles/Notes.css';

function About() {
  return (
    <div className='notes'>
      <div className='notesContainer'>
        <h1> Arithmatic </h1>
        <p> &nbsp;&nbsp;&nbsp;&nbsp; Arithmetic is the fundamental branch of mathematics that deals with the basic 
            operations of numbers. It forms the foundation for more advanced mathematical 
            concepts and practical applications. </p>
        <h2> Basic Operations </h2>
        <p> Arithmetic involves four primary operations, </p>
        <p> (1) Addition: Combining two or more numbers to find their total. </p>
        <p> &nbsp;&nbsp;&nbsp;&nbsp; &#x2022; Symbol: "+" </p>
        <p> &nbsp;&nbsp;&nbsp;&nbsp; &#x2022; Example: 3 + 5 = 8</p>
        <p> (2) Subtraction: Finding the difference between two numbers. </p>
        <p> &nbsp;&nbsp;&nbsp;&nbsp; &#x2022; Symbol: "-" </p>
        <p> &nbsp;&nbsp;&nbsp;&nbsp; &#x2022; Example: 9 - 5 = 4</p>
        <p> (3) Multiplication: Repeated addition or grouping of numbers. </p>
        <p> &nbsp;&nbsp;&nbsp;&nbsp; &#x2022; Symbol: "x" or "*" </p>
        <p> &nbsp;&nbsp;&nbsp;&nbsp; &#x2022; Example: 6 x 2 = 12</p>
        <p> (4) Division: Distributing a number into equal parts or finding how many times one number fits into another. </p>
        <p> &nbsp;&nbsp;&nbsp;&nbsp; &#x2022; Symbol: "&divide;" or "/" </p>
        <p> &nbsp;&nbsp;&nbsp;&nbsp; &#x2022; Example: 20 &divide; 4 = 5</p>

        <h2> Properties of Arithmetic Operations </h2>
        <p> (1) Commutative Property: Changing the order of numbers doesn t affect the result of addition or multiplication. </p>
        <p> &nbsp;&nbsp;&nbsp;&nbsp; &#x2022; Addition: a + b = b + a </p>
        <p> &nbsp;&nbsp;&nbsp;&nbsp; &#x2022; Multiplication: a × b = b × a</p>
        <p> (2) Associative Property: The grouping of numbers in addition or multiplication does not affect the result. </p>
        <p> &nbsp;&nbsp;&nbsp;&nbsp; &#x2022; Addition: (a + b) + c = a + (b + c) </p>
        <p> &nbsp;&nbsp;&nbsp;&nbsp; &#x2022; Multiplication: (a × b) × c = a × (b × c)</p>
        <p> (3) Distributive Property: Multiplication distributes over addition. </p>
        <p> &nbsp;&nbsp;&nbsp;&nbsp; &#x2022; a × (b + c) = (a × b) + (a × c) </p>
        <p> (4) Identity Elements: </p>
        <p> &nbsp;&nbsp;&nbsp;&nbsp; &#x2022; Addition: The identity element is 0, because a + 0 = a for any number a </p>
        <p> &nbsp;&nbsp;&nbsp;&nbsp; &#x2022; Multiplication: The identity element is 1, because a × 1 = a for any number a</p>
        <p> (5) Inverse Elements: </p>
        <p> &nbsp;&nbsp;&nbsp;&nbsp; &#x2022; Addition: The inverse of a number a is a, because a + (-a) = 0 </p>
        <p> &nbsp;&nbsp;&nbsp;&nbsp; &#x2022; Multiplication: The reciprocal of a number a is 1/a, because a × (1/a) = 1</p>

        <h2> Order of Operations </h2>
        <p> &nbsp;&nbsp;&nbsp;&nbsp; To avoid ambiguity, a specific order of performing operations is followed: </p>
        <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1. Parentheses </p>
        <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2. Exponents</p>
        <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3. Multiplication and division (left to right)</p>
        <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4. Addition and subtraction (left to right)</p>

      </div>
    </div>
  )
}

export default About
