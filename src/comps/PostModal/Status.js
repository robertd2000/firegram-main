import React, { useState } from 'react'
import { motion } from 'framer-motion'
import s from './PostCard.module.css'
import { Link } from 'react-router-dom'

export const Status = ({
  author,
  setLike,
  selectedImage,
  setSelectedPost,
  postId,
  isAll,
}) => {
  const [like, setlike] = useState(selectedImage.like)

  const onSetLike = () => {
    setLike(postId, author.uid)
    setlike(selectedImage.like + 1)
  }

  const onSelect = (e) => {
    setSelectedPost(selectedImage)
  }

  return (
    <motion.div className={s.status}>
      <motion.div className={s.like}>
        <motion.div className={s.likeItem}>
          <motion.span className={s.likeSymbol} onClick={onSetLike}>
            &#9825;
          </motion.span>
          {/* <motion.img
            src="https://cdn4.iconfinder.com/data/icons/app-custom-ui-1/48/Heart-128.png"
            onClick={onSetLike}
          ></motion.img> */}
        </motion.div>

        <motion.div className={s.likeItem}>
          <Link
            to={
              !isAll
                ? `/post/${author.uid}/${selectedImage.id}`
                : `/post/${selectedImage.id}`
            }
          >
            <motion.span className={s.commentSymbol}> 💬</motion.span>
          </Link>

          {/* <motion.img src="https://cdn4.iconfinder.com/data/icons/app-custom-ui-1/48/Chat_bubble-128.png"></motion.img> */}
        </motion.div>
      </motion.div>
      <motion.div className={s.statustem}>
        <motion.span onClick={onSelect}>
          Нравится: {like ? like : 0}
        </motion.span>
      </motion.div>
      {/* <div><b>sendifajri</b> The beach is definitely where I feel most at home. It's my oxygen. I forget how much I need it sometimes when I'm away working.</div> */}
      {/* <div className="comment"><b>johndoe</b> So stunning</div> */}
      {/* <motion.div className={s.statustem}>{author.name}</motion.div> */}
    </motion.div>
  )
}
