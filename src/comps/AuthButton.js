import React from 'react'

export const AuthButton = ({ className, disabled, children }) => {
  return (
    <button className={className} disabled={disabled}>
      {children}
    </button>
  )
}
