import React, { useEffect, useState } from "react";
import "./Section.css"

import { CircularProgress } from "@mui/material";
import Card from "../Card/card";
// import { fecthFilters } from "../../Api/api";
import { ToggleButton } from "@mui/material";
import Carousel from "../Carousel/Carousel";
import Filter from "../Filters/filters";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

export default function Section({title,data,filterSource,type,showToggle}){
    const[filters,setFilters]=useState([{key:"all",label:"All"}]);
    const[selectedFilterIndex,setSelectedFilterIndex]=useState(0);
    const[carouseltoggle,setCarousel]=useState(true);

    const handleToggle=()=>{
        setCarousel((prevState)=>!prevState);
    }

    useEffect(()=>{
        if(filterSource){
            filterSource().then((response)=>{
                 const {data}=response

                 setFilters([...filters,...data]);
            })
            
        }
    },[]);

    const showfilters=filters.length>1;
    const cardsToRender=data.filter((card)=>showfilters && selectedFilterIndex!==0? card.genre.key===filters[selectedFilterIndex].key:card,
    // console.log(card)

    );
    



    return(
        <div  className="sectionwrapper">
            <div className="header">
                <h3>{title}</h3>
                {showToggle &&
                <h4 className="toggletext" onClick={handleToggle}>
                    {!carouseltoggle ? "Collapse" : "show All"}
                </h4>
                }           
            </div>
            
            {showfilters && (
                <div className="filerWrapper"> 
                    <Filter
                    filters={filters}
                    selectedFilterIndex={selectedFilterIndex}
                    setSelectedFilterIndex={setSelectedFilterIndex}
                   
                    />
                </div>
            )}
            {data.length === 0 ?(
                <CircularProgress/>
            ):(
                <div className="cardwrapper">
                    {!carouseltoggle ? (
                        <div className="wrapper">
                            {cardsToRender.map((ele, index)=>(
                             
                                <Card key={index} data={ele} type={type}/>
                               
                            ))}
                        </div>
                    ):(
                        <Carousel 
                        data={cardsToRender}
                        renderComponent={(data)=><Card data ={data} type={type} key={data.id}/>}
                        />
                    )}
                </div>
            )}
        </div>
    )
}