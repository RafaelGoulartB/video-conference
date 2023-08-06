import React from 'react'
import VideoControlButton, {
  VideoControlButtonProps
} from './VideoControlButton/VideoControlButton'
import { Mic, MoreHorizontal, Phone, Video, Volume1 } from 'lucide-react'

const VideoControls: React.FC = () => {
  const videoControlsButtons: VideoControlButtonProps[] = [
    {
      id: 'toggle-sound',
      icon: <Volume1 color="white" size={28} className="inline" fill="white" />
    },
    {
      id: 'toggle-video',
      icon: <Video color="white" size={28} className="inline" fill="white" />
    },
    {
      id: 'end-call',
      icon: <Phone color="white" size={28} className="inline" fill="white" />,
      main: true
    },
    {
      id: 'toggle-mic',
      icon: <Mic color="white" size={28} className="inline" />
    },
    {
      id: 'more-options',
      icon: (
        <MoreHorizontal
          color="white"
          size={28}
          className="inline"
          fill="white"
        />
      )
    }
  ]
  return (
    <div
      id="video-controls"
      className="flex justify-around items-center py-5 px-2 mb-4 w-full bg-gray rounded-md shadow lg:mr-2 lg:bg-transparent lg:shadow-none"
    >
      {videoControlsButtons.map((buttonData) => (
        <VideoControlButton
          key={buttonData.id}
          id={buttonData.id}
          icon={buttonData.icon}
          main={buttonData.main}
        />
      ))}
    </div>
  )
}

export default VideoControls
