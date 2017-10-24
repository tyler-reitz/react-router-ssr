import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/actions'

let AddTodo = ({ addTodo }) => {
  let textInput

  return (
    <form onSubmit={e => {
      e.preventDefault()
      addTodo(textInput.value)
      textInput.value = ''
    }}>
      <input ref={input => textInput = input } />
      <button type="submit" >Add Todo</button>
    </form>
  )
}

export default connect(
  null,
  { addTodo: addTodo }
)(AddTodo)
