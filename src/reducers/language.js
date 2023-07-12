import { createSlice } from '@reduxjs/toolkit'

export const language = createSlice({
  name: 'language',
  initialState: {
    selected: 'en'
  },
  reducers: {
    setLanguage: (state, action) => {
      state.selected = action.payload
    }
  }
})