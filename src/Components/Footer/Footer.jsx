import React from "react";
import logo from "../Assets/iceberg.png";
import twitter_logo from '../Assets/twitter.png';
import facebook_logo from '../Assets/facebook.png';
import instagram_logo from '../Assets/instagram.png';
import './Footer.css';

const Footer = () => {

    return (
        <footer className="container">
            <hr className="top_line" />
            <div className="top_footer flex_container">
                <div className="branding">
                    <h3>Branding stuff</h3>
                    <p>Lorem ipsum ...</p>
                </div>
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="social_media_logo">
                    <img src={twitter_logo} alt="" />
                    <img src={facebook_logo} alt="" />
                    <img src={instagram_logo} alt="" />
                </div>  
            </div>
            <hr className="divide_line" />
            <div className="bot_footer flex_container">
                <p>2020 IoT Copyright all rights reserved bla bla bla</p>
            </div>
        </footer>
    )
};

export default Footer;