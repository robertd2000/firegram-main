import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { ProfileMain } from '../comps/ProfileMain'
import { Sidenav } from '../comps/Sidenav'

import useProfile from '../hooks/useProfile'

export const Profile = () => {
  const [user, setuser] = useState(null)
  const [img, setImg] = useState('')

  const { uploadImg, deleteAvatar, data } = useProfile()

  useEffect(() => {
    setuser(data)

    if (img) {
      uploadImg(img, user, setImg)
    }
  }, [img, data])

  const onDeleteAvatar = () => {
    deleteAvatar(user)
  }

  return (
    <div>
      {user ? (
        <>
          <Sidenav user={user} setImg={setImg} deleteImage={onDeleteAvatar} />
          <ProfileMain user={user} />
        </>
      ) : (
        'No data'
      )}
    </div>
  )
}
