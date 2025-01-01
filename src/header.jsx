import "./header.css"

import logo from "/Swiggy_logo.png"
import Veggiesnew from '/Veggies_new.avif'
import sushireplace from "/Sushi_replace.avif"
import card1 from '/card1.avif'
import card2 from '/card2.avif'
import card3 from '/card3.avif'
import LightModeIcon from '@mui/icons-material/LightMode';
import SearchIcon from '@mui/icons-material/Search';
import card4 from '/card4.avif'

import InputAdornment from '@mui/material/InputAdornment';




import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
<link
    rel="stylesheet"
    href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>
import * as React from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from "react-router-dom"
import Login from "./login"
export default function Header() {
  
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
            <div className="header2">
                <img src={Veggiesnew} style={{ height: "500px" }}></img>
                <div style={{ width: "900px" }}>
                    <h1 style={{ fontSize: "48px", color: "white", marginLeft: "150px" }}>Order food & groceries. Discover <br></br>&nbsp;&nbsp;&nbsp; best restaurants. Swiggy it!
                    </h1>
                    <div style={{ marginLeft: "150px" }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', '& > :not(style)': { m: 1 } }}>
                            <TextField
                                style={{ backgroundColor: "white", width: "300px", borderRadius: "10px" }}
                                id="demo-helper-text-misaligned"
                                label="Enter ypur delivery location"
                                type="location"
                                required
                                slotProps={{
                                    input: {
                                        endAdornment: <InputAdornment position="end"><KeyboardArrowDownIcon/></InputAdornment>,
                                    },
                                  }}
                            />
                           
                           
            

                            <TextField style={{ backgroundColor: "white", width: "500px", borderRadius: "10px" }} id="demo-helper-text-misaligned-no-helper" label="Search for restaurant, item or more"
                            slotProps={{
                                input: {
                                    endAdornment: <InputAdornment position="end"><SearchIcon/></InputAdornment>,
                                },
                              }}
                            />
                        </Box>
                    </div>
                    <div style={{display:"flex",justifyContent:"space-evenly", marginTop:"30px"}}>
                     <img style={{height:"350px",width:"270px"}} src={card1}></img>
                        <img style={{height:"350px",width:"270px"}} src={card2}></img>
                        <img style={{height:"350px",width:"270px"}} src={card3}></img>
                        <img style={{height:"350px",width:"270px"}} src={card4}></img>
                    </div>

                    
                </div>

                <img src={sushireplace} alt="" style={{ height: "500px", marginLeft: "95px" }} />
            </div>
        </div>
    )
}