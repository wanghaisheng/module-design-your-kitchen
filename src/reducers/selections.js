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
    size: {
      name: 'Träkök',
      category: 'Size',
      price: 10000,
      image: 'https://res.cloudinary.com/dztqyanvb/image/upload/v1625745446/Nordiska-ko%CC%88k-tra%CC%88ko%CC%88k-inspiration-2000px_rslnew_bc7phl.jpg'
    },
    sizeImg: '',
    frontImg: '',
    worktopImg: '',
    handlesImg: '',
    tapsImg: '',
    selectionsDone: false,
    activeDesktopImg: 'https://res.cloudinary.com/dztqyanvb/image/upload/v1625744430/Nordiska-k%C3%B6k-tr%C3%A4k%C3%B6k-inspiration-2000px_rslnew.jpg',
    activeMobileImg: '',
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

      if (action.payload.category === 'Size') {
        state.size = action.payload
      }
    },
    setSelectionsDone: (state, action) => {
      state.selectionsDone = action.payload
    },
    setBackgroundImage: (state, action) => {
      if (state.backgroundImgChange) {
        state.currentBackgroundImg = action.payload
        state.activeDesktopImg = action.payload
      } else if (!state.backgroundImgChange) {
        state.secondBackgroundImg = action.payload
        state.activeDesktopImg = action.payload
      }
    },
    setImgChange: (state, action) => {
      state.backgroundImgChange = !state.backgroundImgChange
    },
    findMobileImg: (state, action) => {
      const images = action.payload.images
      const category = action.payload.category
      let activeImage = ''

      if (state.size.name === 'Träkök') {
        activeImage = images[0]
      } else if (state.size.name === 'Shakerkök') {
        activeImage = images[1]
      } else {
        activeImage = images[2]
      }

      switch (category) {
        case 'Size':
          state.sizeImg = activeImage
          state.activeMobileImg = activeImage
          break
        case 'Front':
          state.frontImg = activeImage
          break
        case 'Worktops':
          state.worktopImg = activeImage
          break
        case 'Handles':
          state.handlesImg = activeImage
          break
        case 'Taps':
          state.tapsImg = activeImage
          break
        default:
          console.log('test')
      }
    }
  }
})