import React from 'react'
import { Link } from "react-router-dom"
import "./Nav.css"

function Nav() {
  return (
    <div className="nav">
      <div className="Title">
      <h1>Follow Me</h1>
      </div>
      <div className="nav-links">
      <Link to="/"><strong><em>Home</em></strong></Link>
        <Link to="/new"><em>Add a new user</em></Link>
        </div>
    </div>
  )
}

export default Nav