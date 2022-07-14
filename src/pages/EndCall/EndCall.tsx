import FormButton from 'components/Form/FormButton/FormButton'
import React from 'react'
import { Link } from 'react-router-dom'

const EndCall: React.FC = () => {
  return (
    <main className="flex items-center w-screen h-screen bg-gradient-to-r from-bg-color-s to-bg-color-e">
      <div className="flex flex-col items-center pt-24 w-screen h-screen">
        <h1 className="text-xl font-bold text-white md:text-4xl">
          Call has been ended.
        </h1>

        <div className="row-auto mt-4">
          <Link className="font-bold text-white underline" to="/create-room">
            <FormButton title="Create a new room" type="button" />
          </Link>
        </div>
      </div>
    </main>
  )
}

export default EndCall
