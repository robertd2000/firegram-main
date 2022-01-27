import React from 'react'
import { motion } from 'framer-motion'
import s from './PostCard.module.css'
import { Username } from './Username'
import { Image } from './Image'
import { Status } from './Status'
import { Comment } from './Comment'

export const Modal = ({ selectedImage, setSelectedImage, author, setLike }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains('backdrop')) {
      setSelectedImage(null)
    }
  }
  console.log(author)
  const onLikePost = () => {
    setLike(selectedImage.id, author.uid)
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
        <Status setLike={onLikePost} selectedImage={selectedImage} />
        <Comment />
      </motion.div>
    </motion.div>
  )
}
