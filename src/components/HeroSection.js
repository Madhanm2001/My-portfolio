import React, { useEffect, useState } from 'react';
import '../styles/HeroSection.css';
import logo from '../images/logoreact.webp'
import nodeLogo from '../images/Node.js.png'
import photo from '../images/madhan.JPG'

const HeroSection = () => {
  const [isLoaded, setLoaded] = useState(false);
  useEffect(()=>{
    setTimeout(()=>{setLoaded(true)}, 800)
  },[])
  return isLoaded ? (
    <div id='heroSection'>
      <div id='HeroCol'>
        <div className='column-1'>
          <h1 >
            Hi, I'm Madhankumar <br /><span>MERN Stack Developer</span>
          </h1>
          <div className='logoSection'>
            
            <img
              className='node'
              src={nodeLogo}
              alt="React Logo"
            />
            <img
              className='image-1'

              src={logo}
              alt="React Logo"
            />
          </div>
        </div>
        <div className='column-2'>
          <img
            className='image-2'
            src={photo}
            alt="Profile"
          />
        </div>
      </div>
      
    <a href='https://drive.google.com/file/d/1sAsW4ADpb2QTAZBRs15Gf3idV9iX2utc/view?usp=drivesdk' target='_blank' id='viewResume'>View Resume</a>
    </div> 
  ) : (
    <div id='mainHero'>
      <div class="loader"></div>
    </div>
  )
};

export default HeroSection;
