import React from 'react'
import RoomHeader from './RoomHeader/RoomHeader'
import VideoGrid from './VideoGrid/VideoGrid'
import VideoControls from './VideoControls/VideoControls'

const Room: React.FC = () => {
  return (
    <div className="flex flex-col col-span-full items-center mx-4 lg:col-start-1 lg:col-end-9">
      <RoomHeader />

      <VideoGrid />
      <VideoControls />
    </div>
  )
}

export default Room
