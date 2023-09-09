import React, { useState } from 'react'
import { useGetPostsQuery, useNewPostMutation } from './redux/api'

const App = () => {

  const { isLoading, data } = useGetPostsQuery("")
  const [newPost] = useNewPostMutation()

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")


  const addPost = (e) => {
    e.preventDefault();

    const post = {
      title,
      body: description,
      id: Math.random() * 100
    }

    newPost(post)
    setTitle("")
    setDescription("")
  }

  return (
    <div>
      <h1 style={{ margin: "10px" }}>Add Post</h1>
      <form style={{ margin: "10px" }} onSubmit={addPost} className="addPostForm">
        <input type="text" placeholder="Post title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="text" placeholder="Post description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <button>Add</button>
      </form>
      <h1 style={{ margin: "10px" }}>Posts</h1>
      {isLoading ? <div style={{ margin: "10px" }}>Fetching ...</div> : data?.map((post, index) => (
        <div key={index} style={{ border: "2px solid black", margin: "10px", padding: "5px" }}>
          <h3>{post.title}</h3>
          <span>{post.body}</span>
        </div>
      ))}
    </div>
  )
}

export default App