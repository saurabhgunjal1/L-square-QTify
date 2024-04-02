// import React, { useEffect, useState } from 'react'
// import { ReactSearchAutocomplete } from 'react-search-autocomplete'
// import axios from 'axios'
// import "./search.css"
// import searchicon2 from "../../assets/search-icon.svg"
// function Searchbar(data) {
//     const [allData,setAllData]=useState([])
//     console.log(data.data.data)
//         useEffect(() => {
//             setAllData(data.data.data);
//         }, []);
//     const [searchQuery, setSearchQuery] = useState('');
//     const [suggestions, setSuggestions] = useState([]);
//     const handleInputChange = (event) => {
//         const value = event.target.value;
//         setSearchQuery(value);
//         if (value.trim() === '') {
//           setSuggestions([]);
//         } else {
//           const filteredSuggestions = allData.filter(suggestion =>
//             suggestion.toLowerCase().includes(value.toLowerCase())
//           );
//           setSuggestions(filteredSuggestions);
//         }
//       };
    
//       const handleSuggestionClick = (suggestion) => {
//         setSearchQuery(suggestion);
//         setSuggestions([]);
//       };
//     return (
//         <div className="searchcontainer">
//             <input type="text"
//                 placeholder="Search a album of your choice"
//                 className="inputbar"
//                 value={searchQuery}
//                 onChange={handleInputChange}
//             />
//              <ul className='UL'>
//         {suggestions.map((suggestion, index) => (
//           <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
//             {suggestion}
//           </li>
//         ))}
//       </ul>
//             <button type="submit" className="searchbtn"><img src={searchicon2} alt="img" className="searchicon" /></button>

//         </div>
//     )
// }

// export default Searchbar














import React, { useEffect, useState } from 'react';
import "./search.css";
import searchicon2 from "../../assets/search-icon.svg";
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import axios from 'axios';
import { title } from 'process';

function Searchbar({ data ,setResults}) {
    const [allData, setAllData] = useState([]);
    const [input, setInput] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    // console.log(typeof(data.data))
    // console.log(data.data)


    useEffect(() => {
       
            setAllData(data.data);
   
    });
    // console.log(allData)
const fetchdata=(value)=>{
    const results = allData.filter((data)=>{
        return (
            value && data && data.title && data.title.toLowerCase().includes(value) && data.follows
        );
    })
        setResults(results)
    
    // console.log(results);
    
}


const handlechange =(value)=>{
    setInput(value);
    fetchdata(value);
}


    return (
        <div className="searchcontainer">
            <input
                type="text"
                placeholder="Search an album of your choice"
                className="inputbar"
                value={input}
                onChange={(e)=>handlechange(e.target.value)}
            />
            <button type="submit" className="searchbtn"><img src={searchicon2} alt="img" className="searchicon"/></button>
        </div>
    );
}

export default Searchbar;
