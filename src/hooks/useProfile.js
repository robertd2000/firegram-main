import { doc, getDoc, onSnapshot, updateDoc } from 'firebase/firestore'
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from 'firebase/storage'
import { useEffect, useState } from 'react'
import { auth, projectFirestore, projectStorage } from '../firebase/config'

const useProfile = (id) => {
  const [data, setdata] = useState(null)

  useEffect(() => {
    if (auth.currentUser) {
      console.log(id)
      const userRef = doc(projectFirestore, 'users', id || auth.currentUser.uid)

      const unsub = onSnapshot(userRef, (doc) => {
        setdata({
          name: doc.data().name,
          email: doc.data().email,
          avatar: doc.data().avatar,
          avatarPath: doc.data().avatarPath,
          createdAt: doc.data().createdAt,
          uid: doc.data().uid,
        })
      })
      return () => unsub()
    }
  }, [id, auth.currentUser])

  const getProfileData = async () => {
    const userRef = doc(projectFirestore, 'users', id || auth.currentUser.uid)

    const docSnap = await getDoc(userRef)
    return docSnap
  }

  const uploadImg = async (img, user, setImg) => {
    const userRef = doc(projectFirestore, 'users', id || auth.currentUser.uid)

    const imgRef = ref(
      projectStorage,
      `avatar/${new Date().getTime()} - ${img.name}`
    )
    try {
      if (user.avatarPath) {
        await deleteObject(ref(projectStorage, user.avatarPath))
      }
      const snap = await uploadBytes(imgRef, img)
      const url = await getDownloadURL(ref(projectStorage, snap.ref.fullPath))

      await updateDoc(userRef, {
        avatar: url,
        avatarPath: snap.ref.fullPath,
      })
      setImg('')
    } catch (err) {
      console.log(err.message)
    }
  }

  const deleteAvatar = async (user) => {
    try {
      const userRef = doc(projectFirestore, 'users', id || auth.currentUser.uid)

      const confirm = window.confirm('Delete avatar?')
      if (confirm) {
        const avatarRef = ref(projectStorage, user.avatarPath)
        console.log(user.avatarPath)
        await deleteObject(avatarRef)

        await updateDoc(userRef, {
          avatar: '',
          avatarPath: '',
        })
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  const updateProfileData = async (name) => {
    const userRef = doc(projectFirestore, 'users', id || auth.currentUser.uid)

    try {
      await updateDoc(userRef, {
        name,
      })
    } catch (error) {
      console.log(error.message)
    }
  }

  return { getProfileData, uploadImg, deleteAvatar, updateProfileData, data }
}

export default useProfile
