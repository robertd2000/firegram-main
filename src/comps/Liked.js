import React from 'react'
import { motion } from 'framer-motion'
import s from './PostModal/Post.module.css'
import { Username } from './PostModal/Username'

export const Liked = ({ likedUsers, setSelectedPost }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains('backdrop')) {
      setSelectedPost(null)
    }
  }
  return (
    <motion.div
      className="backdrop"
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className={s.likedInner}
        initial={{ y: '-100vh' }}
        animate={{ y: '10vh' }}
      >
        <motion.div className={s.likedHeader}>
          <h1>Отметки "Нравится"</h1>{' '}
        </motion.div>
        <motion.div className={s.likedContent}>
          {likedUsers ? (
            <motion.div>
              {likedUsers.map((i) => {
                return (
                  <div className={s.likedItem} key={i.uid}>
                    <Username author={i} />
                  </div>
                )
              })}
            </motion.div>
          ) : null}
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
