import React from 'react'
import axios from "axios"
import { baseURL, config } from "../services"

function UserDetail(props) {


  
let data = props.user.fields

  async function userData() {
    let detailURL = `${baseURL}/${props.user.id}}`
    await axios.get(detailURL, config)
    console.log(data.username)
    
  }
    
  return (
    <div className="user-card">
      <h3>{data.username}</h3>
      <h5><em>{data.bio}</em></h5>

    </div>
  )
}

export default UserDetail