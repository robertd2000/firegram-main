import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import useProfile from '../hooks/useProfile'

export const Navbar = () => {
  const { user, signout } = useAuth()
  const { data } = useProfile()
  const [name, setName] = useState('')
  const [image, setImage] = useState('')

  useEffect(() => {
    setName(data?.name)
    setImage(data?.avatar)
  })

  return (
    <nav id="navbar">
      <div className="nav-wrapper">
        <div className="logo">
          <Link to="/">
            <div className="title">
              <h1>FireGram</h1>
            </div>
          </Link>
        </div>

        <ul id="menu">
          {user ? (
            <>
              <li>
                <a className="btn" onClick={signout}>
                  Выйти
                </a>
              </li>

              <li>
                <Link to="/profile">{name ? name : 'Profile'}</Link>
              </li>

              <li>
                <div className="nav_avatar ">
                  <img
                    src={
                      image ||
                      'https://imdezcode.files.wordpress.com/2020/02/imdezcode-logo.png'
                    }
                    alt="avatar"
                  />
                </div>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login">Войти</Link>
              </li>
              <li>
                <Link to="/register">Зарегистрироваться</Link>
              </li>
            </>
          )}
          <li>
            <Link to="/images">Все картинки</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
