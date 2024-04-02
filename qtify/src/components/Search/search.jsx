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



    useEffect(() => {
       
            setAllData(data.data);
   
    });
    
const fetchdata=(value)=>{
    const results = allData.filter((data)=>{
        return (
            value && data && data.title && data.title.toLowerCase().includes(value) && data.follows
        );
    })
        setResults(results)
    
   
    
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
