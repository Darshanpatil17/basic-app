
import "./header.css"

import logo from "/Swiggy_logo.png"

import LightModeIcon from '@mui/icons-material/LightMode';

<link
    rel="stylesheet"
    href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>
import * as React from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

import Login from "./login"
function Mainheader() {
  return (
    <div>
       <div className='header'> 
                <a href="/"><img style={{ height: 60, marginLeft: 70 }} src={logo} className='log'></img></a>
                <div style={{display:"flex",marginLeft:"300px"}}>
                <a href="/corporate" style={{textDecoration:"none"}}><p style={{marginTop:"40px",textDecoration:"none"}}>Swiggy Corporate</p></a>
                <p style={{marginTop:"40px"}}>Contact us</p>
                <a style={{marginTop:"40px", marginLeft:"20px"}}><LightModeIcon/></a>
                <p style={{ border: "2px solid white", padding: "15px", borderRadius: "10px" }}>Get the App</p>
               <Button onClick={()=>{
                document.getElementById("my_modal_3").showModal()}}
                 variant="contained" style={{ backgroundColor: "black", height: "50px", marginLeft:"50px",marginTop:"20px" }} endIcon={<SendIcon />}>Login </Button> <Login/>
                </div>
            </div>
    </div>
  )
}

export default Mainheader
