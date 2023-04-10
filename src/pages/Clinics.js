import React from 'react'
import '../css/clinics.css'

const Clinics = () => {
  return (
    <>
    <br/><br/>
      <div className='subTitle'> Korean Hospitals Providing Long COVID Treatment Services <br/>
      코로나 후유증 클리닉 서비스를 제공하는 병원들 </div>
      <div className='googleMapFrame'>
      <iframe src="https://www.google.com/maps/d/embed?mid=10RhM1q-uwvtl8HETdITt2CGTsAGmUzs&ehbc=2E312F" width="100%"
              height="600px" title="googleMapFrame"></iframe>
      </div>
     </>
  )
}

export default Clinics