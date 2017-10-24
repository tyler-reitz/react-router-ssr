import React from 'react'

const Todo = ({ completed, children, onClick }) => (
  <li onClick={onClick}
    style={
      completed
        ? { textDecoration: 'line-through' }
        : {}
    }
  >
    {children}
  </li>
)

export default Todo
