
import swiggy from "/logo2.jpg"
import Footer from './footer'
import banner from "/banner.avif"
import "./corparate.css"
import Login from "./login"
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
function Corparate() {
    return (
        <>
            <div>
                <div className='header3'>

                <a href="/"> <img style={{ height: 90,width:"150px", marginLeft: 70 }} src={swiggy} alt="logo" /></a>
                <h3 style={{color:" rgb(255, 82, 0)"}}>About Swiggy</h3>
                 <h3>Our Businesses</h3>  
                <h3>Delivering For Everyone</h3>
                <h3>Newsroom</h3>
                <h3>Investor Relations</h3>
                
                <h3 style={{color:" rgb(255, 82, 0)"}}>Contact Us</h3>
                <Button onClick={()=>{
                document.getElementById("my_modal_3").showModal()}}
                 variant="contained" style={{ backgroundColor: "black", height: "50px", marginLeft:"50px",marginTop:"20px" }} endIcon={<SendIcon />}>Login </Button> <Login/>



                 </div>
                 <div>
                    <h1 style={{textAlign:"center", marginTop:"50px",color:"rgb(255, 82, 0)"}}>ABOUT US</h1>
                    <p style={{textAlign:"center", fontSize:'40px',color:"grey"}}>
Swiggy is a new-age consumer-first organization offering an easy-to-use convenience platform, accessible through a unified app.</p>
<h1 style={{textAlign:"center", marginTop:"50px",color:"rgb(255, 82, 0)"}}>--GET TO KNOW US--</h1>
                 <div style={{margin:"150px", display:"flex"}}> <p style={{width:"50%",fontSize:"20px",marginTop:"50px" ,fontWeight:"500"}}>Our mission is to elevate the quality of life of the urban consumer by offering unparalleled convenience. Convenience is what makes us tick. It’s what makes us get out of bed and say, “Let’s do this.</p>
                 <img style={{marginLeft:'100px'}} src="/Mission.png"></img>
                 </div>
                 <div style={{margin:"150px", display:"flex"}}> <p style={{width:"50%",fontSize:"20px",marginTop:"50px" ,fontWeight:"500"}}>Being among the first few entrants, Swiggy has successfully pioneered the hyperlocal commerce industry in India, launching Food Delivery in 2014 and Quick Commerce in 2020. Due to the pioneering status of Swiggy, it is well-recognised as a leader in innovation in hyperlocal commerce and as a brand synonymous with the categories it is present in.
                 </p>
                 <img style={{marginLeft:'100px',width:"400px"}} src="/Group.webp"></img>
                 </div>
                  <img style={{height:"242px", width:"100%",marginTop:"100px"}} src={banner}></img>
                 
                  <h1 style={{textAlign:"center", marginTop:"50px",color:"rgb(255, 82, 0)"}}>GET IN TOUCH WITH US</h1>
                  <div style={{display:"flex", textAlign:"center" ,justifyContent:"space-around"}}><div><h3>Head Office Address:</h3><br></br>
<p>Swiggy Limited<br></br>
No. 55 Sy No 8 to 14 I & J Block – Ground Floor, Embassy Tech Village |<br></br> Outer Ring Road, Devarbisanahalli,  Bengaluru – 560103</p></div>
<div><h3>For help and support:</h3>
<p style={{marginTop:"50px"}}>
Email : support@swiggy.in</p></div></div>
                  
                 </div>
                 <Footer/>
            </div>
        </>
    )
}

export default Corparate
