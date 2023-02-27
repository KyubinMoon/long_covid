
import React from 'react'

const Home = ({username}) => {
  return (
    <>
    <div className='subTitle'>
      <b>Welcome, {username}!</b>
    </div>
    <br/>
    <div className='subTitle'> Purpose of This Website</div>
<br/>
    <div className='question'> <b>Would creating a community for post-COVID teenagers allow them to feel supported and included, and give the
        potential for future
        long-COVID research? </b>
    </div>
    <br/>
    <p>
        This website is created to provide a long COVID commuity for teenagers. After the acute infection of SARS-CoV-2
        in 2022,
        I started to experience long COVID symptoms. Even though I visited doctors, I couldn't get effective treatment,
        and I felt I was the
        only student who was having the aftereffects. However, after reading long COVID research articles, I found out
        that the long COVID symptoms
        apppear quite frequently for teenagers and adolescents. To provide an online community where teenagers can share
        their experiences and
        communicate to make them feel supported and included, and collect the data in easier way for researchers, I
        decided to create this website.
    </p>
    </>
  )
}
Home.defaultProps = {
  username: 'Everyone'
}
export default Home
 