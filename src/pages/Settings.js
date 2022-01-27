import React, { useEffect, useState } from 'react'
import { Sidenav } from '../comps/Sidenav'
import useProfile from '../hooks/useProfile'
import { ProfileMain } from '../comps/ProfileMain'
import { auth } from '../firebase/config'

export const Settings = () => {
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
          <Sidenav
            user={user}
            setImg={setImg}
            deleteImage={onDeleteAvatar}
            active={'settings'}
            id={auth.currentUser.uid}
          />
          <ProfileMain user={user} />
        </>
      ) : (
        'No data'
      )}
    </div>
  )
}
