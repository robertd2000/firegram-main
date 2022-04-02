import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import { doc, setDoc, Timestamp } from 'firebase/firestore'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth, projectFirestore } from '../firebase/config'

const useAuth = () => {
  const [user, setuser] = useState(null)
  const [error, setError] = useState(null)

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
      setError(false)
      history('/')
    } catch (error) {
      setuser(false)
      setError(error.message)
    }
  }

  const signIn = async (email, password) => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password)

      setuser(result.user)
      setError(false)
      history('/')
    } catch (error) {
      setuser(false)
      setError(error.message)
    }
  }

  const signout = async () => {
    await signOut(auth)
    history('/login')
  }

  return { user, error, signup, signout, signIn }
}

export default useAuth
