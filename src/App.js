import { PageContent } from 'components/PageContent'
import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { ui } from './reducers/ui'
import { language } from './reducers/language'

const reducer = combineReducers({
  ui: ui.reducer,
  language: language.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <PageContent />
    </Provider>
  )
}