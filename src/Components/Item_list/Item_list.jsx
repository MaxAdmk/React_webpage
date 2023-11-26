// Item_list.jsx
import React from "react";
import './Item_list.css';
import product_data from '../Assets/data';
import Item from '../Item/Item';
import { applyFilters } from '../../Utils/filters';

const Item_list = ({ visibleItems, filters, sortOrder }) => {
    const limitedProductData = product_data.slice(0, visibleItems);
    const filteredProductData = applyFilters(limitedProductData, filters);

    const sortedProductData = filteredProductData.sort((a, b) => {
        if (sortOrder === "asc") {
            return a.price - b.price; // Sorting from low to high
        } else if (sortOrder === "desc") {
            return b.price - a.price; // Sorting from high to low
        }
        return 0;
    });

    return (
        <div className="item_list container">
            {sortedProductData.map((item, i) => (
                <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price} old_pice={item.old_price} />
            ))}
        </div>
    );
}

export default Item_list;
