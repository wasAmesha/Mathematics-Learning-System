import React from 'react'
import { ExerciseList } from '../helpers/ExerciseList';
import ExerciseItem from '../components/ExerciseItem';
import '../styles/Exercise.css';

function Exercise() {
  return (
    <div className='exercises'>
      <h1 className='exerciseTitle'>Exercises</h1>
      <div className='exerciseList'>
        {ExerciseList.map((exercise,key)=>{
            return<ExerciseItem 
            key={key} 
            image={exercise.image} 
            title={exercise.title}
            path={exercise.path}/>
        })}
      </div>
    </div>
  )
}

export default Exercise
