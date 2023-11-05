import React from "react";
import './Item_list.css';
import product_data from '../Assets/data';
import Item from '../Item/Item';

const Item_list = () => {
    return (
        <div className="item_list container">
            {product_data.map((item, i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price} />
            })}
        </div>
    )
}

export default Item_list;