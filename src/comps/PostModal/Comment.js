import React from 'react'
import s from './PostCard.module.css'

export const Comment = () => {
  return (
    <div className={s.commentInput}>
      <textarea placeholder="Add a comment…"></textarea>
      <img src="https://i.stack.imgur.com/twIm6.png"></img>
    </div>
  )
}
