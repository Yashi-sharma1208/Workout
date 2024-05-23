import { useState } from 'react'
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"
import { useAuthContext } from '../hooks/useAuthContext'

const WorkoutForm = () => {
  const { dispatch }=useWorkoutsContext()
  const {user} = useAuthContext()

  const [title, setTitle] = useState('')
  const [load, setLoad] = useState('')
  const [reps, setReps] = useState('')
  const [error, setError] = useState(null)
  const [emptyFields,setEmptyFields]=useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!user) 
    {
      setError('You must be logged in')
      return
    }

    const workout = {title, load, reps}
    
    const response = await fetch('/api/workouts', {
      method: 'POST',
      body: JSON.stringify(workout),
      headers: 
      {
        'Content-Type': 'application/json',
        // if user is present then we send the Bearer token in the auth header
        'Authorization': `Bearer ${user.token}`
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
      setEmptyFields(json.emptyFields)
    }
    if (response.ok) {
      // updating the parameters if response is ok
      setError(null)
      setTitle('')
      setLoad('')
      setReps('')
      // set to empty array
      setEmptyFields([])
      console.log('new workout added:', json)
      // payload is the single workout we are adding, in our case it is json response
      dispatch({type: 'CREATE_WORKOUT',payload: json})
    }

  }

  return (
    <form className="create" onSubmit={handleSubmit}> 
      <h3>Add a New Workout</h3>

      <label>Excersize Title:</label>
      <input 
        type="text" 
        onChange={(e) => setTitle(e.target.value)} 
        value={title}
        className={emptyFields.includes('title')?'error': ''}
      />

      <label>Load (in kg):</label>
      <input 
        type="decimal" 
        onChange={(e) => setLoad(e.target.value)} 
        value={load}
        className={emptyFields.includes('load')?'error': ''}
      />

      <label>Number of Reps:</label>
      <input 
        type="number" 
        onChange={(e) => setReps(e.target.value)} 
        value={reps} 
        className={emptyFields.includes('reps')?'error': ''}
      />


      {/* <input 
        type="number" 
        onChange={(e) => {
          const inputNumber = parseInt(e.target.value);
          if (!isNaN(inputNumber) && inputNumber >= 0) {
            setReps(inputNumber);
          } else {
            setErrorMessage("Please enter a positive number or zero.");
          }
        }} 
        value={reps} 
        className={emptyFields.includes('reps') ? 'error' : ''}
      />
      {errorMessage && <p className="error-message">{errorMessage}</p>} */}

      <button>Add Workout</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default WorkoutForm