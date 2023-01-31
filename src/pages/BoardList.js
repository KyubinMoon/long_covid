import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../css/boardList.css'


const BoardList = ({isLogged, posts }) => {
  const navigate = useNavigate()
  const handleWrite = () => {
    if (isLogged){
      navigate('/boardWrite')
    }else{
      navigate('/login')
    }
  }
  return (
    <div className='boardList'>
      <div className='postBtnContainer'>
      <button className='postBtn' onClick={handleWrite}>
          Write Post
      </button>
      </div>
      {
        posts.length === 0
          ?
          <div className='subTitle'>There's no post.</div>
          :
          posts.map(post => {
            return (
              <div key={post.id}>
                <div>
                  <Link to={`/boardView/${post.id}`}><h2 className='postTitle'>{post.title}</h2></Link>
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