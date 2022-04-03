import React from 'react'
import { Link } from 'react-router-dom'

export const Menu = ({
  user,
  image,
  name,
  classname = '',
  open = false,
  signout = (r) => r,
  handleLinkClick = (r) => r,
}) => {
  let className = classname

  if (open) {
    className += ' open'
  } else {
    className += ' close'
  }
  return (
    <div id="menu" className={className}>
      <ul>
        {user ? (
          <>
            <li>
              <Link to="/images" onClick={handleLinkClick}>
                Все картинки
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

            <li>
              <Link to={`/profile/${user.uid}`} onClick={handleLinkClick}>
                {name ? name : 'Profile'}
              </Link>
            </li>

            <li>
              <Link
                to="/login"
                className="btn"
                onClick={() => {
                  signout()
                  handleLinkClick()
                }}
              >
                Выйти
              </Link>
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
      </ul>
    </div>
  )
}
