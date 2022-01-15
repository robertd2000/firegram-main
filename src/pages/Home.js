import React, { useState } from 'react'
import { ImageGrid } from '../comps/ImageGrid'
import { Modal } from '../comps/Model'
import Title from '../comps/Title'
import { UploadForm } from '../comps/UploadForm'

export const Home = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <>
      <Title />
      <UploadForm />
      <ImageGrid setSelectedImage={setSelectedImage} />
      {selectedImage && (
        <Modal
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
      )}
    </>
  )
}
