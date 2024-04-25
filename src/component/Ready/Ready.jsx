import React from 'react'
import "./read.scss"
import {motion} from "framer-motion"
const Ready = () => {
  return (
    <div className='ready'>
        <div className='r-container'>
            <img src="https://images.pexels.com/photos/1600128/pexels-photo-1600128.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <div className='r-text'>
                <motion.h1 initial={{opacity:0, y:-200}} whileInView={{opacity:1,y:0}} transition={{duration:1.1}}>Are You Ready For <br /> Your Adventure?</motion.h1>
                <button>Learn More</button>
              </div>
        </div>
    </div>
  )
}

export default Ready