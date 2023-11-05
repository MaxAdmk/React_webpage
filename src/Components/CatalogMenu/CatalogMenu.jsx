import React from "react";
import SortByPriceBtn from "../SortByPriceBtn/SortByPriceBtn";
import Filter2 from "../Filter2/Filter2";
import Filter3 from "../Filter3/Filter3";
import ApplyBtn from "../ApplyBtn/ApplyBtn";

const CatalogMenu = () => {
    return (
        <div className="catalog_menu container flex_container">
            <div className="filter_buttons">
                <SortByPriceBtn/>
                <Filter2/>
                <Filter3/>
            </div>
            <div className="apply_button">
                <ApplyBtn/>
            </div>
        </div>
    )
} 

export default CatalogMenu;