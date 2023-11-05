import React from "react";
import './Item.css';
import ViewMoreBtn from '../ViewMoreBtn/ViewMoreBtn';

const Item = (props) => {
    return (
        <div className="item">
            <img src={props.image} alt="" />
            <p>{props.name}</p>
            <div className="item_prices">
                <div className="item_price">{props.price}</div>
            </div>
            <ViewMoreBtn />
        </div>
    )
}

export default Item;