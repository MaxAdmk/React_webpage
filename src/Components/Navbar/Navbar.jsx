import React from "react";
import { useState } from "react";
import './Navbar.css'
import logo from "../Assets/iceberg.png"
import { Link } from "react-router-dom";

const Navbar = () => {

    const [menu, setMenu] = useState("shop");

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
                    <input type="text" />
                </div>
            </div>
        </div>
    )
}

export default Navbar;