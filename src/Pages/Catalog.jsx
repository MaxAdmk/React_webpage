import React, { useState, useEffect } from "react";
import axios from "axios";
import Item_list from '../Components/Item_list/Item_list';
import CatalogMenu from "../Components/CatalogMenu/CatalogMenu";
import HomeViewMoreBtn from "../Components/HomeViewMoreBtn/HomeViewMoreBtn";
import Loader from "../Components/Loader/Loader"; 

const Catalog = () => {
    const initialVisibleItems = 6;
    const [visibleItems, setVisibleItems] = useState(initialVisibleItems);
    const [filters, setFilters] = useState({ type: "all" });
    const [sortOrder, setSortOrder] = useState("asc");
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:3001/products");
                setData(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []); 

    const handleViewMore = () => {
        setVisibleItems((prevVisibleItems) => prevVisibleItems + 3);
    };

    const handleApplyFilters = (newFilters) => {
        setFilters(newFilters);
        setVisibleItems(initialVisibleItems);
    };

    const handleSortChange = (order) => {
        setSortOrder(order);
    };

    if (loading) {
        return <Loader />; 
    }

    return (
        <div>
            <CatalogMenu onApplyFilters={handleApplyFilters} onSortChange={handleSortChange} />
            <Item_list visibleItems={visibleItems} filters={filters} sortOrder={sortOrder} items={data} />
            <HomeViewMoreBtn onClick={handleViewMore} />
        </div>
    );
};

export default Catalog;
