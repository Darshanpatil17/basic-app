import AppStore from "/AppStore.avif"
import GooglePlay from "/GooglePlay.avif"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
export default function Footer() {
    return (
        <div style={{ backgroundColor: "rgb(198, 194, 193)" }}>
            <footer style={{ marginLeft: "300px", marginRight: "110px", marginTop: "80px", display:"flex",justifyContent:"space-evenly" ,padding:"50px" }}>
                <div>
                    <h1 style={{ color: "rgb(255, 82, 0)", }}>Swiggy</h1>
                    <h3>© 2024 Swiggy Limited</h3>
                    <br></br>
                    <br></br>
                    <br></br>
                    <h3>Social Links</h3>
                    <FacebookIcon />
                    <InstagramIcon />
                    <LinkedInIcon />
                    <WhatsAppIcon />
                    <XIcon />
                </div>
                <div>
                <ul>
                 <h3>Available in:</h3>
                <p>Bangalore</p>
                <p>Gurgaon</p>
                <p>Hyderabad</p>
                <p>Delhi</p>
                <p>Mumbai</p> 
                <p>Pune</p>  
                </ul>
               
                </div>
                <div>
                <ul>
                 <h3> Contact us</h3>
                <p>Help & Support</p>
                <p>Partner with us</p>
                <p>Ride with us</p>
                 
                </ul>
               
                <div style={{marginTop:"50px"}}>
                <ul>
                 <h3>Legal</h3>
                <p>Terms & Conditions</p>
                <p>Cookie Policy</p>
                <p>Privacy Policy</p>
                 
                </ul>
               
                </div>

                </div>
                <div>
                <ul>
                 <h3>Company</h3>
                <p>About Us</p>
                <p>Swiggy Corporate</p>
                <p>Careers</p>
                <p>Team</p>
                <p>Swiggy One</p> 
                <p>Swiggy Instamart</p>  
                <p>Swiggy Dineout</p>  
                <p>Swiggy Genie</p>  
                <p>Minis</p>  
                </ul>
               
                </div>
            </footer>
            <div style={{ backgroundColor: "rgb(198, 194, 193)",borderTop:"2px solid rgb(105, 104, 103)",marginTop:"30px",display:"flex",alignItems:"center"}}>
                <h2 style={{color:"rgb(69, 69, 68)", marginLeft:"230px",height:"100px"}}>For better experience, download the Swiggy app now</h2>
                <img style={{height:"70px",marginLeft:"20px"}} src={AppStore}></img>
                <img style={{height:"70px",marginLeft:"20px"}} src={GooglePlay}></img>
            </div>
        </div>
    )
}