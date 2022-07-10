import Call from 'pages/Call/Call'
import CreateRoom from 'pages/CreateRoom/CreateRoom'
import EndCall from 'pages/EndCall/EndCall'
import JoinRoom from 'pages/JoinRoom/JoinRoom'
import React from 'react'
import { Routes, Route } from 'react-router-dom'

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/create-room" element={<CreateRoom />} />
      <Route path="/join-room" element={<JoinRoom />} />
      <Route path="/call/:id" element={<Call />} />
      <Route path="/end-call" element={<EndCall />} />
    </Routes>
  )
}

export default Router
