import React from 'react'
import "./menuForMobiles.css"
const MenuForMobiles=()=>  {
    return (
        <div className="menu-mobile">
            <nav className="menu-mobile-list">
                <a href="#home"><span>Home</span></a>
                <a href="#about">About</a>
                <a href="#charter">Charter</a>
                <a href="#reviews">Reviews</a>
                <a href="#books">Books</a>
                <a href="#author">Author</a>
                <a href="#contact">Contact</a>
            </nav> 
        </div>
    )
}

export default MenuForMobiles