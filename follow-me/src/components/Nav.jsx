import React from 'react'
import { Link } from "react-router-dom"
import "./Nav.css"

function Nav() {
  return (
    <div className="nav">
      <div className="nav-links">
      <Link to="/"><strong><em>Home</em></strong></Link>
        <Link to="/new"><strong><em>Add a new user</em></strong></Link>
        </div>
    </div>
  )
}

export default Nav