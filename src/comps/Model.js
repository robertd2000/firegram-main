import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export const Modal = ({ selectedImage, setSelectedImage, author }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains('backdrop')) {
      setSelectedImage(null)
    }
  }
  console.log(author)
  return (
    <motion.div
      className="backdrop"
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div>
        <motion.img
          className="backdrop_img"
          src={selectedImage.url}
          alt="enlarge pic"
          initial={{ y: '-100vh' }}
          animate={{ y: 0 }}
        />
        <motion.div className="author">
          <motion.div className="nav_avatar ">
            <motion.img
              src={
                author.avatar ||
                'https://imdezcode.files.wordpress.com/2020/02/imdezcode-logo.png'
              }
              alt="avatar"
            />
          </motion.div>
          Автор: <Link to={`/profile/${author.uid}`}> {author.name}</Link>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
