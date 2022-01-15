import React from 'react'
import { Navigate } from 'react-router-dom'

export const PrivateRoute = ({ children, user }) => {
  if (!user) {
    return <Navigate to={'/login'} />
  }
  return children
}
