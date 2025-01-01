import React from 'react'
import "./signup.css"
import Footer from './footer'

import Mainheader from './mainheader'
function Signup() {
  return (
   <>
  <Mainheader/>
   <div className="signup-container">
   <button style={{marginLeft:"90%"}}><a href='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 ">✕</a></button>
      <h2>Create Account</h2>
      <form className="signup-form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
         
            placeholder="Enter username"
          />
          
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
        
            placeholder="Enter email"
          />
         
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
        
            placeholder="Enter password"
          />
         </div>

    
``
        <button type="submit" className="signup-btn">Sign Up</button>
        <p style={{color:"black", fontSize:"15px"}}>you have a account? <span style={{color:"rgb(255, 82, 0)",textDecoration:" 2px underline"}}><a href='/'>Login</a></span></p>
      </form>
    </div>
      <Footer/>
   </>
  )
}

export default Signup
