import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/HotAccessoriesMenu.css"
const HotAccessoriesMenu = () => {
    return (
        <div className="HotAccessoriesMenu">
            <Link className="HotAccessoriesMenuLink" to="/music">Music Store</Link>
            <Link className="HotAccessoriesMenuLink" to="/smartDevice">Smart Device</Link>
            <Link className="HotAccessoriesMenuLink" to="/home">Home</Link>
            <Link className="HotAccessoriesMenuLink" to="/lifestyle">Lifestyle</Link>
            <Link className="HotAccessoriesMenuLink" to="/mobileAccessories">Mobile Accessories</Link>
            
        </div>
    )
}

export default HotAccessoriesMenu
