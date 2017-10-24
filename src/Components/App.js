import React, { Component } from 'react'

import AddTodo from './AddTodo'
import Todos from '../Containers/Todos'
import Footer from './Footer'

const App = () => (
  <div>
    <h1>Todos</h1>
    <AddTodo />
    <Todos />
    <Footer />
  </div>
)

export default App
