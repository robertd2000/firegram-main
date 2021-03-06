import React from 'react'
import { motion } from 'framer-motion'
import s from './PostCard.module.css'

export const Image = ({ img }) => {
  return (
    // <motion.div className={s.image}>
    <motion.img className={s.postImage} src={img}></motion.img>
    // </motion.div>
  )
}
