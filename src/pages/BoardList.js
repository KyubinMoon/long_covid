import React from 'react'
import { Link } from 'react-router-dom'
import '../css/boardList.css'

const BoardList = ({ posts }) => {
  return (
    <div className='boardList'>
      <button>
        <Link to='/boardwrite'>
          Write Post
        </Link>
      </button>
      {
        posts.length === 0
          ?
          <div className='subTitle'>There's no post.</div>
          :
          posts.map(post => {
            return (
              <div key={post.id}>
                <div>
                  <Link to='/boardView'><h2 className='postTitle'>{post.title}</h2></Link>
                  <p className='postUsername'>{post.username}</p>
                  <p className='postBody'>{post.body}</p>
                  <br/>
                </div>
                <hr className='articleHr'/>
                </div>
            )
          })
      }


    </div>
  )
}

export default BoardList