import React from 'react'
import "./caro.scss"

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { Autoplay, FreeMode, Pagination } from 'swiper/modules';

const Caro = () => {
  return (
    <div className='caro'>
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[FreeMode, Pagination,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide >
            <img className='swiper-1' src="https://images.pexels.com/photos/1066801/pexels-photo-1066801.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className='swiper-2' src="https://images.pexels.com/photos/948185/pexels-photo-948185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </SwiperSlide>
      
        <SwiperSlide>
            <img className='swiper-3' src="https://images.pexels.com/photos/2174662/pexels-photo-2174662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className='swiper-4' src="https://images.pexels.com/photos/1321287/pexels-photo-1321287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className='swiper-5' src="https://images.pexels.com/photos/984935/pexels-photo-984935.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </SwiperSlide>
      
       
      </Swiper>
    </div>
  )
}

export default Caro