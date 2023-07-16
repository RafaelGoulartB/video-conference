import React from 'react'
import RoomHeader from './RoomHeader/RoomHeader'

const Room: React.FC = () => {
  return (
    <div className="flex col-span-full items-center lg:col-start-1 lg:col-end-9">
      <RoomHeader />
    </div>
  )
}

export default Room
