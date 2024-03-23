import { useSwiper } from 'swiper/react'
import './CarouselRightNavigation.css'
import React from 'react';
import {  useEffect, useState } from 'react'

import { ReactComponent as RightArrow } from '../../assets/RightArrow.svg';

export default function CarouselRightNavigation(){
    const swiper = useSwiper();
    const [isEnd, setIsEnd] = useState(swiper.isEnd);

    useEffect(()=>{
        swiper.on("slideChange", function(){
            setIsEnd(swiper.isEnd);
        });
    },[]);

    return (
        <div className='rightnavigation'>
            {!isEnd && <RightArrow onClick={()=> swiper.slideNext()} />}
        </div>
    )
}