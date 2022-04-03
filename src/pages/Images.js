import React, { useState } from 'react'
import { ImageContent } from '../comps/ImageContent'
import { Loading } from '../comps/Loading'
import { auth } from '../firebase/config'
import useFirestore from '../hooks/useFirestore'
import { usePost } from '../hooks/usePost'
import useProfile from '../hooks/useProfile'

export const Images = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  const { docs, loading } = useFirestore('images')
  const { setLike, addComment, subscribe, unsubscribe } = usePost()
  const { data } = useProfile(auth?.currentUser?.uid)
  let author = docs.filter((i) => i?.email === selectedImage?.email)[0]

  if (loading) {
    return <Loading />
  }

  return (
    <>
      <ImageContent
        docs={docs}
        loading={loading}
        selectedImage={selectedImage}
        author={author}
        currentUser={data}
        isAll={true}
        subscribe={subscribe}
        unsubscribe={unsubscribe}
        setSelectedImage={setSelectedImage}
        setLike={setLike}
        addComment={addComment}
      />
    </>
  )
}
