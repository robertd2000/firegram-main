import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { useState, useEffect } from 'react'
import { projectFirestore } from '../firebase/config'

const useFirestore = (col) => {
  const [docs, setDocs] = useState([])

  useEffect(() => {
    const projectCollection = collection(projectFirestore, col)

    const q = query(projectCollection, orderBy('createdAt', 'desc'))

    const unsub = onSnapshot(q, (doc) => {
      let documents = []
      doc.forEach((d) => {
        documents.push({ ...d.data(), id: d.id })
      })
      setDocs(documents)
    })

    return () => unsub()
  }, [col])

  return { docs }
}

export default useFirestore
