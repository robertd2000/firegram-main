import React from 'react'
import { ImageGrid } from './ImageGrid'
import { Modal } from './PostModal/Modal'

export const ImageContent = ({
  docs,
  loading,
  selectedImage,
  author,
  data,
  isAll = false,
  setSelectedImage = (r) => r,
  setLike = (r) => r,
  addComment = (r) => r,
  subscribe = (r) => r,
  unsubscribe = (r) => r,
}) => {
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
          isAll={isAll}
          subscribe={subscribe}
          unsubscribe={unsubscribe}
        />
      )}
    </>
  )
}
