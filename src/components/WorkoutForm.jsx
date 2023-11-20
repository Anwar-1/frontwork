import React, { useState } from 'react'
import ax from 'axios'

const WorkoutForm = ({show,setshow}) => {
  const [title, settitle] = useState('')
  const [load, setload] = useState('')
  const [reps, setreps] = useState('')
  const [error, seterror] = useState(null)

  const handlesubmit = async (e) => {
    e.preventDefault() // عشان ما يعمل تحميل كل ما اكبس على كبسة عشان تبطل فوروم يعمل ريفريش كل ما اكبس على كبسة 
    try {
        await ax.post('https://workout-fhwu.onrender.com/api/workout/' ,{title,load,reps} )
        settitle('')
        setload('')
        setreps('')
        seterror('')
        setshow(!show)

    } catch (error) {
      seterror('please enter the field')
    }


  }
  return (
    <form className='create' onSubmit={handlesubmit}>
      <h3>Add a new work </h3>
      <label>Excersize title :</label>
      <input type='text'
        value={title}
        onChange={(e) => settitle(e.target.value)}


      />

      <label>load(in kg) :</label>
      <input type='number'
        value={load}
        onChange={(e) => setload(e.target.value)}

      />

      <label>reps :</label>
      <input type='number'
        value={reps}
        onChange={(e) => setreps(e.target.value)}


      />

      <button>add workout</button>
      {error && <div className='error'>{error}</div>}

    </form>

  )
}

export default WorkoutForm