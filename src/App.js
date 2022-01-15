import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from './comps/Navbar'
import { PrivateRoute } from './comps/PrivateRoute'
import useAuth from './hooks/useAuth'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Profile } from './pages/Profile'
import { Register } from './pages/Register'

function App() {
  const { user } = useAuth()

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
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
    </div>
  )
}

export default App
