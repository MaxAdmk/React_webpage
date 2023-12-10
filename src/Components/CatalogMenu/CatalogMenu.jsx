// CatalogMenu.jsx
import React, { useState } from "react";
import './CatalogMenu.css';

const CatalogMenu = ({ onApplyFilters, onSortChange }) => {
    const [selectedFilters, setSelectedFilters] = useState({
        type: "all"
    });

    const handleTypeChange = (event) => {
        setSelectedFilters({
            ...selectedFilters,
            type: event.target.value
        });
    }

    const handleApplyButtonClick = () => {
        onApplyFilters(selectedFilters);
    }

    const handleSortChange = (event) => {
        onSortChange(event.target.value);
    }

    return (
        <div className="catalog_menu container flex_container">
            <div className="filter_buttons">
                <select
                    className="filter"
                    name="type"
                    value={selectedFilters.type}
                    onChange={handleTypeChange}>
                    <option value="all">All</option>
                    <option value="jacket">Jackets</option>
                    <option value="hoodie">Hoodies</option>
                    <option value="shirt">Shirts</option>
                    <option value="t-shirt">T-Shirts</option>
                </select>
            </div>
            <div className="sort_button">
                <label>Sort by Price:</label>
                <select className="filter" onChange={handleSortChange}>
                    <option value="asc">Low to High</option>
                    <option value="desc">High to Low</option>
                </select>
            </div>
            <div className="apply_button">
                <button className="apply_btn" onClick={handleApplyButtonClick}>
                    Apply
                </button>
            </div>
        </div>
    );
}

export default CatalogMenu;
