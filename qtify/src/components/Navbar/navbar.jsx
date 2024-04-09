import React from "react";
import './navbar.css'
// import SearchIcon from '@mui/icons-material/Search';
import LogoImage from "../../assets/logo.png"
import Searchbar from "../Search/search";
import { useState } from "react";
import { SearchResultsList } from "../Search/SearchResultsList";
import Feedback from "../feedback/feedback";

const Navbar=(data)=>{
    // console.log(data)
    const [results, setResults] = useState([]);
    const [showFeedbackForm, setShowFeedbackForm] = useState(false);

    const handleForm = () => {
        setShowFeedbackForm(true);
    }

    const closeFeedbackForm = () => {
        setShowFeedbackForm(false);
    }

    return(
        <nav>
            <div className="logocontainer">
                <img src={LogoImage} alt="img"  id="logoimg"/>
            </div>


            <div>
            <Searchbar data={data} setResults={setResults}/>
            {results && results.length > 0 && <SearchResultsList results={results} />}
            </div>



            <div>
                <button className="feedbackbtn" onClick={handleForm}>Give Feedback</button>
            </div>
            {showFeedbackForm && <Feedback onClose={closeFeedbackForm} />}
        </nav>
    )
}

export default Navbar