import React from "react";
import 'swiper/css';
import 'swiper/css/effect-cards';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import "./testmono.scss"

const Testmono = () => {
   
  return (
    <div className='test'>
         <div className="nav_main">
                <div className="nav_left_main">
                    <h1>Testimonials</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                        incidunt exercitationem ea, neque eveniet amet quasi deserunt odio
                        iste cupiditate quo a quod, ut fuga, officia laborum quaerat fugit
                        animi!
                    </p>
                    <h1 className="h1-test">Testimonials 1</h1>
                </div>
                <div className="nav_right_main">
                    <Swiper
                         
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
                        navigation={{
                            nextEl: '.review-swiper-button-next',
                            prevEl: '.review-swiper-button-prev',
                        }}
                        modules={[Pagination, Navigation,EffectFade]}
                        effect="fade"
                        className="mySwiper"
                    >
                     <SwiperSlide>
                            <img className="" src="https://images.pexels.com/photos/853406/pexels-photo-853406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        </SwiperSlide>
                    <SwiperSlide>
                            <img className="" src="https://images.pexels.com/photos/326582/pexels-photo-326582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="" src="https://images.pexels.com/photos/6817723/pexels-photo-6817723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        </SwiperSlide>
                        
                        <SwiperSlide>
                            <img className="" src="https://images.pexels.com/photos/3785644/pexels-photo-3785644.jpeg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="" src="https://images.unsplash.com/photo-1558047092-ea343678e61c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1lbiUyMGFuZCUyMHdvbWVufGVufDB8fDB8fHww" alt="" />
                        </SwiperSlide>
                       

                    </Swiper>
                         
                         <div className="icon">
                              <FaArrowLeft className="review-swiper-button-next left-icon"/>
                              <FaArrowRight className="review-swiper-button-prev right-icon"/>
                         </div>

                </div>
            </div>
    </div>
  )
}

export default Testmono