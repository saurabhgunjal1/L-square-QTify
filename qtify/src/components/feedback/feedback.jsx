import React from 'react'
import { useState } from 'react';
import "./feedback.css"
import CloseIcon from '@mui/icons-material/Close';
export default function Feedback({onClose}) {
    const [description, setDescription] = useState('');

    const handleChange = (event) => {
        setDescription(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onClose();
    };

    const handleClose = () => {
        onClose();
    };
    return (
      <div className='feedbackdiv'>
        <CloseIcon className='closeicon' onClick={handleClose} />

        <h1 className='headingfeedback'>Feedback</h1>
        <form className='fbinputdiv' >
            <input type="text" placeholder='Full name' className='fbinput'/>
            <input type="text" placeholder='Email ID' className='fbinput'/>
            <input type="text" placeholder='Subject'className='fbinput'/>
            <textarea
                    value={description}
                    onChange={handleChange}
                    placeholder="Discription"
                    className="fbinputdescription"
                    rows={5}
                />
                <button type="submit" className='submitbtnfba'>Submit Feedback</button>
        </form>
        
      </div>
    )
}
