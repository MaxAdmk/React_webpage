// Catalog.jsx
import React, { useState } from "react";
import Item_list from '../Components/Item_list/Item_list';
import CatalogMenu from "../Components/CatalogMenu/CatalogMenu";
import HomeViewMoreBtn from "../Components/HomeViewMoreBtn/HomeViewMoreBtn";

const Catalog = () => {
    const initialVisibleItems = 6;
    const [visibleItems, setVisibleItems] = useState(initialVisibleItems);
    const [filters, setFilters] = useState({ type: "all" });
    const [sortOrder, setSortOrder] = useState("asc"); // Додайте стан для зберігання порядку сортування

    const handleViewMore = () => {
        setVisibleItems(prevVisibleItems => prevVisibleItems + 3);
    }

    const handleApplyFilters = (newFilters) => {
        setFilters(newFilters);
        setVisibleItems(initialVisibleItems);
    }

    const handleSortChange = (order) => {
        setSortOrder(order);
    }

    return (
        <div>
            <CatalogMenu onApplyFilters={handleApplyFilters} onSortChange={handleSortChange} />
            <Item_list visibleItems={visibleItems} filters={filters} sortOrder={sortOrder} />
            <HomeViewMoreBtn onClick={handleViewMore} />
        </div>
    );
}

export default Catalog;
