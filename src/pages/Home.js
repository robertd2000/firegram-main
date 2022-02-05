import React, { useState } from 'react'
import { ImageGrid } from '../comps/ImageGrid'
import { Modal } from '../comps/PostModal/Modal'
import useSubs from '../hooks/useSubs'
import { usePost } from '../hooks/usePost'
import { auth } from '../firebase/config'
import useProfile from '../hooks/useProfile'

export const Home = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const { docs } = useSubs('images')
  const { setLike } = usePost()
  let res = docs.filter((i) => i?.email === selectedImage?.email)[0]

  return (
    <>
      <ImageGrid setSelectedImage={setSelectedImage} docs={docs} />
      {selectedImage && (
        <Modal
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
          author={res}
          setLike={setLike}
        />
      )}
    </>
  )
}
