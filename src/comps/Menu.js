import React from 'react'
import { Link } from 'react-router-dom'

export const Menu = ({
  user,
  image,
  name,
  signout,
  classname = '',
  open = false,
  handleLinkClick = (r) => r,
}) => {
  let className = classname

  if (open) {
    className += ' open'
  } else {
    className += ' close'
  }
  return (
    <ul id="menu" className={className}>
      {user ? (
        <>
          <li>
            <span
              className="btn"
              onClick={() => {
                signout()
                handleLinkClick()
              }}
            >
              Выйти
            </span>
          </li>

          <li>
            <Link to={`/profile/${user.uid}`} onClick={handleLinkClick}>
              {name ? name : 'Profile'}
            </Link>
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
            <Link to="/login" onClick={handleLinkClick}>
              Войти
            </Link>
          </li>
          <li>
            <Link to="/register" onClick={handleLinkClick}>
              Зарегистрироваться
            </Link>
          </li>
        </>
      )}
      <li>
        <Link to="/images" onClick={handleLinkClick}>
          Все картинки
        </Link>
      </li>
    </ul>
  )
}
