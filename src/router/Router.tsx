import React from 'react'
import { Routes, Route } from 'react-router-dom'

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/create-room" element={<p>create</p>} />
      <Route path="/join-room" element={<p>join</p>} />
      <Route path="/call/:id" element={<p>call</p>} />
      <Route path="/end-call" element={<p>end-call</p>} />
    </Routes>
  )
}

export default Router
