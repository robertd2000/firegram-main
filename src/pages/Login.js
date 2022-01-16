import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import s from './Registration.module.css'

export const Login = () => {
  const { signIn } = useAuth()

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
          <h1>Войти</h1>
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
              placeholder="пароль"
              name="password"
              value={password}
              onChange={handleChange}
            />
            <span className={s.forget}>Забыли пароль?</span>
            <span className={s.clearfix}></span>
            <button disabled={loading} className={s.btn}>
              {' '}
              {!loading ? 'Войти' : 'Вход...'}
            </button>
            <p>
              Нет аккаунта? - <Link to="/register">Регистрация</Link>
            </p>
          </form>
        </div>
        {error ? <p classNameName="error">{error}</p> : null}
      </div>
    </div>
  )
}
