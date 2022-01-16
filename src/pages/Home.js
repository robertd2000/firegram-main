import React, { useState } from 'react'
import { ImageGrid } from '../comps/ImageGrid'
import { Modal } from '../comps/Model'
import Title from '../comps/Title'
import { UploadForm } from '../comps/UploadForm'
import { auth } from '../firebase/config'
import useFirestore from '../hooks/useFirestore'
import useProfile from '../hooks/useProfile'

export const Home = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const { docs } = useFirestore('images', auth.currentUser.uid)
  const { data } = useProfile()

  return (
    <>
      <Title />
      <UploadForm />
      <ImageGrid
        setSelectedImage={setSelectedImage}
        id={auth.currentUser.uid}
        docs={docs}
      />
      {selectedImage && (
        <Modal
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
          author={data}
        />
      )}
    </>
  )
}
