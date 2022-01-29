import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import s from './PostCard.module.css'

export const Username = ({ author }) => {
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
