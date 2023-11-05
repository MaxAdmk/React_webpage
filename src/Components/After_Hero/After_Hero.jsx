import React from "react";
import './After_Hero.css';
import mens_clothing from '../Assets/mens_clothing.jpeg';
import womens_clothing from '../Assets/womens_clothing.png';
import kids_clothing from '../Assets/kids_clothing.jpeg';


const After_Hero = () => {
    return (
        <div className="after_hero container flex_container">
            <div className="clothing">
                <img src={mens_clothing} alt="" />
                <h2>Men's clothing</h2>
            </div>
            <div className="clothing">
                <img src={womens_clothing} alt="" />
                <h2>Women's clothing</h2>
            </div>
            <div className="clothing">
                <img src={kids_clothing} alt="" />
                <h2>Kids clothing</h2>
            </div>
        </div>
    )
}

export default After_Hero;