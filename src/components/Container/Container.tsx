import React from 'react'

interface ContainerProps {
  children?: React.ReactNode
  centerContent?: boolean
  mainClassName?: string
  className?: string
}

const ContainerStyle: React.FC<ContainerProps> = ({
  children,
  centerContent = false,
  mainClassName,
  className
}) => {
  return (
    <main
      className={`flex w-screen h-screen bg-gradient-to-r from-bg-color-s to-bg-color-e ${mainClassName}`}
    >
      <div
        className={`${className} container flex flex-col
          lg:max-w-none ${centerContent ? 'justify-center items-center' : ''}`}
      >
        {children}
      </div>
    </main>
  )
}

export default ContainerStyle
