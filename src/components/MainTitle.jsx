import React from 'react'
import "../css/mainTitle.css"
import logo from "../asset/logo.png"

const MainTitle = () => {
  return (
    <div className='mainTitle'>
      <img className='mainLogo' src={logo} alt="Main Logo"/>
      {/* <h1>Long COVID</h1> */}
      </div>
  )
}

export default MainTitle