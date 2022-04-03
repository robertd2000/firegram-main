import React, { useState } from 'react'
import s from './PostCard.module.css'

export const Comment = ({ postId, author, addComment = (r) => r }) => {
  const [text, setText] = useState('')

  const onInput = (e) => {
    setText(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    addComment(postId, author, text)
    setText('')
  }

  return (
    <div className={s.commentInput}>
      <form onSubmit={onSubmit}>
        <input
          onChange={onInput}
          value={text}
          placeholder="Add a comment…"
        ></input>
      </form>
    </div>
  )
}
