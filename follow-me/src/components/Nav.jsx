import React from 'react'
import { Link } from "react-router-dom"
import "./Nav.css"

function Nav() {
  return (
    <div className="nav">
      <div className="nav-links">
      <Link to="/">Home</Link>
        <Link to="/new">Add a new user</Link>
        </div>
    </div>
  )
}

export default Nav