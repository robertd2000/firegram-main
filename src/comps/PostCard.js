import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import s from './PostModal/PostCard.module.css'

export const PostCard = ({ selectedImage, setSelectedImage, author }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains('backdrop')) {
      setSelectedImage(null)
    }
  }
  console.log(author)
  return (
    <motion.div className={s.postContainer}>
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
          <Status />
          {/* <Comment /> */}
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

const Username = ({ author }) => {
  return (
    <motion.div className={s.username}>
      <motion.img
        src={
          author.avatar ||
          'https://imdezcode.files.wordpress.com/2020/02/imdezcode-logo.png'
        }
        alt="avatar"
      ></motion.img>
      <motion.p>
        <Link to={`/profile/${author.uid}`}> {author.name}</Link>
      </motion.p>
    </motion.div>
  )
}

const Image = ({ img }) => {
  return <motion.img className={s.postImage} src={img}></motion.img>
}

const Status = () => {
  return (
    <motion.div className={s.status}>
      <motion.div className={s.like}>
        <motion.img src="https://cdn4.iconfinder.com/data/icons/app-custom-ui-1/48/Heart-128.png"></motion.img>
        <motion.img src="https://cdn4.iconfinder.com/data/icons/app-custom-ui-1/48/Chat_bubble-128.png"></motion.img>
      </motion.div>
    </motion.div>
  )
}

const Comment = () => {
  return (
    <div className={s.commentInput}>
      <textarea placeholder="Add a comment…"></textarea>
      <img src="https://i.stack.imgur.com/twIm6.png"></img>
    </div>
  )
}
