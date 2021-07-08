import { createSlice } from '@reduxjs/toolkit'
import { 
  sizeOptions,
  frontOptions,
  worktopOptions,
  handleOptions,
  tapsOptions
} from '../data'

export const selections = createSlice({
  name: 'selections',
  initialState: {
    answers: [sizeOptions[0], frontOptions[0], worktopOptions[0], handleOptions[0], tapsOptions[0]],
    size: {},
    front: {},
    worktop: {},
    handles: {},
    taps: {},
    selectionsDone: false,
    totalPrice: 0,
    currentBackgroundImg: 'https://res.cloudinary.com/dztqyanvb/image/upload/v1625744430/Nordiska-k%C3%B6k-tr%C3%A4k%C3%B6k-inspiration-2000px_rslnew.jpg',
    secondBackgroundImg: '',
    backgroundImgChange: false
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

      switch (action.payload.category) {
        case 'Size':
          state.size = action.payload
          break
        case 'Front':
          state.front = action.payload
          break
        case 'Worktops':
          state.worktop = action.payload
          break
        case 'Handles':
          state.handles = action.payload
          break
        case 'Taps':
          state.taps = action.payload
          break
        default:
          console.log('test')
      }
    },
    setSelectionsDone: (state, action) => {
      state.selectionsDone = action.payload
    },
    setBackgroundImage: (state, action) => {
      if (state.backgroundImgChange) {
        state.currentBackgroundImg = action.payload
      } else if (!state.backgroundImgChange) {
        state.secondBackgroundImg = action.payload
      }
    },
    setImgChange: (state, action) => {
      state.backgroundImgChange = !state.backgroundImgChange
      console.log(state.backgroundImgChange)
    }
  }
})