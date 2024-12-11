import React from 'react';
import './Hero.css';

import AnchorLink from 'react-anchor-link-smooth-scroll';
import photo from '../../assets/my_photo.png';

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={photo} alt="" />
        <h1><span>I'm Sagar Gulhane,</span> frontend developer based in INDIA.</h1>
        <p>I am a fresher frontend developer, passionate about building user-friendly and responsive web applications.</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
            <div className="hero-resume"><a href="https://drive.google.com/file/d/1iI7-gPbGJAXq-QfvpFGzk-Iyg0JpVKwo/view?usp=drive_link">My Resume</a></div>
        </div>
    </div>
  )
}

export default Hero