import { createSlice } from '@reduxjs/toolkit'

export interface RoomState {
  isSidebarOpen: boolean
}

const roomSlice = createSlice({
  name: 'room',
  initialState: {
    isSidebarOpen: false
  },
  reducers: {
    openSidebar: (state) => {
      state.isSidebarOpen = true
    },
    closeSidebar: (state) => {
      state.isSidebarOpen = true
    },
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen
    }
  }
})

export const { openSidebar, closeSidebar, toggleSidebar } = roomSlice.actions

export default roomSlice.reducer
