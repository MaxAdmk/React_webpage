import React, { createContext } from "react";
import data from '../Components/Assets/data.js';
export const ShopContext = createContext(null);

const ShopcontextProvider = (props) => {
    const contextValue = {data};

    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopcontextProvider;