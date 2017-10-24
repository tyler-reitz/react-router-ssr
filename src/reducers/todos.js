const todos = (state = [], action) => {
  switch (action.type) {
    /* eslint-disable no-case-declarations */
    case 'ADD_TODO':
      const { id, text, completed } = action
      return [ ...state, { id, text, completed } ]
    case 'TOGGLE_TODO':
      return state.map(t => (t.id === action.id) ? { ...t, completed: !t.completed } : t)
    default:
      return state
  }
}

export default todos

export const getVisibleTodos = (todos, filter = '/') => {
  switch (filter) {
    case '/':
      return todos
    case 'completed':
      return todos.filter(t => t.completed)
    case 'active':
      return todos.filter(t => !t.completed)
    default:
      throw new Error(`${filter} is not a valid filter`)
  }
}
