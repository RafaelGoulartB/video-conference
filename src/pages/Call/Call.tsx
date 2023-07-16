import Room from 'components/Call/Room/Room'
import Sidebar from 'components/Call/Sidebar/Sidebar'
import ContainerStyle from 'components/Container/Container'
import React from 'react'
import { useParams } from 'react-router-dom'

const Call: React.FC = () => {
  const { callId } = useParams()

  return (
    <ContainerStyle>
      <div className="grid grid-cols-12 w-screen h-screen">
        <Room />
        <Sidebar />
      </div>
    </ContainerStyle>
  )
}

export default Call
