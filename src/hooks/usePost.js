import {
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  query,
  updateDoc,
  where,
} from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { auth, projectFirestore } from '../firebase/config'
import useProfile from './useProfile'

export const usePost = (id) => {
  const [docs, setDocs] = useState(null)
  const { data } = useProfile(auth.currentUser.uid)

  useEffect(() => {
    if (id) {
      const docRef = doc(projectFirestore, 'images', id)
      const unsub = onSnapshot(docRef, (doc) => {
        setDocs(doc.data())
      })

      return () => unsub()
    }
  }, [id])

  const setLike = async (postId, uid) => {
    const q1 = query(
      collection(projectFirestore, 'images'),
      where('postId', '==', postId)
    )
    const querySnapshot1 = await getDocs(q1)
    querySnapshot1.forEach(async (d) => {
      const imgRef = doc(projectFirestore, 'images', d.id)

      if (!d.data().likedUsers.find((i) => i.uid === data.uid)) {
        try {
          await updateDoc(imgRef, {
            like: (d.data().like += 1) || 1,
            likedUsers: [...d.data().likedUsers, data],
          })
        } catch (error) {
          console.log(error)
        }
      }
    })

    //images update
    const q2 = query(
      collection(projectFirestore, 'images', uid, 'photo'),
      where('postId', '==', postId)
    )
    const querySnapshot = await getDocs(q2)
    querySnapshot.forEach(async (d) => {
      const imgRef = doc(projectFirestore, 'images', uid, 'photo', d.id)

      if (!d.data().likedUsers.find((i) => i.uid === data.uid)) {
        try {
          await updateDoc(imgRef, {
            like: (d.data().like += 1) || 1,
            likedUsers: [...d.data().likedUsers, data],
          })
        } catch (error) {
          console.log(error)
        }
      }
    })

    //update profile info
    const profileRef = doc(projectFirestore, 'users', data.uid)
    const docSnap = await getDoc(profileRef)

    if (!docSnap.data().likedPosts.includes(postId))
      try {
        await updateDoc(profileRef, {
          likedPosts: docSnap.data().likedPosts
            ? [...docSnap.data().likedPosts, postId]
            : [postId],
        })
      } catch (error) {
        console.log(error)
      }
  }

  return { docs, setLike }
}
