import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

export default function Headers() {
    return (
        <header>
            <Link to='/' className='logo u-h2'><p>BrewFinder</p></Link>
            <NavLink exact={true} activeClassName='active' to='/' className='navLink u-h2'><p>Search</p></NavLink>
            <NavLink exact={true} to='/explore' className='navLink u-h2'><p>Explore</p></NavLink>
        </header>
    )
}