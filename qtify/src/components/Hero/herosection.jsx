import React from "react";
import './herosection.css'
import heroimage from "../../assets/hero_headphones.png"
const Herosection=()=>{
    return(
<div className="herocontainer">
<div className="heading">
    <h1 className="headingtext">100 Thousand Songs, ad-free</h1>
    <h1 className="headingtext">Over thousands podcast episodes</h1>
    </div>
    <img src={heroimage} alt="img" className="headphoneimg"/>

</div>
    )
}

export default Herosection