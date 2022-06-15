import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image'
import "swiper/css";
import "swiper/css/effect-cards";

import "swiper/css/pagination"
import "swiper/css/navigation"

import { Pagination, Navigation, Autoplay, EffectCards } from "swiper";

import img1 from '../public/images/bighead-1.svg'
import img2 from '../public/images/bighead-2.svg'
import img3 from '../public/images/bighead-3.svg'
import img4 from '../public/images/bighead-4.svg'
import img5 from '../public/images/bighead-5.svg'
import img6 from '../public/images/bighead-6.svg'
import img7 from '../public/images/bighead-7.svg'
import img8 from '../public/images/bighead-8.svg'
import img9 from '../public/images/bighead-9.svg'
import img10 from '../public/images/bighead-10.svg'
import img11 from '../public/images/bighead.svg'

function Carousel() {
  return (
    <container>
        <Swiper
        autoplay={{
            delay:2000,
            disableOnInteraction:false
        }}
        pagination={{
            type:'fraction'
        }}
        navigation={true}
        effect={"cards"}
        grabCursor={true}
        modules={[Pagination, Navigation,Autoplay,EffectCards]}
        className="mySwiper w-full  rounded-lg "
      >
        <SwiperSlide className='bg-white'><Image src={img1}/></SwiperSlide>
        <SwiperSlide className='bg-white'><Image src={img2}/></SwiperSlide>
        <SwiperSlide className='bg-white'><Image src={img3}/></SwiperSlide>
        <SwiperSlide className='bg-white'><Image src={img4}/></SwiperSlide>
        <SwiperSlide className='bg-white'><Image src={img5}/></SwiperSlide>
        <SwiperSlide className='bg-white'><Image src={img6}/></SwiperSlide>
        <SwiperSlide className='bg-white'><Image src={img7}/></SwiperSlide>
        <SwiperSlide className='bg-white'><Image src={img8}/></SwiperSlide>
        <SwiperSlide className='bg-white'><Image src={img9}/></SwiperSlide>
        <SwiperSlide className='bg-white'><Image src={img10}/></SwiperSlide>
        <SwiperSlide className='bg-white'><Image src={img11}/></SwiperSlide>
      </Swiper>
    </container>
  )
}

export default Carousel