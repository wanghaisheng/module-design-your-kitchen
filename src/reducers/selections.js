import { createSlice } from '@reduxjs/toolkit'

export const selections = createSlice({
  name: 'selections',
  initialState: {
    answers: [],
    selectionsDone: false,
    totalPrice: 0
  },
  reducers: {
    addAnswer: (state, action) => {
      const existingCategory = state.answers.find((answer) => answer.category === action.payload.category)

      if (existingCategory) {
        state.answers = state.answers.filter((answer) => answer.category !== action.payload.category)
        state.answers = [...state.answers, action.payload]
      } else {
        state.answers = [...state.answers, action.payload]
      }
    },
    setSelectionsDone: (state, action) => {
      state.selectionsDone = action.payload
    }
  }
})