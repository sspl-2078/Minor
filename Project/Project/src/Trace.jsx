
import React from 'react'
import Img from './laug.webp'
import './style.css'
const Trace = () => {
 
  const pagestyle = {
    display: 'flex',       // Corrected the syntax, use strings for values
    flexWrap: 'wrap',      // Corrected 'flex-wrap' to 'flexWrap'
    gap: '10px',           // Corrected the 'gap' property
    padding:'10px'
    
  };
  const cardStyle = {
    display:'flex',
    flexDirection:'column',
    padding: '15px',
    width: '300px',
    height: '320px',  // Corrected 'min-height' to 'minHeight'
    border: 'solid black 2px',
    alignItems:'center',
    gap:'5px',
  };
  const image ={
    width:'90px',
    
  }
 const p ={
  overflow:'auto',
  height:'40px',
 
 }
const button ={
  marginTop:'30px',
  textAlign:'center',
  fontWeight:'bolder',
}

  return (
   
    <div className='trace' style={pagestyle}>
          <div className="card " style={cardStyle}>
            <div className="photos">
              <img src={Img} alt="lost" style={image} />
            </div>
            <div className="details">
              <h3>Lost</h3>
              <p style={p}>Lorem ipsum dolor sit amet consectetur, adipisicing lorem20 elit. Officiis, tempore!</p>
              <h4>Uploaded by:</h4>
              <h4>Flight:</h4>
              
              <></>
              <></>
              <></>
              <></>
              <></>
              <button style={button}>Claim</button>
            </div>
          </div>
    </div>
   
  )
}

export default Trace