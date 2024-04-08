import React from 'react'
import "./Faq.css"
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';


export default function Faq() {
    

    return (
        <div className='faqdiv'>
            <h1 className='faqsH1'>FAQs</h1>
            <div>
            <Accordion className='faqsaccordian'> 
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          className='faqsummury'

        >
          Is QTify free to use?
        </AccordionSummary>
          className='faqsummury'
        <AccordionDetails className='faqaccdetail'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit..
        </AccordionDetails>
      </Accordion>


      <Accordion className='faqsaccordian'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          className='faqsummury'
        >
          Can I download and listen to songs offline?
        </AccordionSummary>
        <AccordionDetails className='faqaccdetail'>
        Sorry, unfortunately we don't provide the service to download any songs.
        </AccordionDetails>
      </Accordion>
      </div>    
        </div>
    )
}
