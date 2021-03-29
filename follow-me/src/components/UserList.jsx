import React from 'react'
import { Link } from "react-router-dom"


function UserList(props) {

  let data = props.user.fields




  return (
    <div className="user-list">
      <img src={data.profilePic} height={150} mode="fit" alt="profile pic" />
      <h3>{data.username}</h3>
      <h5><em>{data.bio}</em></h5>
      <Link to={`/view/${props.user.id}`}>
        <button>Follow Me...</button>
      </Link>
    </div>
  )
}

export default UserList