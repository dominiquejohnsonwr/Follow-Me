import axios from 'axios'
import React from 'react'
import { Link } from "react-router-dom"
import "./UserList.css"
import {baseURL, config} from "../services"


function UserList(props) {

  let data = props.user.fields

  async function handleDelete() {
    let deleteURL = `${baseURL}/${props.user.id}`
    await axios.delete(deleteURL, config)
    props.getData()
  }


  return (

    <div className="list-container">
        <div className="user-list">
          <div className="userListImg">
            <img src={data.profilePic} height={150} width={150} mode="fit" alt="profile pic" />
          </div>
      
          <div className="userListData">
            <h3>{data.username}</h3>
            <p><em>{data.bio}</em></p>
          </div>
        
          <div className="btns">
            <div className="followBtn">
              <Link to={`/view/${props.user.id}`}>
                <button>Follow Me</button>
              </Link>
            </div>
      
          <div className="deleteBtn">
            <button onClick={handleDelete}>Delete User</button>
          </div>
        </div>
      </div>
      <footer></footer>
    </div>
      
  )
}

export default UserList