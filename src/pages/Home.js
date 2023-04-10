
import React from 'react'
import FDACovid from "../asset/FDACovid.png"
import DV1 from "../asset/DV1.png"
import DV2 from "../asset/DV2.png"
import DV3 from "../asset/DV3.png"
import DV4 from "../asset/DV4.png"
import DV5 from "../asset/DV5.png"
import DV6 from "../asset/DV6.png"
import DV7 from "../asset/DV7.png"
import DV8 from "../asset/DV8.png"
import '../css/home.css'

const Home = ({username}) => {
  return (
    <>
    <div className='subTitle'><br/>
      <b>Welcome, {username}!</b>
    </div>
    <br/>
    <div className='subTitle'> Purpose of This Website</div>
    <img className='imageSize' src={FDACovid} alt="FDA COVID"/>
      <div className='source'>“COVID-19 Test Basics.” U.S. Food and Drug Administration, FDA, 1 Apr. 2023,
       https://www.fda.gov/consumers/consumer-updates/kobideu-19-covid-19-geomsa-gibon-sahang. </div> 
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
    <br/><br/><br/>

    <div className='subTitle'> Data Visualizations Created by Using the Survey Sample of the Website</div>
    
    <img className='dataVisImg' src={DV1} alt="DV1"/>
    <img className='dataVisImg' src={DV3} alt="DV3"/>
    <img className='dataVisImg' src={DV4} alt="DV4"/>
    <img className='dataVisImg' src={DV2} alt="DV2"/>
    <img className='dataVisImg' src={DV5} alt="DV5"/>
    <img className='dataVisImg' src={DV6} alt="DV6"/>
    <img className='dataVisImg' src={DV7} alt="DV7"/>
    <img className='dataVisImg' src={DV8} alt="DV8"/>



    </>
  )
}
Home.defaultProps = {
  username: 'Everyone'
}
export default Home
 