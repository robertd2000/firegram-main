import React, { useEffect } from 'react'
import useStorage from '../hooks/useStorage'
import { motion } from 'framer-motion'

export const ProgressBar = ({ file, setFile }) => {
  const postId = Math.random() * 100
  const { url, progress } = useStorage(file, postId)

  useEffect(() => {
    if (url) {
      setFile(null)
    }
  }, [url, setFile])

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: progress + '%' }}
      className="progress-bar"
    ></motion.div>
  )
}
