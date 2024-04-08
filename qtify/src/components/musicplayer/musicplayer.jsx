import React from 'react'
import { useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import song from "./../../assets/leo.mp3" 
import defaultimg from "./../../assets/defaultalbum.jfif" 

import "./musicplayer.css"
export default function Musicplayer(data) {
    const handleShowSkipControls = () => {
        alert('This is the default song.');
    };
    return (
        <div className='musicplayertopdiv'>
        <div className='songdetaildiv'>
            <img src={defaultimg} alt="album img" className='defaultalbumimg'/>
            <p className='songnameh6'>Song name</p>
        </div>
        <div>
            <AudioPlayer
            className='audioplayer'
        

        src={song}
        onShowSkipControls={handleShowSkipControls}
         />
        </div>
        </div>
    )
}
