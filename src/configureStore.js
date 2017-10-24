import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducers from './reducers'

const db = {
  todos: [
    {
      id: 1,
      text: 'hey',
      completed: true
    },
    {
      id: 2,
      text: 'ho',
      completed: false
    },
    {
      id: 3,
      text: 'lets go',
      completed: true
    }
  ]
}

export default function configureStore() {
  const store = createStore(
    reducers,
    db
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

  return store
}
