import React from "react";
import './Hero.css';
import arrow_icon from '../Assets/shop_now_icon.svg';
import image_product from '../Assets/image_product.svg';



const Hero = () => {
    return (
        <div className="hero container">
            <div className="hero_left flex_container">
                <h2>NEW ARRIVALS ONLY</h2>
                <p>New</p>
                <p>Collections</p>
                <p>for everyone</p>
                <div className="hero_latest_btn">
                    <div>Latest collection</div>
                    <img src={arrow_icon} alt="" />
                </div>
            </div>
            <div className="hero_right">
                <img src={image_product} alt="" />
            </div>
        </div>
    )
}

export default Hero;