import React from 'react'
import { motion } from 'framer-motion'
import { formatDate } from '../../utils'
import s from './PostCard.module.css'

export const Footer = ({ author }) => {
  let date = formatDate(author.createdAt.toDate())

  return (
    <motion.div className={s.footer}>
      <motion.p className={s.date}>{date}</motion.p>
    </motion.div>
  )
}
