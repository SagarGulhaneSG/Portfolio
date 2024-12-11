import React from 'react';
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import photo_big from "../../assets/photo_big.png";

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={photo_big} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am experienced frontend developer with over a deacade of professional expertise in the field. Throughtout my carrer, I have had the privillage of collaborating prestigious organization, contributing to their success and growth.</p>
                    <p>My passion for frontend development is not only reflected in my extensive experience but also in the enthusiam and dedicaton i bring to each project</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}} /></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width:"70%"}} /></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}} /></div>
                </div>
            </div>
        </div>
        <div className='about-achievements'>
            <div className="about-achievement">
                <h1>0</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>7</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>0</h1>
                <p>HAPPY CLIENTS</p>
            </div>
        </div>

    </div>
  )
}

export default About