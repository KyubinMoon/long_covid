
import React from 'react'

const Home = ({username}) => {
  return (
    <div className='subTitle'>
      Welcome, {username}!
    </div>
  )
}
Home.defaultProps = {
  username: 'Everyone'
}
export default Home
 