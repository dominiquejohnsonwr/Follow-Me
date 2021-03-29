import React from 'react'
import { Link } from "react-router-dom"

function Nav() {
  return (
    <div>
      <h1>Follow Me</h1>
      <Link to="/"><strong><em>Home</em></strong></Link>
      <Link to="/new"><em>Add a new user</em></Link>
    </div>
  )
}

export default Nav