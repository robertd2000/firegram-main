import React, { useState } from 'react'
import { ImageGrid } from '../comps/ImageGrid'
import { Loading } from '../comps/Loading'
import { Modal } from '../comps/PostModal/Modal'
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
      <ImageGrid
        setSelectedImage={setSelectedImage}
        docs={docs}
        loading={loading}
      />
      {selectedImage && (
        <Modal
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
          author={author}
          setLike={setLike}
          addComment={addComment}
          currentUser={data}
          isAll={true}
          subscribe={subscribe}
          unsubscribe={unsubscribe}
        />
      )}
    </>
  )
}
