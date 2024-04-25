import React from 'react'
import "./doit.scss"
import {motion} from "framer-motion"

const Doit = () => {
  return (
    <div className='doit'>
        <div className='img_container'>
            <img src="https://images.pexels.com/photos/246367/pexels-photo-246367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <motion.div initial={{opacity:0, y:-200}} whileInView={{opacity:1,y:0}}  transition={{duration:1.1}} className='text'>
            <h1>Do it Your Way.</h1>
            <h1>Elope in Your</h1>
            <h1>Dream Location</h1>
            </motion.div>
        </div>
    </div>
  )
}

export default Doit