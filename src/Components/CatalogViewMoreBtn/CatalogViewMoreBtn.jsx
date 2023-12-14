import React from "react";
import './CatalogViewMoreBtn.css';

const CatalogViewMoreBtn = ({onClick}) => {
    return (
        <div className="catalog_view_more container flex_container">
            <button className="catalog_view_more_btn" onClick={onClick}>View More</button>
        </div>
    )
}

export default CatalogViewMoreBtn;