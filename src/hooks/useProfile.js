import { doc, getDoc, updateDoc } from 'firebase/firestore'
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from 'firebase/storage'
import { auth, projectFirestore, projectStorage } from '../firebase/config'

const useProfile = () => {
  const getProfileData = async () => {
    const userRef = doc(projectFirestore, 'users', auth.currentUser.uid)
    const docSnap = await getDoc(userRef)
    return docSnap
  }

  const uploadImage = async (img, user) => {
    const imageRef = ref(
      projectStorage,
      `avatar/${new Date().getTime()} - ${img.name}`
    )
    try {
      if (user.avatarPath) {
        await deleteObject(ref(projectStorage, user.avatarPath))
      }
      const snap = await uploadBytes(imageRef, img)
      const url = await getDownloadURL(ref(projectStorage, snap.ref.fullPath))
      await updateDoc(doc(projectFirestore, 'users', auth.currentUser.uid), {
        avatar: url,
        avatarPath: snap.ref.fullPath,
      })
    } catch (error) {
      console.log(error)
    }
  }
  return { getProfileData, uploadImage }
}

export default useProfile
