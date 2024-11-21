import React from 'react'
import homeImage from './Hombag.png';
import './style.css'
const Home = () => {
  return (
    <div className="container">
      <div className='Logo'>
        <h1 className='main'>L T S</h1>
        <p >Lauggage Tracking System</p>
        <p className='Animate'>Track Your Lauggage With Ease</p>
      </div>
     <div
    className="homepage">
      <img src={homeImage} alt="homeImage" />
    </div>
</div>
  )
}

export default Home