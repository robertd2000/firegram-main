import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Camera from '../comps/Camera'
import Delete from '../comps/Delete'

import useAuth from '../hooks/useAuth'
import useProfile from '../hooks/useProfile'

export const Profile = () => {
  const [user, setuser] = useState(null)
  const [img, setImg] = useState('')

  const { getProfileData, uploadImage } = useProfile()
  const history = useNavigate()
  useEffect(() => {
    const unsub = async () => {
      const docSnap = await getProfileData()
      if (docSnap.exists()) {
        setuser(docSnap.data())
        console.log(user)
      }
    }

    if (img && user) {
      // const uI = async () => {
      uploadImage(img, user)
      setImg('')
      // }
      // uI()
    }
    unsub()
  }, [img])

  console.log(user?.avatar)
  return (
    <div>
      {user ? (
        <>
          <div className="sidenav">
            <div className="profile">
              <div className="img_container ">
                <img
                  src={
                    user.avatar ||
                    'https://imdezcode.files.wordpress.com/2020/02/imdezcode-logo.png'
                  }
                  alt="avatar"
                />
                <div className="overlay">
                  <div>
                    <label htmlFor="photo">
                      <Camera />
                    </label>
                    {user.avatar ? <Delete /> : null}
                    <input
                      type="file"
                      id="photo"
                      accept="image/*"
                      style={{ display: 'none' }}
                      onChange={(e) => setImg(e.target.files[0])}
                    />
                  </div>
                </div>
              </div>
              {/* <img
                src="https://imdezcode.files.wordpress.com/2020/02/imdezcode-logo.png"
                alt=""
                width="100"
                height="100"
              /> */}

              <div className="name">{user.name}</div>
              <div className="job">{user.email}</div>
            </div>

            <div className="sidenav-url">
              <div className="url">
                <a href="#profile" className="active">
                  Profile
                </a>
                <hr align="center" />
              </div>
              <div className="url">
                <a href="#settings">Settings</a>
                <hr align="center" />
              </div>
            </div>
          </div>

          <div className="main">
            <h2>IDENTITY</h2>
            <div className="card">
              <div className="card-body">
                <i className="fa fa-pen fa-xs edit"></i>
                <table>
                  <tbody>
                    <tr>
                      <td>Name</td>
                      <td>:</td>
                      <td>{user.name}</td>
                    </tr>
                    <tr>
                      <td>Email</td>
                      <td>:</td>
                      <td>{user.email}</td>
                    </tr>
                    <tr>
                      <td>Created at</td>
                      <td>:</td>
                      <td>{user.createdAt.toDate().toDateString()}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <h2>SOCIAL MEDIA</h2>
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
            </div>
          </div>
        </>
      ) : (
        ''
      )}
    </div>
  )
}
