import { addDoc, collection } from 'firebase/firestore'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { useState, useEffect } from 'react'
import {
  projectStorage,
  projectFirestore,
  timestamp,
  auth,
} from '../firebase/config'
import useProfile from './useProfile'

const useStorage = (file, postId) => {
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState(null)
  const [url, setUrl] = useState(null)
  const { data } = useProfile(auth.currentUser.uid)

  useEffect(() => {
    const storageRef = ref(projectStorage, file.name)
    const collectionRef = collection(
      projectFirestore,
      'images',
      auth.currentUser.uid,
      'photo'
    )

    const uploadTask = uploadBytesResumable(storageRef, file)
    uploadTask.on(
      'state_changed',
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100
        setProgress(percentage)
      },
      (err) => setError(err),
      async () => {
        const url = await getDownloadURL(uploadTask.snapshot.ref)
        // const url = getDownloadURL(storageRef)
        const createdAt = timestamp()
        if (data) {
          await addDoc(collectionRef, {
            url,
            createdAt,
            avatar: data?.avatar || '',
            name: data?.name || '',
            email: data?.email || '',
            uid: auth.currentUser.uid,
            like: 0,
            postId,
            likedUsers: [],
          })

          setUrl(url)
        }
      }
    )
    const allImgRef = collection(projectFirestore, 'images')

    return async () => {
      if (data) {
        const createdAt = timestamp()
        const url = await getDownloadURL(uploadTask.snapshot.ref)
        await addDoc(allImgRef, {
          url,
          createdAt,
          avatar: data?.avatar || '',
          name: data?.name || '',
          email: data?.email || '',
          uid: auth.currentUser.uid,
          like: 0,
          postId,
          likedUsers: [],
          comments: [],
        })
      }
    }
  }, [file, data, postId])

  return { progress, url, error }
}

export default useStorage
