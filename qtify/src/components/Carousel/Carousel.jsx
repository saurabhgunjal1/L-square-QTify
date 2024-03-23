import React, { useEffect } from 'react'
import 'swiper/css'
import {Navigation} from 'swiper/modules'
import {Swiper,useSwiper,SwiperSlide} from 'swiper/react'
import "./Carousel.css"
import CarouselLeftNavigation from './CarouselLeftNavigation'
import CarouselRightNavigation from './CarouselRightNavigation'

const Controls = ({data}) => {
    const swiper = useSwiper();

    useEffect(() => {
        swiper.slideTo(0);
    },[data])

    return <></>
}

const Carousel = ({data,renderComponent}) => {
  return (
    <div className="crouselmaindiv">
        <Swiper style={{padding:"0px 20px"}}
        initialSlide={0}
        modules={[Navigation]}
        slidesPerView={"6"}
        spaceBetween={20}
        allowTouchMove
        >
            <Controls data={data}/>
            <CarouselLeftNavigation/>
            <CarouselRightNavigation/>
            {data.map((ele)=>(
                <SwiperSlide>{renderComponent(ele)}</SwiperSlide>
            ))}

        </Swiper>
    </div>
  )
}

export default Carousel