import React from 'react'
import { useState } from 'react'
import useAuth from '../hooks/useAuth'
import s from './Registration.module.css'

export const Register = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    error: null,
    loading: false,
  })

  const { user, signup } = useAuth()

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
      loading: true,
    })
    signup(name, email, password)
    setData({
      name: '',
      email: '',
      password: '',
      error: null,
      loading: false,
    })
  }

  const { name, email, password, error, loading } = data

  return (
    <div className={s.container}>
      <div className={s.register}>
        <div className={s.content}>
          <h1>Sign Up</h1>

          <form onSubmit={submitHandle} className={s.form}>
            <input
              type="text"
              placeholder="name"
              name="name"
              value={name}
              onChange={handleChange}
            />
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
            <span className={s.clearfix}></span>
            <button className={s.btn} disabled={loading}>
              {!loading ? 'Register' : 'Creating'}
            </button>
          </form>
        </div>
        {error ? <p classNameName="error">{error}</p> : null}
      </div>
    </div>
  )
}
