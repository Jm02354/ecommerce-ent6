import React from 'react'
import { useForm } from 'react-hook-form'
import useAuth from '../hooks/useAuth'
import './styles/register.css'
import { Link } from 'react-router-dom'

const Register = () => { 

  const { handleSubmit, register, reset } = useForm()
  
  const submit = data => {
    useAuth('/users', data)
    reset({
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      phone: "",
    })
  }

  return (
    <div className='register container'>
      
      <form className='formreg' onSubmit={handleSubmit(submit)}>
        <h2>Sign Up</h2>
        <div className='input-group2'>
          <label htmlFor="firstName">First Name</label>
          <input {...register('firstName')} id='firstName' type="text" />
        </div>
        <div className='input-group2'>
          <label htmlFor="lastName">Last Name</label>
          <input {...register('lastName')} id='lastName' type="text" />
        </div>
        <div className='input-group2'>
          <label htmlFor="email">Email</label>
          <input {...register('email')} id='email' type="email" />
        </div>
        <div className='input-group2'>
          <label htmlFor="password">Password</label>
          <input {...register('password')} id='password' type="password" />
        </div>
        <div className='input-group2'>
          <label htmlFor="phone">Phone</label>
          <input {...register('phone')} id='phone' type="number" />
        </div>
        <button className='btnsign'>Sign up</button>
        <p>Already have an account?<Link to={'/login'}><span> Log in</span></Link></p>
      </form>
    </div>
  )
}

export default Register
