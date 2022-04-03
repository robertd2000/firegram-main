import React, { useState } from 'react'
import { motion } from 'framer-motion'
import s from './PostCard.module.css'
import { Username } from './Username'
import { Image } from './Image'
import { Status } from './Status'
import { Comment } from './Comment'
import { Footer } from './Footer'
import { Liked } from '../Liked'

export const Modal = ({
  selectedImage,
  author,
  currentUser,
  isAll,
  setSelectedImage = (r) => r,
  subscribe = (r) => r,
  unsubscribe = (r) => r,
  setLike = (r) => r,
  addComment = (r) => r,
}) => {
  const handleClick = (e) => {
    if (e.target.classList.contains('backdrop')) {
      setSelectedImage(null)
    }
  }
  const [selectedPost, setSelectedPost] = useState(null)

  const onLikePost = () => {
    setLike(selectedImage.postId, author.uid)
  }

  return (
    <motion.div
      className="backdrop"
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className={s.postcard}
        initial={{ y: '-100vh' }}
        animate={{ y: '10vh' }}
      >
        <Username
          author={author}
          currentUser={currentUser}
          subscribe={subscribe}
          unsubscribe={unsubscribe}
        />
        <Image img={selectedImage.url} />
        <Status
          setLike={onLikePost}
          selectedImage={selectedImage}
          author={author}
          setSelectedPost={setSelectedPost}
          isAll={isAll}
        />
        <Comment
          postId={selectedImage.postId}
          author={author}
          addComment={addComment}
        />
        <Footer author={author} />
      </motion.div>
      {selectedPost && (
        <Liked
          likedUsers={selectedImage.likedUsers}
          setSelectedPost={setSelectedPost}
        />
      )}
    </motion.div>
  )
}
