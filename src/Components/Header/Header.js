import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import "./Header.css"

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <nav>
                <ul>
                    <NavLink to='/shop'><a href="*">Shop</a></NavLink>
                    <NavLink to='/orderReview'><a href="*">Order Review</a></NavLink>
                    <NavLink to='/inventory'><a href="*">Inventory</a></NavLink>
                </ul>
            </nav>
        </div>
    );
};

export default Header;