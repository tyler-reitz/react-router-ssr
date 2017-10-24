import React from 'react'
import { NavLink } from 'react-router-dom'

const FilterLink = ({ filter, children }) => (
  <NavLink
    to={ filter === 'all' ? '/' : `/${filter}`} exact
    activeStyle={{
      textDecoration: 'none'
    }}
  >
    { children }
  </NavLink>
)

export default FilterLink
