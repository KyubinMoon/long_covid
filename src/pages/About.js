import React from 'react'
import ReactPlayer from "react-player"
import '../css/about.css'
import longCOVID from "../asset/longCOVID.jpg"

const About = () => {
  return (
    <div className='about'>
      <div className='subTitle'>What is Long COVID</div>
      <img className='imageSize' src={longCOVID} alt="long COVID"/>
      <div className='source'>Christopher D. Vélez, MD. “Can Long Covid Affect the Gut?” Harvard Health, 
      20 Mar. 2023, https://www.health.harvard.edu/blog/can-long-covid-affect-the-gut-202303202903.</div>
    <p>
        Long-term symptoms experienced after the SARS-CoV-2 infection. The symptoms are not only carduiresourator
        related,
        but also are related to neropsychiatric, gastrointestinal, and so on. According to WHO, shortness of breath,
        brain fog, fatigue, and cough are
        most commonly experienced. Due to its variety, it is not still clear to define whether it is post COVID-19
        condition, and
        further research is needed for clarification. Further information can be found at <a className='article' href={"https://ncv.kdca.go.kr/hcp/page.do?mid=0102"}>
          <b>KDCA</b>.</a>
    </p>
    <div className='subTitle'>Related Videos</div>
    <div className='videos'>
      <ReactPlayer 
        url="https://www.youtube.com/watch?v=fF8xdaSzSMg"
      /> 
      <ReactPlayer
        url="https://www.youtube.com/watch?v=7ZF6XS2cpiw"
      /><br/></div>
      <div className='videos'>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=0w5XoN7GH-o"
      /><br/>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=5YDMTfesQWM"
      />
    </div>
     




    </div>
  )
}

export default About