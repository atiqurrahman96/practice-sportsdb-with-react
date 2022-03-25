import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className='header-container'>
            <div> <h1>Players Draft</h1></div>
            <div className='anchor-container'>
                <a href="./home">Home</a>
                <a href="./all players">All Players</a>
                <a href="./about">About Us</a>
            </div>
        </div>
    );
};

export default Header;