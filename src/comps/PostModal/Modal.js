import React, { useState } from 'react'
import { motion } from 'framer-motion'
import s from './PostCard.module.css'
import { Username } from './Username'
import { Image } from './Image'
import { Status } from './Status'
import { Comment } from './Comment'
import { Footer } from './Footer'
import { Liked } from '../Liked'

export const Modal = ({ selectedImage, setSelectedImage, author, setLike }) => {
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
        <Username author={author} />
        <Image img={selectedImage.url} />
        <Status
          setLike={onLikePost}
          selectedImage={selectedImage}
          author={author}
          setSelectedPost={setSelectedPost}
        />
        <Comment />
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
