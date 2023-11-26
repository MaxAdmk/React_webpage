import React from "react";
import { useState } from "react";
import './Navbar.css'
import logo from "../Assets/iceberg.png"
import { Link } from "react-router-dom";
import loupe from "../Assets/loupe.png";
import products from '../Assets/data';

const Navbar = () => {

    const [menu, setMenu] = useState("shop"); 
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = () => {
        const foundProduct = products.find(product => product.name.toLowerCase() === searchTerm.toLowerCase());

        if (foundProduct) {
            // Navigate to the product using Link
            // You can adjust the URL format based on your routes
            window.location.href = `/product/${foundProduct.id}`;
        } else {
            alert("Товар не знайдено");
        }
    }

    return (
        <div className="header_container">
            <div className="navbar">
                <div className="nav_logo">
                    <img src={logo} alt="" />
                    <p>ICEBERG</p>
                </div>
                <ul className="nav_menu">
                    <li onClick={()=>{setMenu("home")}}><Link style={{textDecoration: 'none'}} to={"/"}>Home</Link>{menu === "home"?<hr/>:<></>}</li>
                    <li onClick={()=>{setMenu("catalog")}}><Link style={{textDecoration: 'none'}} to={"/catalog"}>Catalog</Link>{menu === "catalog"?<hr/>:<></>}</li>
                    <li onClick={()=>{setMenu("cart")}}><Link style={{textDecoration: 'none'}} to={"/cart"}>Cart</Link>{menu === "cart"?<hr/>:<></>}</li>
                </ul>
                <div className="nav_search">
                    <input
                        type="text"
                        placeholder="Search for a product..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button onClick={handleSearch}>
                        <img src={loupe} alt="" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;