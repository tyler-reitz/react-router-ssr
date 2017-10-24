import React from 'react'
import { Provider } from 'react-redux'
import configureStore from '../configureStore'
const store = configureStore()

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import App from '../Components/App'

const Root = () => (
  <Provider store={store}>
    <Router>
      <Route path='/:filter?' component={App} />
    </Router>
  </Provider>
)

export default Root
