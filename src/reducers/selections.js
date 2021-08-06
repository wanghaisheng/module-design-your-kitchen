import { createSlice } from '@reduxjs/toolkit'
import {
  kitchenTypeOptions,
  worktopOptions,
  handleOptions,
  tapsOptions
} from '../components/data/data'

export const selections = createSlice({
  name: 'selections',
  initialState: {
    answers: [
      kitchenTypeOptions[0],
      worktopOptions[0],
      handleOptions[0],
      tapsOptions[0]
    ],
    kitchenType: {
      name: 'Träkök',
      category: 'Kökstyp',
      price: 10000,
      image: 'https://res.cloudinary.com/dztqyanvb/image/upload/v1625745446/Nordiska-ko%CC%88k-tra%CC%88ko%CC%88k-inspiration-2000px_rslnew_bc7phl.jpg'
    },
    kitchenTypeImg: '',
    worktopImg: '',
    initialWorktopImg: [
      worktopOptions[0].backgroundImagesMobile[0],
      worktopOptions[0].backgroundImagesMobile[1],
      worktopOptions[0].backgroundImagesMobile[2]
    ],
    worktopLayer: '',
    handlesImg: '',
    initialHandlesImg: [
      handleOptions[0].backgroundImagesMobile[0],
      handleOptions[0].backgroundImagesMobile[1],
      handleOptions[0].backgroundImagesMobile[2]
    ],
    handleLayer: '',
    tapsImg: '',
    initialTapsImg: [
      tapsOptions[0].backgroundImagesMobile[0],
      tapsOptions[0].backgroundImagesMobile[1],
      tapsOptions[0].backgroundImagesMobile[2]
    ],
    tapLayer: '',
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

      if (action.payload.category === 'Kökstyp') {
        state.kitchenType = action.payload
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
    setLayerImage: (state, action) => {
      const product = action.payload
      const img = product.img
      const category = product.category

      if (category === 'Bänkskiva') {
        state.worktopLayer = img
      }
      if (category === 'Blandare') {
        state.tapLayer = img
      }
      if (category === 'Handtag & knoppar') {
        state.handleLayer = img
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
      const [ selectedHandleImages ] = selectedHandle.backgroundImagesMobile
      const selectedTap = state.answers.find((product) => product.category === 'Blandare')
      const selectedTapImages = selectedTap.backgroundImagesMobile
      
      if (state.kitchenType.name === 'Träkök') {
        state.worktopImg = selectedWorktop.backgroundImagesMobile[0]
        state.handlesImg = selectedHandle.backgroundImagesMobile[0]
        state.tapsImg = selectedTap.backgroundImagesMobile[0]
      }
      if (state.kitchenType.name === 'Shakerkök') {
        state.worktopImg = selectedWorktop.backgroundImagesMobile[1]
        state.handlesImg = selectedHandle.backgroundImagesMobile[1]
        state.tapsImg = selectedTap.backgroundImagesMobile[1]
      }
      if (state.kitchenType.name === 'Slätt kök') {
        state.worktopImg = selectedWorktop.backgroundImagesMobile[2]
        state.handlesImg = selectedHandle.backgroundImagesMobile[2]
        state.tapsImg = selectedTap.backgroundImagesMobile[2]
      }
    },
    findMobileImg: (state, action) => {
      const images = action.payload.images
      const category = action.payload.category
      let activeImage = ''

      if (state.kitchenType.name === 'Träkök') {
        activeImage = images[0]
      } else if (state.kitchenType.name === 'Shakerkök') {
        activeImage = images[1]
      } else {
        activeImage = images[2]
      }

      switch (category) {
        case 'Kökstyp':
          state.kitchenTypeImg = activeImage
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