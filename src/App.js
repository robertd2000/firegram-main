import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from './comps/Navbar'
import { PrivateRoute } from './comps/PrivateRoute'
import { AuthProvider } from './context/auth'
import useAuth from './hooks/useAuth'
import { Home } from './pages/Home'
import { Images } from './pages/Images'
import { Login } from './pages/Login'
import { Post } from './pages/Post'
import { Profile } from './pages/Profile'
import { Register } from './pages/Register'
import { Settings } from './pages/Settings'

function App() {
  const { user } = useAuth()

  return (
    <div className="App">
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute user={user}>
                <Home />
              </PrivateRoute>
            }
          />
          <Route path="/images" element={<Images />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/post/:id" element={<Post />} />

          <Route
            path="/settings"
            element={
              <PrivateRoute user={user}>
                <Settings />
              </PrivateRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </div>
  )
}

export default App
