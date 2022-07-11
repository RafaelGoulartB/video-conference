import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CreateRoom: React.FC = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [roomName, setRoomName] = useState('')

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <main className="flex items-center w-screen h-screen bg-gradient-to-r from-bg-color-s to-bg-color-e">
      <div className="container flex flex-col justify-center items-center">
        <form
          onSubmit={onSubmit}
          className="container flex flex-col gap-y-4 items-center mx-auto w-10/12  bg-gradient-to-r from-primary to-primary-darker rounded-md md:w-1/2"
        >
          <div
            id="form-header"
            className="self-start mb-3 w-full divide-y divide-white"
          >
            <h3 className="my-4 mb-2 ml-4 text-lg font-bold text-white">
              Create Room
            </h3>
            <p></p>
          </div>

          <div className="flex flex-col w-80 font-bold">
            <label htmlFor="name" className="text-sm text-white">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              placeholder="Name"
              className="py-2 px-5 text-gray rounded-md focus:outline-secondary"
              onChange={(e: React.FormEvent<HTMLInputElement>) =>
                setName(e.currentTarget.value)
              }
            />
          </div>

          <div className="flex flex-col w-80 font-bold">
            <label htmlFor="email" className="text-sm text-white">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              placeholder="Email"
              className="py-2 px-5 text-gray rounded-md focus:outline-secondary"
              onChange={(e: React.FormEvent<HTMLInputElement>) =>
                setEmail(e.currentTarget.value)
              }
            />
          </div>

          <div className="flex flex-col w-80 font-bold ">
            <label htmlFor="roomName" className="text-sm text-white">
              Room Name
            </label>
            <input
              id="roomName"
              type="text"
              value={roomName}
              placeholder="Ex: Design Critique"
              className="py-2 px-5 text-gray rounded-md focus:outline-secondary"
              onChange={(e: React.FormEvent<HTMLInputElement>) =>
                setRoomName(e.currentTarget.value)
              }
            />
          </div>

          <button
            className="py-2 px-12 my-4 font-bold text-white bg-primary rounded-md focus:ring-2 focus:ring-inset focus:ring-white"
            type="submit"
          >
            Create
          </button>
        </form>

        <div className="mt-4">
          <Link className="font-bold text-white underline" to="/join-room">
            Join Room
          </Link>
        </div>
      </div>
    </main>
  )
}

export default CreateRoom
