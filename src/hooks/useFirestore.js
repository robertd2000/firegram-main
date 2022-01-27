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
  const [users, setUsers] = useState([])

  useEffect(async () => {
    let projectCollection
    if (id) {
      projectCollection = collection(projectFirestore, col, id, 'photo')
    } else {
      projectCollection = collection(projectFirestore, col)
    }

    // const usersCollection = await getDocs(collection(projectFirestore, 'users'))
    // usersCollection.forEach((doc) => {
    //   console.log(doc.data().uid)
    //   setUsers(doc.data().uid)

    //   const usersPostCollection = collection(
    //     projectFirestore,
    //     col,
    //     doc.data().uid,
    //     'photo'
    //   )
    //   let documents2 = []

    //   const q3 = query(usersPostCollection, orderBy('createdAt', 'desc'))
    //   const unsub3 = onSnapshot(q3, (doc2) => {
    //     doc2.forEach((d) => {
    //       console.log(d.data())
    //       documents2.push({
    //         ...d.data(),
    //         id: d.id,
    //       })
    //     })
    //     console.log(documents2)
    //   })
    //   if (documents2) setAllDocs(documents2)

    //   console.log(documents2)
    // })

    // let usersCollection = collection(projectFirestore, 'users')
    // const q2 = query(usersCollection)

    // const unsub2 = onSnapshot(q2, (doc) => {
    //   doc.forEach((d) => {
    //     setUsers(d.data().uid)
    //     let documents2 = []

    //     const projectCollection = collection(
    //       projectFirestore,
    //       col,
    //       d.data().uid,
    //       'photo'
    //     )

    //     const q3 = query(projectCollection, orderBy('createdAt', 'desc'))
    //     const unsub3 = onSnapshot(q3, (doc2) => {
    //       let dl = []
    //       doc2.forEach((d) => {
    //         if (d.data()) {
    //           documents2.push({
    //             ...d.data(),
    //             id: d.id,
    //           })
    //           // console.log(documents2)
    //         }
    //       })
    //       console.log(documents2)
    //       documents2.push(dl)
    //     })
    //     if (documents2) {
    //       setAllDocs(documents2)
    //     }

    //     return () => unsub3()
    //   })
    // })

    // console.log(allDocs)

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

    return () => {
      unsub()
      // unsub2()
    }
  }, [col, id])

  const setLike = async (postId, uid) => {
    console.log(postId)
    const imgRef = doc(projectFirestore, 'images', postId)
    const docSnap = await getDoc(imgRef)
    if (docSnap.data()) {
      console.log(docSnap.data().like)

      await updateDoc(imgRef, {
        like: (docSnap.data().like += 1) || 1,
      })
    }
    console.log(uid, postId)

    const querySnapshot = await getDocs(
      collection(projectFirestore, 'images', uid, 'photo')
    )
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, ' => ', doc.data())
    })
    // const q = query(
    //   imgRef
    //   // , where('id', '==', postId)
    // )
    // const querySnapshot = await getDocs(q)
    // querySnapshot.forEach((doc) => {
    //   // doc.data() is never undefined for query doc snapshots
    //   console.log(doc.id, ' => ', doc.data())
    //   if (postId == doc.id) {
    //     updateDoc()
    //   }
    // })
  }

  return { docs, allDocs, setLike }
}

export default useFirestore
