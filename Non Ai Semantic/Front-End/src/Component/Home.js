import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div>
    <div>
    <div>
      <img className='background-image' src='./Images/Vector 1 (1).png' alt="Background" />
    </div>
    <div className="container">
      <div className="file-upload-div">
      <div className='forgot-password home-container'>
      <Link to='signup'><button className='btn home-btn'>Sign Up</button></Link>
      <Link to='login'> <button className='btn home-btn'>Sign In</button></Link>
      </div>
      <div className='login-bg-div'>
      <h1 className='w-login'>WELCOME!<br/><span style={{fontSize:'25px'}}>To Upload Document Apllication</span></h1>
      </div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Home
