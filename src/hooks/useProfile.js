import { doc, getDoc, onSnapshot, updateDoc } from 'firebase/firestore'
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from 'firebase/storage'
import { useEffect, useState } from 'react'
import { auth, projectFirestore, projectStorage } from '../firebase/config'

const useProfile = () => {
  const [data, setdata] = useState(null)
  useEffect(() => {
    if (auth.currentUser) {
      console.log(auth.currentUser)
      const unsub = onSnapshot(
        doc(projectFirestore, 'users', auth.currentUser.uid),
        (doc) => {
          setdata({
            name: doc.data().name,
            avatar: doc.data().avatar,
          })
        }
      )
      return () => unsub()
    }
  }, [])

  const getProfileData = async () => {
    const userRef = doc(projectFirestore, 'users', auth.currentUser.uid)
    const docSnap = await getDoc(userRef)
    return docSnap
  }

  const uploadImg = async (img, user, setImg) => {
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
      await updateDoc(doc(projectFirestore, 'users', auth.currentUser.uid), {
        avatar: url,
        avatarPath: snap.ref.fullPath,
      })
      setImg('')
    } catch (err) {
      console.log(err.message)
    }
  }

  return { getProfileData, uploadImg, data }
}

export default useProfile
