import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from './comps/Navbar'
import { PrivateRoute } from './comps/PrivateRoute'
import { AuthProvider } from './context/auth'
import useAuth from './hooks/useAuth'
import { Home } from './pages/Home'
import { Images } from './pages/Images'
import { Login } from './pages/Login'
import { Profile } from './pages/Profile'
import { Register } from './pages/Register'

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
          <Route
            path="/profile"
            element={
              <PrivateRoute user={user}>
                <Profile />
              </PrivateRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </div>
  )
}

export default App
