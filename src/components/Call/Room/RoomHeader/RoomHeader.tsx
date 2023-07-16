import { toggleSidebar } from 'Redux/slices/room'
import React from 'react'
import { useDispatch } from 'react-redux'

const RoomHeader: React.FC = () => {
  const dispatch = useDispatch()

  return (
    <div className="py-4 px-2 m-4 mb-auto w-full bg-gray rounded-md shadow lg:mr-2 lg:bg-transparent lg:shadow-none">
      <div
        id="header"
        className="flex justify-between items-center lg:justify-start"
      >
        <h1 className="overflow-hidden w-1/2 font-bold text-white whitespace-nowrap lg:w-auto">
          Design Critique - Nickelfox Website
        </h1>

        <div className="flex justify-center items-center">
          <div
            id="participant_count"
            className="flex justify-center items-center py-0.5 px-3 ml-3 bg-primary rounded-md"
          >
            <span className="text-sm font-bold text-white">15+</span>
          </div>
          <button
            type="button"
            className="block py-0.5 px-3 ml-2 text-white bg-primary rounded-md lg:hidden"
            onClick={() => dispatch(toggleSidebar())}
          >
            <span className="text-sm font-bold text-white">Chat</span>
          </button>
        </div>
      </div>

      <div className="hidden mt-8 w-full h-px bg-gray lg:block" />
    </div>
  )
}

export default RoomHeader
