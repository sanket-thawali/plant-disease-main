import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import { useNavigate } from 'react-router-dom';

export const useSignup = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useAuthContext()
  const navigate = useNavigate();
  const signup = async (email, password, role) => {
    setIsLoading(true)
    setError(null)

    const response = await fetch(`http://127.0.0.1:4000/api/user/${role}/signup`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ email, password ,role})
    })
    const json = await response.json()

    if (!response.ok) {
      setIsLoading(false)
      setError(json.error)
    }
    if (response.ok) {
      // save the user to local storage
      localStorage.setItem('user', JSON.stringify(json))

      // update the auth context
      dispatch({type: 'LOGIN', payload: json})

      // Redirect to the authentication page
      navigate('/authenticate'); // Add this line for redirection

      // update loading state
      setIsLoading(false)
    }
  }

  return { signup, isLoading, error }
}
