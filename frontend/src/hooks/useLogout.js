import { useAuthContext } from './useAuthContext'
import { useWorkoutsContext } from './useWorkoutsContext'

export const useLogout = () => {
  const { dispatch } = useAuthContext()
  const { dispatch: dispatchWorkouts } = useWorkoutsContext()

    // we don't need to send the request to the backend
    // we need to do 2 steps
    // remove json web token user from storage
    // changing the react global variable by dispatching the logout action
  
    const logout = () => {

    // remove json web token user from storage

    localStorage.removeItem('user')

    // changing the react global variable by dispatching the logout action
    
    dispatch({ type: 'LOGOUT' })
    dispatchWorkouts({ type: 'SET_WORKOUTS', payload: null })
   }

  return { logout }
}