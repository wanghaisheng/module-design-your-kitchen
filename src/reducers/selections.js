import { createSlice } from '@reduxjs/toolkit'

export const selections = createSlice({
  name: 'selections',
  initialState: {
    answers: [],
    selectionsDone: false
  },
  reducers: {
    addAnswer: (state, action) => {
      const existingCategory = state.answers.find((answer) => answer.category === action.payload.category)
      console.log(action.payload.category)

      if (existingCategory) {
        console.log('hej')
        state.answers = state.answers.filter((answer) => answer.category !== action.payload.category)
        state.answers = [...state.answers, action.payload]
      } else {
        state.answers = [...state.answers, action.payload]
      }

      console.log(state.answers)
    },
    setSelectionsDone: (state, action) => {
      state.selectionsDone = action.payload
    }
  }
})