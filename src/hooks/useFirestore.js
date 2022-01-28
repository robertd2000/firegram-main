import {
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  updateDoc,
  where,
} from 'firebase/firestore'
import { ref } from 'firebase/storage'
import { useState, useEffect } from 'react'
import { projectFirestore } from '../firebase/config'

const useFirestore = (col, id) => {
  const [docs, setDocs] = useState([])
  const [allDocs, setAllDocs] = useState([])

  useEffect(() => {
    let projectCollection
    if (id) {
      projectCollection = collection(projectFirestore, col, id, 'photo')
    } else {
      projectCollection = collection(projectFirestore, col)
    }

    const q = query(projectCollection, orderBy('createdAt', 'desc'))

    const unsub = onSnapshot(q, (doc) => {
      let documents = []
      doc.forEach((d) => {
        documents.push({
          ...d.data(),
          id: d.id,
        })
      })
      setDocs(documents)
    })
    return () => unsub()
  }, [col, id])

  const setLike = async (postId, uid) => {
    const q1 = query(
      collection(projectFirestore, 'images'),
      where('postId', '==', postId)
    )
    const querySnapshot1 = await getDocs(q1)
    querySnapshot1.forEach(async (d) => {
      const imgRef = doc(projectFirestore, 'images', d.id)

      await updateDoc(imgRef, {
        like: (d.data().like += 1) || 1,
      })
    })

    //images update
    const q2 = query(
      collection(projectFirestore, 'images', uid, 'photo'),
      where('postId', '==', postId)
    )
    const querySnapshot = await getDocs(q2)
    querySnapshot.forEach(async (d) => {
      const imgRef = doc(projectFirestore, 'images', uid, 'photo', d.id)

      await updateDoc(imgRef, {
        like: (d.data().like += 1) || 1,
      })
    })
  }

  return { docs, allDocs, setLike }
}

export default useFirestore
