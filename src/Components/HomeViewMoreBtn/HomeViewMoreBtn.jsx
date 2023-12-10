import React from "react";
import './HomeViewMoreBtn.css';

const HomeViewMoreBtn = ({ onClick }) => {
    return (
        <div className="home_view_more container flex_container">
            <button className="home_view_more_btn" onClick={onClick}>
                View More
            </button>
        </div>
    )
}

export default HomeViewMoreBtn;
