import { useTypedSelector } from 'Redux/useTypedSelector/useTypedSelector'
import React from 'react'

const Sidebar: React.FC = () => {
  const isSidebarOpen = useTypedSelector((state) => state.room.isSidebarOpen)

  console.log(isSidebarOpen)
  return (
    <div
      className="flex overflow-hidden absolute inset-full justify-center items-center
        lg:relative lg:inset-0 lg:col-start-9 lg:col-end-13"
    >
      <div
        className="top-0 p-2 m-4 w-auto h-room-height bg-gradient-to-b
          from-bg-chat-color-s to-bg-chat-color-e rounded-lg lg:ml-2
          lg:w-full"
      ></div>
    </div>
  )
}

export default Sidebar
