import React from 'react'

const Header = () => {
  return (
    <div className='header'>
        <NavLink to = {"/phone"}>Phone</NavLink>
        <NavLink to = {"/tablet"}>Tablet</NavLink>
        <NavLink to = {"/home"}>Home</NavLink>
        <NavLink to = {"/smartwatch"}>Smartwatch</NavLink>
        <NavLink to = {"/laptop"}>Laptop</NavLink>

    </div>
  )
}

export default Header