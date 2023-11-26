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
            {/* Кнопка віднімання */}
            <button className="quantity-btn" onClick={decreaseQuantity}>-</button>

            {/* Поле відображення кількості */}
            <div className="quantity-display">{quantity}</div>

            {/* Кнопка додавання */}
            <button className="quantity-btn" onClick={increaseQuantity}>+</button>
        </div>
    );
}

export default QuantitySelector;
