import { motion } from 'framer-motion'
import React from 'react'

export const ImageGrid = ({ setSelectedImage, docs }) => {
  return (
    <div className="img-grid">
      {docs ? (
        docs.map((doc) => (
          <motion.div
            layout
            whileHover={{ opacity: 1 }}
            className="img-wrap"
            key={doc.id}
            onClick={() => setSelectedImage(doc)}
          >
            <motion.img
              src={doc.url}
              alt="uploaded picture"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </motion.div>
        ))
      ) : (
        <div className="loader">
          <div className="loader_inner"></div>
        </div>
      )}
    </div>
  )
}
