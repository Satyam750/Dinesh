
import "./nav.scss"

import React, {useState, useEffect} from 'react'

const Nav = () => {


    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
  
    const controlNavbar = () => {
      if (window.scrollY < lastScrollY) { 
        setShow(false); 
      } else { 
        setShow(true);  
      }
      
      setLastScrollY(window.scrollY); 
    };
  
    useEffect(() => {
      window.addEventListener('scroll', controlNavbar);
      return () => {
         window.removeEventListener('scroll', controlNavbar);
      };
    }, [lastScrollY]);


  return (
    <div className={`active ${show && 'hidden'}  nav `}>
    <div className="nav_1">SR.COM</div>
    <div className="nav_2">
        <ul className="nav_ul">
            <li>HOME</li>
            <li>PORTFOLIO</li>
            <li>ABOUT</li>
            <li>TESTIMONALS</li>
            <li>CONTACT</li>
        </ul>
    </div>
</div>
  )
}

export default Nav