import React from 'react';
import Hero from '../../Components/Hero/Hero';
import SearchMenu from '../../Components/SearchMenu/SearchMenu';
import './Search.css';

export default function Search() {
    return (
        <div className='searchWrapper'>
            <SearchMenu />
            <Hero beer={null} />
        </div>
    )
}