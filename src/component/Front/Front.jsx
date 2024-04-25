import React from "react";
import 'swiper/css';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectFade } from 'swiper/modules';
import 'swiper/css/effect-fade';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import "./front.scss"

const Front = () => {
  return (
    <div className="front">
        <Swiper
                        
                        spaceBetween={0}
        loop={true}
        pagination={{
          clickable: true,
        }}
                        navigation={{
                            nextEl: '.review-swiper-button-next',
                            prevEl: '.review-swiper-button-prev',
                        }}
                        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
                        modules={[Pagination, Navigation,EffectFade,Autoplay]}
                        effect="fade"
                        className="mySwiper"
                    >
                     <SwiperSlide>
                     <div className="name-front">
                            <div className="h1-front">
                               <h1>Photography For</h1>
                                <h1>Adventurous Souls & </h1>
                                <h1>Rebels At Heart</h1>
                            </div>

                            <button>read more</button>
                            
                            
                     </div>
                            <img className="" src="https://images.pexels.com/photos/853406/pexels-photo-853406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />

                        </SwiperSlide>


                    <SwiperSlide>
                    <div className="name-front">
                            <div className="h1-front">
                               <h1>Photography For</h1>
                                <h1>Adventurous Souls & </h1>
                                <h1>Rebels At Heart</h1>
                            </div>
                            <button>read more</button>                   
                     </div>
                            <img className="" src="https://images.pexels.com/photos/326582/pexels-photo-326582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        </SwiperSlide>
                        
                    </Swiper>
                         
                         <div className="icon">
                         <FaArrowLeft className="review-swiper-button-next left-icon"/>
                              <FaArrowRight className="review-swiper-button-prev right-icon"/>
                         </div>
                       
    </div>
  )
}

export default Front