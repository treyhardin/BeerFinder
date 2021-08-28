import React from 'react';
import BeerCard from '../BeerCard/BeerCard';
import SearchForm from '../SearchForm/SearchForm';
import './SearchMenu.css';

export default function SearchMenu() {
    return (
        <div className='searchMenu'>
                <p className='u-h2'>Search for a beer you like. <br />Find <strong>other</strong> beers you’ll like.</p>
                <SearchForm />
        </div>
    )
}