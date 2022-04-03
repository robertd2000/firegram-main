import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { useState, useEffect } from 'react'
import { projectFirestore } from '../firebase/config'

const useFirestore = (col, id) => {
  const [docs, setDocs] = useState([])
  const [loading, setLoading] = useState(true)

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
      setLoading(false)
    })
    return () => unsub()
  }, [col, id])

  return { docs, loading }
}

export default useFirestore
