import { createSlice } from '@reduxjs/toolkit'

export const ui = createSlice({
  name: 'ui',
  initialState: {
    activePageId: 'about'
  },
  reducers: {
    setPageId: (state, action) => {
      state.activePageId = action.payload
    }
  }
})