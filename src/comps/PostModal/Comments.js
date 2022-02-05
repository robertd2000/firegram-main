import React, { useEffect, useState } from 'react'
import { Username } from './Username'

export const Comments = ({ comments }) => {
  return (
    <div className="comments">
      {comments
        ? comments.map((i, index) => {
            console.log(i)
            return (
              <div key={index}>
                <Username author={i?.author} style={{ fontSize: '14px' }} />
                <span className="comment">{i.comment}</span>
              </div>
            )
          })
        : null}
    </div>
  )
}
