import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import s from './PostCard.module.css'
import { formatDate } from '../../utils'

export const Username = ({ author }) => {
  let date = formatDate(author.createdAt.toDate())
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
      <motion.p className={s.date}>{date}</motion.p>
    </motion.div>
  )
}
