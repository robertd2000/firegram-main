import React, { useEffect } from 'react'
import { useState } from 'react'
import { AuthButton } from '../comps/AuthButton'
import useAuth from '../hooks/useAuth'
import { formatErrorMessage } from '../utils'
import s from './Registration.module.css'

export const Register = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    error: null,
    loading: false,
  })

  const { signup, error: authError } = useAuth()

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

  useEffect(() => {
    if (authError) {
      setData({
        ...data,
        error: formatErrorMessage(authError),
        loading: false,
      })
    }
  }, [authError, data])

  const { name, email, password, error, loading } = data

  return (
    <div className={s.container}>
      <div className={s.register}>
        <div className={s.content}>
          <h1>Регистрация</h1>

          <form onSubmit={submitHandle} className={s.form}>
            <input
              type="text"
              placeholder="Имя"
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
              placeholder="Пароль"
              name="password"
              value={password}
              onChange={handleChange}
            />
            <span className={s.clearfix}></span>
            <AuthButton className={s.btn} disabled={loading}>
              {!loading ? 'Зарегистрироваться' : 'Регистрация...'}
            </AuthButton>
          </form>
        </div>
        {error ? <p className="error">{error}</p> : null}
      </div>
    </div>
  )
}
