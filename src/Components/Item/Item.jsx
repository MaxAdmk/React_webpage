import React from "react";
import './Item.css';
import ViewMoreBtn from '../ViewMoreBtn/ViewMoreBtn';
import { Link } from "react-router-dom";

const Item = (props) => {
    return (
        <div className="item">
            <img src={props.image} alt="" />
            <p>{props.name}</p>
            <div className="item_prices">
                <div className="item_price">${props.price}</div>
            </div>
            <Link to={`/product/${props.id}`}><ViewMoreBtn /></Link>
        </div>
    )
}

export default Item;