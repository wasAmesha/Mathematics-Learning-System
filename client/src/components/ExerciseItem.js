import React from 'react';
import {Link} from "react-router-dom";

function ExerciseItem({image,title,path}) {
  return (
    <Link to={path}>
      <div className='exerciseItem'>
        <div style={{backgroundImage: `url(${image})` }}> </div>
        <h1>{title}</h1>
    </div>
    </Link>
  );
}

export default ExerciseItem
