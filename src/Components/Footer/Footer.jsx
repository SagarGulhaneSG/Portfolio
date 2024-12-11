import React from 'react';
import "./Footer.css";
import footer_logo from "../../assets/footer_logo.svg";
import user from "../../assets/user_icon.svg";
import theme from "../../assets/theme_pattern.svg";

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
            <div className='name'>
          <h1>SG</h1>
          <img src={theme} alt="" />
          </div>
                <p>I am a fresher frontend developer.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user} alt="" />
                    <input type="email" placeholder='Enter your email' />
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">&copy;2024 Sagar Gulhane.All rights reserved.</p>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer