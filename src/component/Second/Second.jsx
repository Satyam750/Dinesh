import React from 'react'
import "./second.scss"
import {motion} from "framer-motion"

const Second = () => {
  return (
    <div className='second'>
          <motion.div initial={{opacity:0, y:100}} whileInView={{opacity:1,y:0}} transition={{duration:1.1}} className='one-sec'>
              <img src="https://images.pexels.com/photos/948185/pexels-photo-948185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
             
              <img src="https://images.pexels.com/photos/3785644/pexels-photo-3785644.jpeg" alt="" />
          </motion.div>
          <motion.div initial={{opacity:0, y:-100}} whileInView={{opacity:1,y:0}} transition={{duration:1.1}} className='two-sec'>
        
          <img src="https://images.pexels.com/photos/2174662/pexels-photo-2174662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <img src="https://images.pexels.com/photos/1321287/pexels-photo-1321287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />

          </motion.div>
          <motion.div initial={{opacity:0, y:100}} whileInView={{opacity:1,y:0}} transition={{duration:1.1}} className='three-sec'>
             <img src="https://images.pexels.com/photos/2352337/pexels-photo-2352337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
             <img src="https://images.pexels.com/photos/1589818/pexels-photo-1589818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          </motion.div>
    </div>
  )
}

export default Second