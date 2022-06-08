import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image'
import "swiper/css";
import "swiper/css/effect-cards";

import "swiper/css/pagination"
import "swiper/css/navigation"

import { Pagination, Navigation, Autoplay } from "swiper";

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

function Cards() {

    const NftItem =({img, number =0, price=0}) =>{
        <div>
            <Image src={img}/>
            <div>
                <div>
                    <span>BigHeads!</span> <br/>
                    <h1>#{number}</h1>
                </div>
                <div>
                    <span>Price</span>
                    <h1>{price}</h1>
                </div>
            </div>
        </div>
    }

  return (
    <container className=' grid-rows-1 ' >
        <div  >
            <div className='  bg-red-500'> Section 1 </div>
            <div className='  bg-blue-500'> Section 2 </div>
            <div className='  bg-yellow-500'> Section 2 </div>
            <div> Section 2 </div>
            <div> Section 2 </div>
        </div>
       
    </container>
  )
}

export default Cards

 {/* <Swiper
        autoplay={{
            delay:3000,
            disableOnInteraction:false
        }}
        slidesPerView={5}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
            type:'fraction'
        }}
        navigation={true}
        //effect={"cards"}
        grabCursor={true}
        modules={[Pagination, Navigation,Autoplay]}
        className="mySwiper w-[100%] h-[100%] rounded-lg "
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
        <SwiperSlide className='bg-white'><Image src={img3}/></SwiperSlide>
        <SwiperSlide className='bg-white'><Image src={img4}/></SwiperSlide>
        <SwiperSlide className='bg-white'><Image src={img5}/></SwiperSlide>
        <SwiperSlide className='bg-white'><Image src={img6}/></SwiperSlide>
        
        
      </Swiper> */}

        // <SwiperSlide className='bg-white'><NftItem src={img1} number={453} price={1}/></SwiperSlide>
        // <SwiperSlide className='bg-white'><NftItem src={img2} number={234} price={1.2}/></SwiperSlide>
        // <SwiperSlide className='bg-white'><NftItem src={img3} number={462} price={.3}/></SwiperSlide>
        // <SwiperSlide className='bg-white'><NftItem src={img4} number={236} price={4}/></SwiperSlide>
        // <SwiperSlide className='bg-white'><NftItem src={img5} number={634} price={1.6}/></SwiperSlide>
        // <SwiperSlide className='bg-white'><NftItem src={img6} number={782} price={2.1}/></SwiperSlide>
        // <SwiperSlide className='bg-white'><NftItem src={img7} number={636} price={3.1}/></SwiperSlide>
        // <SwiperSlide className='bg-white'><NftItem src={img8} number={478} price={1.8}/></SwiperSlide>
        // <SwiperSlide className='bg-white'><NftItem src={img9} number={544} price={6.1}/></SwiperSlide>
        // <SwiperSlide className='bg-white'><NftItem src={img10} number={635} price={19}/></SwiperSlide>
        // <SwiperSlide className='bg-white'><NftItem src={img11} number={484} price={1.7}/></SwiperSlide>