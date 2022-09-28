import React from 'react';
import './header.css'
import logo from '../../image/f.png'


const Header = () => {
    return (

        <nav className='nav'>
            <div className='header'>
                <img src={logo} alt="header img" />
                <h4>Soccer Club</h4>
            </div>
        </nav>
    );
};

export default Header;