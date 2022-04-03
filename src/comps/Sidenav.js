import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../firebase/config'
import { ImageContainer } from './ImageContainer'

export const Sidenav = ({
  user,
  id,
  active,
  setImg = (r) => r,
  deleteImage = (r) => r,
}) => {
  return (
    <div className="sidenav">
      <div className="profile">
        {setImg && deleteImage ? (
          <ImageContainer
            avatar={user.avatar}
            setImg={setImg}
            deleteImage={deleteImage}
          />
        ) : (
          <ImageContainer avatar={user.avatar} />
        )}

        <div className="name">{user.name}</div>
        <div className="job">{user.email}</div>
      </div>

      <div className="sidenav-url">
        <div className="url">
          <Link
            to={`/profile/${id}`}
            className={active === 'profile' ? 'active' : ''}
          >
            Профиль
          </Link>
          <hr align="center" />
        </div>
        {auth?.currentUser?.uid === id && (
          <div className="url">
            <Link
              to="/settings"
              className={active === 'settings' ? 'active' : ''}
            >
              Настройки
            </Link>
            <hr align="center" />
          </div>
        )}
      </div>
    </div>
  )
}
