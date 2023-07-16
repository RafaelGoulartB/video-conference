import { Users } from 'lucide-react'
import React from 'react'

const Room: React.FC = () => {
  return (
    <div className="flex col-span-full items-center lg:col-start-1 lg:col-end-9">
      <div className="m-4 w-full h-room-height lg:mr-2">
        <div id="header" className="flex items-center">
          <h1 className="font-bold text-white">
            Design Critique - Nickelfox Website
          </h1>
          <div
            id="participant_count"
            className="flex justify-center items-center py-0.5 px-2 ml-3 w-fit bg-primary rounded-md"
          >
            <Users size={12} color="white" />
            <span className="ml-1 text-sm font-bold text-white">15+</span>
          </div>
        </div>

        <div className="mt-8 w-full h-px bg-gray" />
      </div>
    </div>
  )
}

export default Room
