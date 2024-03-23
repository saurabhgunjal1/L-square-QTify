import React from 'react'
import { useState,useEffect } from 'react'
import { useSwiper } from 'swiper/react'
import { ReactComponent as LeftArrow } from '../../assets/LeftArrow.svg';
import "./CarouselLeftNavigation.css"

export default function CarouselLeftNavigation  ()  {
    const swiper = useSwiper();
    const [isBeginning,setIsBeginning] = useState(swiper.isBeginning)

    useEffect(() => {
        swiper.on("slideChange", function (){
            setIsBeginning(swiper.isBeginning)
        })
    },[])
  return (
    <div className="leftnavigation">
        {!isBeginning && <LeftArrow onClick={() => swiper.slidePrev()}/>}
    </div>
  )
}