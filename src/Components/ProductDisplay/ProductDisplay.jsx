import React from 'react';
import './ProductDisplay.css';
import QuantitySelector from '../QuantitySelector/QuantitySelector';
import { Link } from "react-router-dom";
import image from '../Assets/images/p4_image.jpeg';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Redux/cartActions';

export const ProductDisplay = (props) => {

    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(props.product));
    };

    const {product} = props;
    return (
        <div className='productdisplay container'>
            <div className="productdisplay-left">
                <div className="productdisplay-img">
                    {/* <img className='productdisplay-main-img' src={`../Assets/images/${product.image}`} alt="" /> */}
                    <img className='productdisplay-main-img' src={image} alt="" />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-price">${product.price}</div>
                <div className="productdisplay-right-description">{product.description}</div>
                <div className="productdisplay-right-amount">
                    <h1>Amount</h1>
                    <QuantitySelector/>
                </div>
                <div className="productdisplay-right-size">  
                    <h1>Select Size</h1>
                    <select className="productdisplay-right-sizes" name="sizes" >
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                        <option value="extra-large">X-Large</option>
                    </select>
                </div>
                <div className="productdisplay-right-nav">
                    <button id='add_to_cart_btn' onClick={handleAddToCart}>ADD TO CART</button>
                    <Link to={`/catalog`} ><button id='go_back_btn'>GO BACK</button></Link>
                </div>
            </div>
        </div>
    )
}

