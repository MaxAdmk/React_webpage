import React from "react";
import './Item.css';
import ViewMoreBtn from '../ViewMoreBtn/ViewMoreBtn';
import { Link } from "react-router-dom";
import image from '../Assets/images/p4_image.jpeg';

const Item = (props) => {
    return (
        <div className="item">
            {/* <img src={`../Assets/images/${props.image}`} alt='' /> */}
            <img src={image} alt="" />
            <p>{props.name}</p>
            <div className="item_prices">
                <div className="item_price">${props.price}</div>
            </div>
            <Link to={`/product/${props.id}`}><ViewMoreBtn /></Link>
        </div>
    )
}

export default Item;