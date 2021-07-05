import { createSlice } from '@reduxjs/toolkit'

export const selections = createSlice({
  name: 'selections',
  initialState: {
    currentAnswer: '',
    answers: [],
    pageShown: 'size',
    selectionDone: false
  },
  reducers: {
    addAnswer: (state, action) => {
      state.answers = [...state.answers, action.payload]
      console.log(state.answers)
    },
    removeLatestAnswer: (state, action) => {
      state.answers = state.answers.pop()
    },
    setCurrentAnswer: (state, action) => {
      state.currentAnswer = action.payload
    },
    setPageShown: (state, action) => {
      state.pageShown = action.payload
    },
    setSelectionDone: (state, action) => {
      state.selectionDone = action.payload
    }
  }
})