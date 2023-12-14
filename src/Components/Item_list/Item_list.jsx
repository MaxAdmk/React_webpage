import React from "react";
import "./Item_list.css";
import Item from "../Item/Item";
import { applyFilters } from "../../Utils/filters";

const Item_list = ({ items, visibleItems, filters, sortOrder }) => {
    const limitedItems = items ? items.slice(0, visibleItems) : [];
    const filteredItems = applyFilters(limitedItems, filters);

    const sortedItems = filteredItems.sort((a, b) => {
        if (sortOrder === "asc") {
            return a.price - b.price;
        } else if (sortOrder === "desc") {
            return b.price - a.price;
        }
        return 0;
    });

    return (
        <div className="item_list container">
            {sortedItems.map((item, i) => (
                <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price} old_price={item.old_price} />
            ))}
        </div>
    );
};


export default Item_list;
