import React from "react";
import "./welcome.scss"
import {motion} from "framer-motion"
const Welcome = () => {
  return (
    <div className="wel">
      <motion.div initial={{opacity:0, x:-100}} whileInView={{opacity:1,x:0}} transition={{duration:1.1}} className="wel-img">
        <img src="https://images.pexels.com/photos/1322129/pexels-photo-1322129.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      </motion.div>
      <div className="wel-text">
        <h1 className="h1-t">BEHIND THE CAMERA LENS</h1>
        <motion.div initial={{opacity:0, y:-200}} whileInView={{opacity:1,y:0}} transition={{duration:1.1}} className="wel-head">
          <h1>Welcome Friend,</h1>
          <h1>My Name Is</h1>
          <h1>Vanessa</h1>
        </motion.div>
        <div className="wel-bot">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            praesentium quis quod autem quasi, architecto nihil nobis
            dignissimos hic, illum est pariatur? Ab perferendis hic consequuntur
            velit obcaecati odit distinctio.
          </p>
          <button>Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
