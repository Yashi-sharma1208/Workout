// import { useState } from 'react'
// import { useAuthContext } from './useAuthContext'

// export const useSignup = () => {
//   const [error, setError] = useState(null)
//   const [isLoading, setIsLoading] = useState(null)
//   const { dispatch } = useAuthContext()

//   const signup = async (email, password) => {
//     setIsLoading(true)
//     // reset to error to null for every signup 
//     setError(null)

//     const response = await fetch('/api/user/signup', {
//       method: 'POST',
//       headers: {'Content-Type': 'application/json'},
//       body: JSON.stringify({ email, password })
//     })

//     const json = await response.json()
//     // json stores the information about json web token and email if it is ok
//     // else an error message

//     if (!response.ok) {
//       setIsLoading(false)
//       setError(json.error)
//     }
//     if (response.ok) {
//       // save the user to local storage
//       // if the closes the browser and open it again, they still have json web token
//       localStorage.setItem('user', JSON.stringify(json))

//       // update the auth context
//       dispatch({type: 'LOGIN', payload: json})

//       // update loading state
//       setIsLoading(false)
//     }
//   }

//   return { signup, isLoading, error }
// }






import { useState } from 'react';
import { useAuthContext } from './useAuthContext';

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = async (username, email, password) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch('/api/user/signup', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ username, email, password })
    });

    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    } else {
      localStorage.setItem('user', JSON.stringify(json));
      dispatch({ type: 'LOGIN', payload: json });
      setIsLoading(false);
    }
  };

  return { signup, isLoading, error };
};



