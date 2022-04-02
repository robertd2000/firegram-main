import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from 'firebase/firestore'
import { useState, useEffect } from 'react'
import { auth, projectFirestore } from '../firebase/config'
import useProfile from './useProfile'

const useFirestore = (col) => {
  const [docs, setDocs] = useState([])
  const { data } = useProfile(auth.currentUser.uid)

  useEffect(() => {
    if (data?.subscribes) {
      let projectCollection = collection(projectFirestore, col)

      if (data?.subscribes?.length === 0) {
        setDocs([])
        return
      }
      const q = query(
        projectCollection,
        orderBy('createdAt', 'desc'),
        where('uid', 'in', data.subscribes)
      )

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
    }
    // const userRef = doc(projectFirestore, 'users', auth.currentUser.uid)
    // const userData = await getDoc(userRef)
  }, [col, data])

  return { docs }
}

export default useFirestore
