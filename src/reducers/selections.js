import { createSlice } from '@reduxjs/toolkit'
import {
  kitchenTypeOptions,
  worktopOptions,
  handleOptions,
  tapsOptions
} from '../components/ProductData/data'

export const selections = createSlice({
  name: 'selections',
  initialState: {
    selectedProducts: [
      kitchenTypeOptions[0],
      worktopOptions[0],
      handleOptions[0],
      tapsOptions[0]
    ],
    kitchenType: {
      name: kitchenTypeOptions[0].name,
      category: kitchenTypeOptions[0].category,
      price: kitchenTypeOptions[0].price,
      image: kitchenTypeOptions[0].backgroundImage
    },
    kitchenTypeImg: '',
    worktopImg: '',
    worktopLayer: worktopOptions[0].layerImg,
    handlesImg: '',
    handlesLayer: '',
    tapsImg: '',
    tapLayer: tapsOptions[0].layerImg,
    selectionsDone: false,
    activeDesktopImg: kitchenTypeOptions[0].backgroundImage,
    activeMobileImg: '',
    currentBackgroundImg: kitchenTypeOptions[0].backgroundImage,
    secondBackgroundImg: '',
    backgroundImgChange: false
  },
  reducers: {
    addAnswer: (state, action) => {
      const existingCategory = state.selectedProducts.find((answer) => answer.category === action.payload.category)

      if (existingCategory) {
        state.selectedProducts = state.selectedProducts.filter((answer) => answer.category !== action.payload.category)
        state.selectedProducts = [...state.selectedProducts, action.payload]
      } else {
        state.selectedProducts = [...state.selectedProducts, action.payload]
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
      const { category, img } = action.payload

      if (category === 'Bänkskiva') {
        state.worktopLayer = img
      }
      if (category === 'Blandare') {
        state.tapLayer = img
      }
      if (category === 'Handtag & knoppar') {
        state.handlesLayer = img
      }
    },
    setImgChange: (state, action) => {
      state.backgroundImgChange = !state.backgroundImgChange
    },
    updateMobileImages: (state, action) => {
      const selectedWorktop = state.selectedProducts.find((product) => product.category === 'Bänkskiva')
      const selectedHandle = state.selectedProducts.find((product) => product.category === 'Handtag & knoppar')
      const selectedTap = state.selectedProducts.find((product) => product.category === 'Blandare')

      const worktopImageWood = selectedWorktop.backgroundImagesMobile[0]
      const handlesImageWood = selectedHandle.backgroundImagesMobile[0]
      const tapsImageWood = selectedTap.backgroundImagesMobile[0]
      const worktopImageShaker = selectedWorktop.backgroundImagesMobile[1]
      const handlesImageShaker = selectedHandle.backgroundImagesMobile[1]
      const tapsImageShaker = selectedTap.backgroundImagesMobile[1]
      const worktopImageMinimalist = selectedWorktop.backgroundImagesMobile[2]
      const handlesImageMinimalist = selectedHandle.backgroundImagesMobile[2]
      const tapsImageMinimalist = selectedTap.backgroundImagesMobile[2]

      if (state.kitchenType.name === 'Träkök') {
        state.worktopImg = worktopImageWood
        state.handlesImg = handlesImageWood
        state.tapsImg = tapsImageWood
      }
      if (state.kitchenType.name === 'Shakerkök') {
        state.worktopImg = worktopImageShaker
        state.handlesImg = handlesImageShaker
        state.tapsImg = tapsImageShaker
      }
      if (state.kitchenType.name === 'Slätt kök') {
        state.worktopImg = worktopImageMinimalist
        state.handlesImg = handlesImageMinimalist
        state.tapsImg = tapsImageMinimalist
      }
    },
    setMobileImg: (state, action) => {
      const { images, category } = action.payload
      const woodenKitchenImg = images[0]
      const shakerKitchenImg = images[1]
      const minimalistKitchenImg = images[2]
      let activeImage = ''

      if (state.kitchenType.name === 'Träkök') {
        activeImage = woodenKitchenImg
      } else if (state.kitchenType.name === 'Shakerkök') {
        activeImage = shakerKitchenImg
      } else {
        activeImage = minimalistKitchenImg
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