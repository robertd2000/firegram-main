import React, { useState } from 'react'
import { ImageGrid } from '../comps/ImageGrid'
import { Modal } from '../comps/PostModal/Modal'
import useFirestore from '../hooks/useFirestore'

export const Images = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const { docs, allDocs, setLike } = useFirestore('images')
  let data = docs.filter((i) => i?.email === selectedImage?.email)[0]
  console.log(allDocs)
  return (
    <>
      <ImageGrid setSelectedImage={setSelectedImage} docs={docs} />
      {selectedImage && (
        <Modal
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
          author={data}
          setLike={setLike}
        />
      )}
    </>
  )
}
