import React from "react";
import Item_list from '../Components/Item_list/Item_list';
import CatalogMenu from "../Components/CatalogMenu/CatalogMenu";

const Catalog = () => {
    return (
        <div>
            <CatalogMenu/>
            <Item_list/>
        </div>
    )
}

export default Catalog;