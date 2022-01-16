import React from 'react'
import { ImageContainer } from './ImageContainer'

export const Sidenav = ({ user, setImg, deleteImage }) => {
  return (
    <div className="sidenav">
      <div className="profile">
        <ImageContainer
          avatar={user.avatar}
          setImg={setImg}
          deleteImage={deleteImage}
        />

        <div className="name">{user.name}</div>
        <div className="job">{user.email}</div>
      </div>

      <div className="sidenav-url">
        <div className="url">
          <a href="#profile" className="active">
            Профиль
          </a>
          <hr align="center" />
        </div>
        {/* <div className="url">
                <a href="#settings">Settings</a>
                <hr align="center" />
              </div> */}
      </div>
    </div>
  )
}
