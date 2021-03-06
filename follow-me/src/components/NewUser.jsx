import React from 'react'
import axios from "axios"
import { useState } from "react"
import { baseURL, config } from "../services"
import {useHistory} from "react-router-dom"
import './NewUser.css'

function NewUser(props) {
  const [user, setUser] = useState({ username: "", bio: "", profilePic: "", post: "" })
  const history = useHistory()

  function formatPost() {
    let newPost = {}
    let time = new Date()
    newPost.text = user.post
    newPost.createdTime = time
    newPost.likes = 0
    return newPost
  }

  function handleChange(event) {
    let { value, id } = event.target
    setUser((prevState) => {
      return { ...prevState, [id]: value }
    })
  }

  async function handleSubmit(event) {
    event.preventDefault()
    let post = []
    post.push(formatPost())
    post = JSON.stringify(post)
    await axios.post(baseURL, { fields: { ...user, post } }, config)
    props.getData()
    history.push("/")
  }

  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='username'>Username: </label>
        <input
          type='text'
          name='username'
          id='username'
          value={user.username}
          onChange={handleChange}
        />
        
        <label htmlFor='bio'>Bio: </label>
        <textarea
          type='textarea'
          name='bio'
          id='bio'
          value={user.bio}
          onChange={handleChange}
          rows={2}
        />
        
        <label htmlFor='profilePic'>Profile Picture URL: </label>
        <input
          type='text'
          name='profilePic'
          id='profilePic'
          value={user.profilePic}
          onChange={handleChange}
        />

        <label htmlFor='post'>Submit your first post: </label>
        <textarea
          type='textarea'
          name='post'
          id='post'
          value={user.post}
          onChange={handleChange}
          rows={3}
        />

       <input
          type='submit'
          id='submit'          
        />
      </form>
    </div>
  )
}

export default NewUser