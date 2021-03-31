import React from 'react'
import axios from "axios"
import { baseURL, config } from "../services"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import "./UserDetail.css"

function UserDetail(props) {
  const id = useParams()
  const [user, setUser] = useState({})
  const [formOpen, setFormOpen] = useState(false)
  const [input, setInput] = useState("")
  

  function toggleForm() {
    setFormOpen(prevState => !prevState) 
  }
  
  useEffect(() => {
      userData()
  }, [])

  async function userData() {
      let detailURL = `${baseURL}/${id.id}`
    let response = await axios.get(detailURL, config)
    console.log(typeof response.data.fields.post)
    response.data.fields.post = JSON.parse(response.data.fields.post)
    setUser(response.data.fields)
  }

  function handleChange(event) {
    let { value } = event.target
    setInput(value)
  }

  function formatPost() {
    let newPost = {}
    let time = new Date()
    newPost.text = input
    newPost.createdTime = time
    newPost.likes = 0
    return newPost
  }

  async function handleSubmit(event) {
    event.preventDefault()
    let post = user.post
    post.push(formatPost())
    post = JSON.stringify(post)
    let data = await axios.put(`${baseURL}/${id.id}`, { fields: { ...user, post } }, config)
    // console.log(data.data)
    userData()
  }

  async function handleDelete(index) {
    console.log(index)
    let post = user.post
    post.splice(index, 1)
    post = JSON.stringify(post)
    let data = await axios.put(`${baseURL}/${id.id}`, { fields: { ...user, post } }, config)
    console.log(data.data)
    userData()
  }

  async function handleLike(index) {
    console.log(index)
    let post = user.post
    post[index].like += 1
    post = JSON.stringify(post)
    let data = await axios.put(`${baseURL}/${id.id}`, { fields: { ...user, post } }, config)
    console.log(data.data)
    userData()
  }
  
  if (user.username) {
    return (
      <div className="user-card">
        <div className="userCard">
          <img src={user.profilePic} height={300} mode="fit" alt="profile pic" />
          <h2>{user.username}</h2>
          <p><em>{user.bio}</em></p>
        </div>
        
        <div className="postHeader">
          <strong>Posts:</strong>
          <button onClick={toggleForm}>New Post</button>
        </div>

        
        {user.post.map((post, index) => <div className="status-posts">
          <p><em>{user.username} posted on {post.createdTime}</em></p>
          <h4>{post.text}</h4>
        
          <div className="postBtns">
            <button onClick={() => handleLike(index)}>Like</button>
            <button>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete Post</button>
          </div>
          <div className="like-counter">{post.like} total likes</div>
        </div>)}

        <div className="post-component">
          {formOpen && <div>
            <form onSubmit={handleSubmit}>
               <label htmlFor='post'>New post: </label>
                 <textarea
                  type='textarea'
                  name='post'
                  id='post'
                  value={input}
                  onChange={handleChange}
                  rows={3}
                />
                
                <input
                  type='submit'
                  id='newPostSubmit'                  
                />
            </form>
            </div>
          }          
        </div>
      </div>
    )
  }
  return <div>Loading...</div>
}

export default UserDetail