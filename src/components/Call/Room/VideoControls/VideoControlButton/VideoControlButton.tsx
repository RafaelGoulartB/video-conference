/* eslint-disable prettier/prettier */
import React from 'react'

export interface VideoControlButtonProps {
  id: string
  icon: any
  onClick?: () => void
  main?: boolean
  tooltipText?: string
}

const VideoControlButton: React.FC<VideoControlButtonProps> = ({
  icon,
  onClick,
  main,
  tooltipText
}) => {
  return (
    <button
      onClick={onClick}
      className={`${main
        ? 'bg-red w-24 h-16 rounded-2xl'
        : 'bg-transparent-black rounded-full w-14 h-14'
        }`}
    >
      {icon}
    </button>
  )
}

export default VideoControlButton
