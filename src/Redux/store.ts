import { configureStore } from '@reduxjs/toolkit'
import roomReducer, { RoomState } from './slices/room'

export interface RootState {
  room: RoomState
}

export const store = configureStore({
  reducer: {
    room: roomReducer
  }
})
