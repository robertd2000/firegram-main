import React, { useState } from 'react'
import useProfile from '../hooks/useProfile'

export const ProfileMain = ({ user }) => {
  const { updateProfileData } = useProfile()
  const [isEditing, setIsEditing] = useState(false)
  const [name, setName] = useState(user.name)

  const onEditHandle = () => {
    setIsEditing(!isEditing)
  }

  const inputHandle = (e) => {
    setName(e.target.value)
  }

  const onEdit = () => {
    updateProfileData(name)
    setIsEditing(false)
  }

  return (
    <div className="main">
      <h2>Информация о профиле</h2>
      <div className="card">
        <div className="card-body">
          <i className="fa fa-pen fa-xs edit" onClick={onEditHandle}></i>
          <div>
            {isEditing ? (
              <div>
                <input value={name} onChange={inputHandle} className="input" />
                <button className="button" onClick={onEdit}>
                  Изменить
                </button>
              </div>
            ) : (
              <p>
                Имя: <span>{user.name}</span>
              </p>
            )}
          </div>
          <div>
            <p>
              Email: <span>{user.email}</span>
            </p>
          </div>
          <div>
            <p>
              Зарегистрирован:
              <span>{user.createdAt.toDate().toDateString()}</span>{' '}
            </p>
          </div>
        </div>
      </div>

      {/* <h2>SOCIAL MEDIA</h2>
            <div className="card">
              <div className="card-body">
                <i className="fa fa-pen fa-xs edit"></i>
                <div className="social-media">
                  <span className="fa-stack fa-sm">
                    <i className="fas fa-circle fa-stack-2x"></i>
                    <i className="fab fa-facebook fa-stack-1x fa-inverse"></i>
                  </span>
                  <span className="fa-stack fa-sm">
                    <i className="fas fa-circle fa-stack-2x"></i>
                    <i className="fab fa-twitter fa-stack-1x fa-inverse"></i>
                  </span>
                  <span className="fa-stack fa-sm">
                    <i className="fas fa-circle fa-stack-2x"></i>
                    <i className="fab fa-instagram fa-stack-1x fa-inverse"></i>
                  </span>
                  <span className="fa-stack fa-sm">
                    <i className="fas fa-circle fa-stack-2x"></i>
                    <i className="fab fa-invision fa-stack-1x fa-inverse"></i>
                  </span>
                  <span className="fa-stack fa-sm">
                    <i className="fas fa-circle fa-stack-2x"></i>
                    <i className="fab fa-github fa-stack-1x fa-inverse"></i>
                  </span>
                  <span className="fa-stack fa-sm">
                    <i className="fas fa-circle fa-stack-2x"></i>
                    <i className="fab fa-whatsapp fa-stack-1x fa-inverse"></i>
                  </span>
                  <span className="fa-stack fa-sm">
                    <i className="fas fa-circle fa-stack-2x"></i>
                    <i className="fab fa-snapchat fa-stack-1x fa-inverse"></i>
                  </span>
                </div>
              </div>
            </div> */}
    </div>
  )
}
