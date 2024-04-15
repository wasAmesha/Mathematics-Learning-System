import React from 'react'
import { LessonList } from '../helpers/LessonList';
import LessonItem from '../components/LessonItem';
import '../styles/Lessons.css';

function Lessons() {
  return (
    <div className='lessons'>
      <h1 className='lessonTitle'>Lessons</h1>
      <div className='lessonList'>
        {LessonList.map((lesson,key)=>{
            return<LessonItem 
            key={key} 
            image={lesson.image} 
            title={lesson.title}
            path={lesson.path}/>
        })}
      </div>
    </div>
  )
}

export default Lessons
