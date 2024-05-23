import { createContext, useReducer } from 'react'

export const WorkoutsContext = createContext()

// We are making the data sync with frontend using react context
// We do not need to refresh the page ,it will automatically sync with frontend 
// and database with real time

// state is previous state
// object has type property and payload
// action can be delete,edit,update

export const workoutsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_WORKOUTS':
      return { 
        workouts: action.payload       // array of all workouts
      }
    case 'CREATE_WORKOUT':
      return { 
        // single new workout  and state.workouts is the previous
        workouts: [action.payload, ...state.workouts] 
      }
    case 'DELETE_WORKOUT':
      return{
        // if after filtering it is present then true in workout array otherwise false
        // if id is != to action.payload id, keep those workout in the array 
        workouts: state.workouts.filter((w)=> w._id!==action.payload._id)
      }
    default:
      return state
  }
}

export const WorkoutsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(workoutsReducer, { 
    workouts: null
  })

// object is 
// { 
//     workouts: null
// }
  
//   dispatch function describes the state change
// payload property to load the data to make this change
// dispatch({type: 'SET_WORKOUTS', payload: [{},{}]})
// dispatch({type: 'CREATE_WORKOUTS'})


// ... is the spread operator
  return (
    <WorkoutsContext.Provider value={{ ...state, dispatch }}>
      { children }
    </WorkoutsContext.Provider>
  )
}