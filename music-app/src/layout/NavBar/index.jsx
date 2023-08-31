import React from 'react'
import { NavLink, useLocation, Outlet } from 'react-router-dom'
import './style.css'

const LocationDisplay = () => {
  const location = useLocation()

  return <span>{location.pathname}</span>
}

const NavBar = () => {

  let activeStyle = {
    textDecoration: "underline",
    color: "cadetblue"
  }

  const navA = ({ isActive }) => ( isActive ? activeStyle : undefined)

  return (
    <>
      <nav>
        <h4>Jordan Mackamapa <LocationDisplay /></h4>
        <ul className="nav-links">
          <li><NavLink to="/" style={navA}>Home</NavLink></li>
          <li><NavLink to="/albums" style={navA}>Albums</NavLink></li>
        </ul>
      </nav>

      <Outlet />
    </>
    
  )
}

export default NavBar
