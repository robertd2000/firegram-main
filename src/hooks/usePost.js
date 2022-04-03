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

export const usePost = (id, userId) => {
  const [docs, setDocs] = useState(null)
  const [loading, setLoading] = useState(true)

  const { data } = useProfile(auth?.currentUser?.uid)

  useEffect(() => {
    if (id && userId) {
      const docRef = doc(projectFirestore, 'images', userId, 'photo', id)
      const unsub = onSnapshot(docRef, (doc) => {
        setDocs(doc.data())
        setLoading(false)
      })

      return () => unsub()
    } else if (id) {
      const docRef = doc(projectFirestore, 'images', id)
      const unsub = onSnapshot(docRef, (doc) => {
        setDocs(doc.data())
        setLoading(false)
      })

      return () => unsub()
    }
  }, [id, userId])

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

  const addComment = async (postId, author, text) => {
    const q1 = query(
      collection(projectFirestore, 'images'),
      where('postId', '==', postId)
    )
    const querySnapshot1 = await getDocs(q1)
    querySnapshot1.forEach(async (d) => {
      const imgRef = doc(projectFirestore, 'images', d.id)
      try {
        if (d.data()) {
          await updateDoc(imgRef, {
            comments: [
              ...d.data().comments,
              {
                comment: text,
                author: data,
              },
            ],
          })
        }
      } catch (error) {
        console.log(error)
      }
    })

    //images update
    const q2 = query(
      collection(projectFirestore, 'images', author.uid, 'photo'),
      where('postId', '==', postId)
    )
    const querySnapshot = await getDocs(q2)
    querySnapshot.forEach(async (d) => {
      const imgRef = doc(projectFirestore, 'images', author.uid, 'photo', d.id)
      let comments = d.data().comments ? d.data().comments : []
      try {
        if (d.data()) {
          await updateDoc(imgRef, {
            comments: [
              ...comments,
              {
                comment: text,
                author: data,
              },
            ],
          })
        }
      } catch (error) {
        console.log(error)
      }
    })
  }

  const subscribe = async (author) => {
    const userRef = doc(projectFirestore, 'users', auth?.currentUser?.uid)
    const userData = await getDoc(userRef)

    if (!userData.data().subscribes.includes(author.uid)) {
      await updateDoc(userRef, {
        subscribes: [...userData.data().subscribes, author.uid],
      })
    }

    const authorRef = doc(projectFirestore, 'users', author.uid)
    const authorData = await getDoc(authorRef)

    if (!authorData.data().subscribers.includes(auth?.currentUser?.uid)) {
      await updateDoc(authorRef, {
        subscribers: [...authorData.data().subscribers, auth?.currentUser?.uid],
      })
    }
  }

  const unsubscribe = async (author) => {
    const userRef = doc(projectFirestore, 'users', auth?.currentUser?.uid)
    const userData = await getDoc(userRef)

    if (userData.data().subscribes.includes(author.uid)) {
      const subscribes = userData.data().subscribes.filter((i) => {
        return i !== author.uid
      })

      await updateDoc(userRef, {
        subscribes,
      })
    }

    const authorRef = doc(projectFirestore, 'users', author.uid)
    const authorData = await getDoc(authorRef)

    if (authorData.data().subscribers.includes(auth?.currentUser?.uid)) {
      const subscribers = authorData
        .data()
        .subscribers.filter((i) => i !== auth?.currentUser?.uid)
      await updateDoc(authorRef, {
        subscribers,
      })
    }
  }

  return { docs, loading, setLike, addComment, subscribe, unsubscribe }
}
