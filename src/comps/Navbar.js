import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../firebase/config'
import useAuth from '../hooks/useAuth'
import useProfile from '../hooks/useProfile'
import { BurgerMenu } from './BurgerMenu'
import { Menu } from './Menu'

export const Navbar = () => {
  const { user, signout } = useAuth(auth?.currentUser?.uid)
  const { data } = useProfile(auth?.currentUser?.uid)
  const [name, setName] = useState('')
  const [windowInnerWidth, setWindowInnerWidth] = useState(window.innerWidth)
  const [image, setImage] = useState('')

  useEffect(() => {
    setName(data?.name)
    setImage(data?.avatar)
  }, [data])

  useEffect(() => {
    window.onresize = () => {
      setWindowInnerWidth(window.innerWidth)
    }
  }, [])

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
        {windowInnerWidth > 768 ? (
          <Menu user={user} name={name} image={image} signout={signout} />
        ) : (
          <BurgerMenu user={user} name={name} image={image} signout={signout} />
        )}
      </div>
    </nav>
  )
}
