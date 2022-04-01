import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import s from './PostCard.module.css'

export const Username = ({
  author,
  style,
  subscribe,
  currentUser,
  unsubscribe,
}) => {
  const onSubscribe = () => {
    subscribe(author)
  }

  const onUnsubscribe = () => {
    unsubscribe(author)
  }

  return (
    <motion.div className={s.username} style={style ? style : ''}>
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
      <motion.div>
        {author.uid !== currentUser.uid && (
          <>
            {subscribe && !currentUser.subscribes.includes(author.uid) ? (
              <motion.span className={s.subscribe} onClick={onSubscribe}>
                Подписаться
              </motion.span>
            ) : (
              <motion.span className={s.subscribe} onClick={onUnsubscribe}>
                Отписаться
              </motion.span>
            )}
          </>
        )}
      </motion.div>
    </motion.div>
  )
}
