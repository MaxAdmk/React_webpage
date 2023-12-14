import React, { useState } from 'react';
import './QuantitySelector.css';

const QuantitySelector = () => {
    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    }

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    }

    return (
        <div className="quantity-input">
            <button className="quantity-btn" onClick={decreaseQuantity}>-</button>

            <div className="quantity-display">{quantity}</div>

            <button className="quantity-btn" onClick={increaseQuantity}>+</button>
        </div>
    );
}

export default QuantitySelector;
