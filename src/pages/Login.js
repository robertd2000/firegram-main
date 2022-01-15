import { signInAnonymously } from 'firebase/auth'
import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import s from './Registration.module.css'

export const Login = () => {
  const { user, signIn } = useAuth()

  const [data, setData] = useState({
    email: '',
    password: '',
    error: null,
    loading: false,
  })

  const { email, password, error, loading } = data

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    })
  }
  const submitHandle = (e) => {
    e.preventDefault()
    setData({
      ...data,
      error: null,
      loading: true,
    })
    if (!email || !password) {
      setData({
        ...data,
        error: 'All fields are required!',
      })
    }
    signIn(email, password)
  }

  return (
    <div className={s.container}>
      <div className={s.login}>
        <div className={s.content}>
          <h1>Log In</h1>
          <form className={s.form} onSubmit={submitHandle}>
            <input
              type="email"
              placeholder="email"
              name="email"
              value={email}
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="password"
              name="password"
              value={password}
              onChange={handleChange}
            />
            <span className={s.forget}>Forgot password?</span>
            <span className={s.clearfix}></span>
            <button className={s.btn}>Log In</button>
            <p>
              No account? - <Link to="/register">Sign Up</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}
