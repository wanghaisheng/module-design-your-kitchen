import { createSlice } from '@reduxjs/toolkit'
import {
  sizeOptions,
  worktopOptions,
  handleOptions,
  tapsOptions
} from '../data'

export const selections = createSlice({
  name: 'selections',
  initialState: {
    answers: [sizeOptions[0], worktopOptions[0], handleOptions[0], tapsOptions[0]],
    size: {
      name: 'Träkök',
      category: 'Size',
      price: 10000,
      image: 'https://res.cloudinary.com/dztqyanvb/image/upload/v1625745446/Nordiska-ko%CC%88k-tra%CC%88ko%CC%88k-inspiration-2000px_rslnew_bc7phl.jpg'
    },
    sizeImg: '',
    worktopImg: '',
    initialWorktopImg: [worktopOptions[0].backgroundImageMobile[0], worktopOptions[0].backgroundImageMobile[1], worktopOptions[0].backgroundImageMobile[2]],
    handlesImg: '',
    initialHandlesImg: [handleOptions[0].backgroundImageMobile[0], handleOptions[0].backgroundImageMobile[1], handleOptions[0].backgroundImageMobile[2]],
    tapsImg: '',
    initialTapsImg: [tapsOptions[0].backgroundImageMobile[0], tapsOptions[0].backgroundImageMobile[1], tapsOptions[0].backgroundImageMobile[2]],
    selectionsDone: false,
    activeDesktopImg: 'https://res.cloudinary.com/dztqyanvb/image/upload/v1625744430/Nordiska-k%C3%B6k-tr%C3%A4k%C3%B6k-inspiration-2000px_rslnew.jpg',
    activeMobileImg: '',
    currentBackgroundImg: 'https://res.cloudinary.com/dztqyanvb/image/upload/v1625744430/Nordiska-k%C3%B6k-tr%C3%A4k%C3%B6k-inspiration-2000px_rslnew.jpg',
    secondBackgroundImg: '',
    backgroundImgChange: false,
    test: {}
  },
  reducers: {
    addAnswer: (state, action) => {
      const existingCategory = state.answers.find((answer) => answer.category === action.payload.category)
      console.log(existingCategory)
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
    updateImages: (state, action) => {
      state.worktopImg = ''
      state.tapsImg = ''
      state.handlesImg = ''
      const selectedWorktop = state.answers.find((product) => product.category === 'Bänkskiva')
      const selectedHandle = state.answers.find((product) => product.category === 'Handtag & knoppar')
      const selectedHandleImages = selectedHandle.backgroundImageMobile
      const selectedTap = state.answers.find((product) => product.category === 'Blandare')
      const selectedTapImages = selectedTap.backgroundImageMobile
      
      if (state.size.name === 'Träkök') {
        state.worktopImg = selectedWorktop.backgroundImageMobile[0]
        state.handlesImg = selectedHandle.backgroundImageMobile[0]
        state.tapsImg = selectedTap.backgroundImageMobile[0]
      } else if (state.size.name === 'Shakerkök') {
        state.worktopImg = selectedWorktop.backgroundImageMobile[1]
        state.handlesImg = selectedHandle.backgroundImageMobile[1]
        state.tapsImg = selectedTap.backgroundImageMobile[1]
        /*if (state.worktopImg === '') {
          state.worktopImg = state.initialWorktopImg[1]
        }
        if (state.handlesImg === '') {
          state.handlesImg = state.initialHandlesImg[1]
        }
        if (state.tapsImg === '') {
          state.tapsImg = state.initialTapsImg[1]
        }*/
      } else {
        state.worktopImg = selectedWorktop.backgroundImageMobile[2]
        state.handlesImg = selectedHandle.backgroundImageMobile[2]
        state.tapsImg = selectedTap.backgroundImageMobile[2]
        /*
        if (state.worktopImg === '') {
          state.worktopImg = state.initialWorktopImg[2]
        }
        if (state.handlesImg === '') {
          state.handlesImg = state.initialHandlesImg[2]
        }
        if (state.tapsImg === '') {
          state.tapsImg = state.initialTapsImg[2]
        }*/
      }
    },
    findMobileImg: (state, action) => {
      const images = action.payload.images
      const category = action.payload.category
      let activeImage = ''

      if (state.size.name === 'Träkök') {
        activeImage = images[0]
        /*if (state.worktopImg === '') {
          state.worktopImg = state.initialWorktopImg[0]
        }
        if (state.handlesImg === '') {
          state.handlesImg = state.initialHandlesImg[0]
        }
        if (state.tapsImg === '') {
          state.tapsImg = state.initialTapsImg[0]
        }*/
      } else if (state.size.name === 'Shakerkök') {
        activeImage = images[1]
        /*if (state.worktopImg === '') {
          state.worktopImg = state.initialWorktopImg[1]
        }
        if (state.handlesImg === '') {
          state.handlesImg = state.initialHandlesImg[1]
        }
        if (state.tapsImg === '') {
          state.tapsImg = state.initialTapsImg[1]
        }*/
      } else {
        activeImage = images[2]
        /*if (state.worktopImg === '') {
          state.worktopImg = state.initialWorktopImg[2]
        }
        if (state.handlesImg === '') {
          state.handlesImg = state.initialHandlesImg[2]
        }
        if (state.tapsImg === '') {
          state.tapsImg = state.initialTapsImg[2]
        }*/
      }

      switch (category) {
        case 'Size':
          state.sizeImg = activeImage
          state.activeMobileImg = activeImage
          break
        case 'Bänkskiva':
          state.worktopImg = activeImage
          break
        case 'Handtag & knoppar':
          state.handlesImg = activeImage
          break
        case 'Blandare':
          state.tapsImg = activeImage
          break
        default:
          console.log('test')
      }
    }
  }
})