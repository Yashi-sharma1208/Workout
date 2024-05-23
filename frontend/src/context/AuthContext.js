import { createContext, useReducer, useEffect } from 'react'

export const AuthContext = createContext()

// state is the previous state

export const authReducer = (state, action) => {
  switch (action.type) 
  {
    case 'LOGIN':
      return { user: action.payload }
    case 'LOGOUT':
      return { user: null }
    default:
      return state
  }
}

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, { 
    user: null
  })
  // this effect is for when the site reloads , the Authcontext is updated to the user who has just logged in
  // means after reloading it will not updated to null
  // Running this function just once
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))
    
    // if it is not null then it will dispatch a login action
    if (user) 
    {
      dispatch({ type: 'LOGIN', payload: user }) 
    }
  }, [])

  console.log('AuthContext state:', state)
  
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      { children }
    </AuthContext.Provider>
  )

}