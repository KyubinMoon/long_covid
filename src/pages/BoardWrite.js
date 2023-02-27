import {useState} from 'react'
import { Link } from 'react-router-dom'
import '../css/boardWrite.css'

const BoardWrite = ({username}) => {
  const [post, setPost] = useState({title: '', body: ''})
  const { title, body } = post
  const handleWrite = () => {
    alert(`Title: ${title}`)
    alert(`Body: ${body}`)
    alert(`Request to write post.`)
  }
  const handleChange = (event) => { 
    console.log(event.target.name, event.target.value)
    setPost(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value
    }))
  }
  
  return (
    <div className='writeForm'>
      <div className='subTitle'>Write Post 글쓰기</div>
        <form>
            <p>
                Title 제목
            </p>
            <input type="text" name="title" value={title} onChange={handleChange}/><br/><br/>
            <p>User ID 아이디: {username}</p> <br/>
            <p>
                Body 본문
            </p>
            <textarea rows="20" cols="100" name="body" value={body} onChange={handleChange}></textarea> 
            <br/><br/>
            <button type="submit"><Link to='/boardlist'>Cancel 취소</Link></button>
            <button type="submit" onClick={handleWrite}>Submit 확인</button>
        </form>
    </div>
  )
}

export default BoardWrite