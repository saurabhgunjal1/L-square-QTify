import { useState,useEffect } from "react";
import React from "react";
import { fetchfilters } from "../../api/api";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import "./Filters.css"
function Tabbox(props)
{
    const{children,value,index,...other}=props;

    return(
        <div
         role="tabbox"
         hidden={value!==index}
         id={`simple-tabbox-${index}`}
         aria-labelledby={`simple-tab-${index}`}
         {...other}
        >
            {value===index &&(
                <Box sx={{p:3}}>
                 <Typography>{children}</Typography>
                 </Box>
            )} 
        </div>
    )
}

function Filter({filters,selectedFilterIndex,setSelectedFilterIndex}){
  console.log(selectedFilterIndex)
    const handleChange=(event,newvalue)=>{
        setSelectedFilterIndex(newvalue)
    }
    
    function allyProps(index)
    {
        return{
            id:`simple-tab-${index}`,
            "aria-controls":`simple-tabbox-${index}`,
        }
    }

    return(
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        
            <Tabs
             value={selectedFilterIndex}
             onChange={handleChange}
             aria-label="basic tabs"
             TabIndicatorProps={
                {
                    style:{
                        backgroundColor:"var(--css-primary)",
                        height:"4px",
                        borderRadius:"2px"
                    },
                }}
                >
                  {filters.map((ele,idx)=>(
                       <Tab className="tab" label={ele.label} {...allyProps(idx)}
                       sx={{
                        color:" var(--color-white)", 
                    }}/>
                  ))}
                </Tabs>
             
        
        </Box>
        </Box>
    )
}

export default Filter;