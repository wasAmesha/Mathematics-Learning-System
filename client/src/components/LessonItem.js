import React from 'react';
import {Link} from "react-router-dom";

function LessonItem({image,title,path}) {
  return (
    <Link to={path}>
      <div className='lessonItem'>
        <div style={{backgroundImage: `url(${image})` }}> </div>
        <h1>{title}</h1>
    </div>
    </Link>
  );
}

export default LessonItem
