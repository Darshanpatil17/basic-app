
import pizza from "/Pizza.avif"
import Biryani from "/Biryani.avif"
import Burger from "/Burger.avif"
import Chinese from "/Chinese.avif"
import CholeBhature from "/Chole Bhature.avif"
import Dosa from "/Dosa.avif"
import Momo from "/Momo.avif"
import Noodles from "/Noodles.avif"
import Pakoda from "/Pakoda.avif"
import PureVeg from "/Pure Veg.avif"
import Rolls from "/Rolls.avif"
import Salad from "/Salad.avif"
import Samosa from "/Samosa.avif"
import Shawarma from "/Shawarma.avif"
import "./container.css"
import vegtable from "/vegtable.avif"
import milk from "/milk.avif"
import gehu from "/gehu.avif"
import masala from "/masala.avif"
import kurkure from "/kurkure.avif"
import coconuts from "/coconuts.avif"
import ghee from "/ghee.avif"
import banner from "/banner.avif"
export default function Container() {
    return (
        <>
        <div style={{ marginLeft: "110px", marginRight: "110px", marginTop: "100px" }}>
            <div>
                <h2>Order our best food options</h2>
                <div className="foodblok">
                    <img src={pizza}></img>
                    <img src={Biryani}></img>
                    <img src={Burger}></img>
                    <img src={Chinese}></img>
                    <img src={CholeBhature}></img>
                    <img src={Dosa}></img>
                    <img src={Momo}></img>
                </div>
                <div className="foodblok">
                    <img src={Noodles}></img>
                    <img src={Pakoda}></img>
                    <img src={PureVeg}></img>
                    <img src={Rolls}></img>
                    <img src={Salad}></img>
                    <img src={Samosa}></img>
                    <img src={Shawarma}></img>
                </div>
            </div>
            <h2 style={{marginTop: "100px"}}>Shop groceries on Instamart</h2>
                <div className="foodblok">
                    <img src={vegtable}></img>
                    <img src={coconuts}></img>
                    <img src={milk}></img>
                    <img src={gehu}></img>
                    <img src={masala}></img>
                    <img src={ghee}></img>
                    <img src={kurkure}></img>
                </div>
              
        </div>
        
        <img style={{height:"242px", width:"100%",marginTop:"100px"}} src={banner}></img>
        </>
        
    )
}