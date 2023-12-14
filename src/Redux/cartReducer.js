const initialState = {
    cartItems: []
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload]
            };
        case 'REMOVE_FROM_CART':
            console.log('Removing product with id:', action.payload);
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload)
            };
        default:
            return state;
    }
};

export default cartReducer;
