import ContainerStyle from 'components/Container/Container'
import React from 'react'
import { useParams } from 'react-router-dom'

const Call: React.FC = () => {
  const { callId } = useParams()

  return <ContainerStyle>p</ContainerStyle>
}

export default Call
