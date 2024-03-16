import React from "react";
import './navbar.css'
// import SearchIcon from '@mui/icons-material/Search';
import LogoImage from "../../assets/logo.png"
import SearchIcon from "../../assets/search.png"
import searchicon2 from "../../assets/search-icon.svg"
const Navbar=()=>{
    return(
        <nav>
            <div >
                <img src={LogoImage} alt="img"  id="logoimg"/>
            </div>


            <div className="searchcontainer">
            <input type="text"
            placeholder="Search a album of your choice" 
            className="inputbar"
            />
            <button type="submit" className="searchbtn"><img src={searchicon2} alt="img" className="searchicon"/></button>
            
            </div>



            <div>
                <button className="feedbackbtn">Give Feedback</button>
            </div>
        </nav>
    )
}

export default Navbar