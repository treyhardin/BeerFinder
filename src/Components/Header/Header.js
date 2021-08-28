import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Headers() {
    return (
        <header>
            <Link to='/' className='logo u-h2'><p>BrewFinder</p></Link>
            <Link to='/' className='navLink u-h2'><p>Search</p></Link>
            <Link to='/explore' className='navLink u-h2'><p>Explore</p></Link>
        </header>
    )
}