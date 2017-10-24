import React from 'react'
import { connect } from 'react-redux'
import Todo from '../Components/Todo'
import { toggleTodo } from '../actions/actions'
import { withRouter } from 'react-router-dom'
import { getVisibleTodos } from '../reducers/todos'

const mapStateToProps = (state) => ({
  todos: state.todos
})

let Todos = ({ todos, toggleTodo, match }) => {
  const { params } = match
  const visibleTodos = getVisibleTodos(todos, params.filter)
  return(
    <ul>
      {visibleTodos.map(({ id, text, completed }) => (
        <Todo
          key={id}
          onClick={() => toggleTodo(id)}
          completed={completed}
        >
          {text}
        </Todo>
      ))}
    </ul>
  )
}

export default withRouter(
  connect(
    mapStateToProps,
    { toggleTodo: toggleTodo }
  )(Todos)
)
