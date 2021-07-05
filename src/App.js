import React, { useState } from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { selections } from './reducers/selections'
import { Home } from './Home'

const reducer = combineReducers({
  selections: selections.reducer
})

const store = configureStore({
  reducer
})

store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})

export const App = () => {

  return (
    <Provider store={store}>
      <Home />
    </Provider>
  )
}
