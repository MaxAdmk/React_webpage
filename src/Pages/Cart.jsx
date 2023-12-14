import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../Redux/cartActions';
import './CSS/Cart.css'
import image from '../Components/Assets/images/p4_image.jpeg';
import bin from '../Components/Assets/images/trash-bin.png';

const Cart = () => {
    const cartItems = useSelector(state => state.cart.cartItems);
    const dispatch = useDispatch();

    const handleRemoveFromCart = (productId) => {
        dispatch(removeFromCart(productId));
    };

    return (
        <div className='cart container'>
            <h2>Cart Items</h2>
            <ul>
                {cartItems.map(item => (
                    <li key={item.id}>
                        <img src={image} alt="" />
                        <h3>ID: {item.id}</h3>
                        <h3>{item.name}</h3>
                        <h3>Price: {item.price}$</h3>
                        <button className='remove_btn' onClick={() => handleRemoveFromCart(item.id)}>
                            <img src={bin} alt="" />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Cart;
