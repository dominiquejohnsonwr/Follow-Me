import React from 'react'
import axios from "axios"
import { baseURL, config } from "../services"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import "./UserDetail.css"

function UserDetail() {
  const id = useParams()
  const [user, setUser] = useState({})
   
  useEffect(() => {
      userData()
  }, [])

  async function userData() {
      let detailURL = `${baseURL}/${id.id}`
      let response = await axios.get(detailURL, config)
      setUser(response.data)

  }
  console.log(user)
  
  if (user.fields) {
    return (
      <div className="user-card">
        <div className="userCard">
          <img src={user.fields.profilePic} height={300} mode="fit" alt="profile pic" />
          <h2>{user.fields.username}</h2>
          <p><em>{user.fields.bio}</em></p>
        </div>
        <div className="postHeader">
          <strong>Posts:</strong>
        </div>

        <div className="status-posts">
          <p><em>{user.fields.username} posted on {user.fields.postDate}</em></p>
          <h3>{user.fields.statusText}</h3>
          <div className="postBtns">
            <button>Like</button>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </div>
      </div>
    )
  }
  return <div>Loading...</div>
}

export default UserDetail