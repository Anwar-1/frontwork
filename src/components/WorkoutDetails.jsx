import React from 'react'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import ax from 'axios'
const WorkoutDetails = ({workout,show,setshow}) => {

const handelclick=async()=>{
  //await ax.delete('http://localhost:4000/api/workout/' + workout._id)
  await ax.delete('https://workout-fhwu.onrender.com/api/workout/' + workout._id)
 setshow(!show)
}


  return (
   
    <div className='workout-details'>
    <h4>{workout.title}</h4>
    <p><strong>load (kg): </strong>{workout.load}</p>
     <p><strong>Number of reps:</strong>{workout.reps}</p>
     <p>{formatDistanceToNow(new Date(workout.createdAt),{addSuffix:true})}</p>
    <span className='material-symbols-outlined' onClick={handelclick}>delete</span>
     </div>
  )
}

export default WorkoutDetails