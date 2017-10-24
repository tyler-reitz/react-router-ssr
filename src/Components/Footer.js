import React from 'react'
import FilterLink from './FilterLink'

const Footer = () => (
  <footer>
    Show:
    {' '}
    <FilterLink filter="all">all</FilterLink>
    {' '}
    <FilterLink filter="completed">completed</FilterLink>
    {' '}
    <FilterLink filter="active">active</FilterLink>
  </footer>
)

export default Footer
