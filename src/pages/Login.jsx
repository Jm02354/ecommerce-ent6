import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import './styles/login.css'

const Login = () => {
  
  const [token, setToken] = useState()

  useEffect(() => {
    setToken(localStorage.getItem('token'))
  }, [])

  const { handleSubmit, register, reset } = useForm()
    
  const submit = async data => {
    await useAuth('/users/login', data)
    reset({
      email: '',
      password: '',
    })
    setToken(localStorage.getItem('token'))
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    setToken()
  }

  return (
    <>
      {
        token ?
          <div className='logout-container'>
            <button className='logout-btn' onClick={handleLogout}>Logout</button>
          </div>
          :
          <div className='login-container'>
            <h2>Welcome! Enter your email and password to continue</h2>
            <div className="test-data">
              <h2>Test Data</h2>
              <p><span role="img" aria-label="email">📧</span> john@gmail.com</p>
              <p><span role="img" aria-label="password">🔒</span> john1234</p>
            </div>
            <form onSubmit={handleSubmit(submit)}>
              <div  className='input-group'>
                <label htmlFor="email">Email</label>
                <input {...register('email')} id='email' type="email" />
              </div>
              <div className='input-group'>
                <label htmlFor="password">Password</label>
                <input {...register('password')} id='password' type="password" />
              </div>
              <button className='btnlogin'>Login</button>
            </form>
            <p>Don´t have an account?<Link to={'/register'}><span> Sign up</span></Link> </p>
          </div>
      }
    </>
    
  )
}

export default Login
