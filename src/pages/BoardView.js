import {useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom';

const BoardView = () => {
  const {postID} = useParams()
  const [currentPost, setCurrentPost] = useState({})
  const {username, title, body} = currentPost
  useEffect(() => {
    const posts=[
      {
        id:1,
        username: 'John',
        title:'FirstPost',
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      },
      {
        id:2,
        username: 'Jane',
        title:'Second Post',
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      },
      {
        id:3,
        username: 'John',
        title:'Third Post',
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      },
      {
        id:4,
        username: 'Sally',
        title:'Fourth Post',
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      }

    ]
    const foundPost = posts.find(post => parseInt(postID) === post.id)
    setCurrentPost(foundPost)
  },[postID])
  return (
    <div className='formBoardView'>
        <form>
            <p className='subTitle'>
                {title}
            </p><br/>
            <p>Username :  {username}</p><br/><br/>
            <p>
                {body}
            </p>
            <br/><br/>
            <button type="submit"><Link to='/boardlist'>Cancel</Link></button>
            <button type="submit">Modify</button>
            <button type="submit">Delete</button>
        </form>
    </div>
  )
}

export default BoardView