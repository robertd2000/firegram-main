import React, { useEffect, useState } from 'react'
import { Username } from './Username'

export const Comments = ({ comments, currentUser }) => {
  return (
    <div className="comments">
      {comments
        ? comments.map((i, index) => {
            return (
              <div key={index}>
                <Username
                  author={i?.author}
                  currentUser={currentUser}
                  style={{ fontSize: '14px' }}
                />
                <span className="comment">{i.comment}</span>
              </div>
            )
          })
        : null}
    </div>
  )
}
