import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import { doc, getDoc, setDoc, Timestamp, updateDoc } from 'firebase/firestore'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth, projectFirestore } from '../firebase/config'

const useAuth = () => {
  const [user, setuser] = useState(null)
  const [image, setImage] = useState('')

  const history = useNavigate()

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        setuser(authUser)
      } else {
        setuser(false)
      }
    })
    return () => unsub()
  }, [])

  const signup = async (name, email, password) => {
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password)
      await setDoc(doc(projectFirestore, 'users', result.user.uid), {
        uid: result.user.uid,
        name,
        email,
        createdAt: Timestamp.fromDate(new Date()),
      })
      setuser(result.user)
      history('/')
    } catch (error) {
      setuser(false)
    }
  }

  const signIn = async (email, password) => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password)

      setuser(result.user)
      history('/')
    } catch (error) {
      setuser(false)
    }
  }

  const signout = async () => {
    await signOut(auth)
    history('/login')
  }

  return { user, signup, signout, signIn }
}

export default useAuth
