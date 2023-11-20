import React, { useEffect, useState } from 'react'
import ax from 'axios'
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'
const Home = () => {
  const [workouts,setworkoutes] = useState([])
  const[show,setshow] = useState(false)
  useEffect(()=>{

    const getData= async()=>{
      //let response = await ax.get("http://localhost:4000/api/workout")
      let response = await ax.get("https://workout-fhwu.onrender.com/api/workout")
    console.log(response.data)
    setworkoutes(response.data)
    }

   getData()
  },[show])
  return (
    <div className='home'>
     <div className='workouts'>
     {workouts && workouts.map(work => (
      <WorkoutDetails workout ={work} show= {show} setshow={setshow} key={work._id}/>
      
     
     ))
     
   
     
}
     </div>
     <WorkoutForm setshow={setshow} show={show}/>
    
    </div>

   
  )
}

export default Home