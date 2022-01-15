import React from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

export const Navbar = () => {
  const { user, signout } = useAuth()

  return (
    <nav>
      <h3>
        <Link to="/">
          <div className="title">
            <h1>FireGram</h1>
          </div>
        </Link>
      </h3>
      <div>
        {user ? (
          <>
            <Link to="/profile">Profile</Link>
            <button className="btn" onClick={signout}>
              Log Out
            </button>
          </>
        ) : (
          <>
            <Link to="/register">Sign Up</Link>
            <Link to="/login">Login</Link>
          </>
        )}
      </div>
    </nav>
  )
}
