import React from 'react'
import wave from "../../../src/assets/wave.png"
import "./Footer.css"
// import img from "../../../src/assets/IMDB_Logo_2016.svg.png";
const Footer = () => {
  return (
    <div className='footer'>
        <img src={wave} alt="wavewa" />
        <div className='social'><h1>Gilli Gilli</h1>
        </div>
        
    </div>
  ) 
}

export default Footer