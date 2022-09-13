import { configureStore } from '@reduxjs/toolkit'
import { uiSlice } from './Slices/uiSlice'

export const store = configureStore({
  reducer: {
    uiSlice:uiSlice.reducer
  },
})