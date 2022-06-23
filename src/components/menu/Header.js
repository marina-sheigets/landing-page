import React, { useState } from 'react'
import Menu from './Menu';
import MenuForMobiles from './MenuForMobiles';
const Header = () => {

    const [isMobile,setIsMobile]=useState(false);
    function showMenu(){
       isMobile? setIsMobile(false) : setIsMobile(true);
       const burgerButton=document.querySelector(".burger-button");
       burgerButton.classList.toggle("close");
    }
  return (

       <div class="header">
          {
              isMobile?  <MenuForMobiles/> : <Menu/>      
          }
        
          <div onClick={showMenu} className="burger-button">
                  <span></span>
          </div>
       </div>
  )
}

export default Header

