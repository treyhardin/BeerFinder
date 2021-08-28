import React, { useState } from 'react';
import './SearchForm.css';
import Icon from '../Helpers/Icons';
import SearchItem from '../SearchItem/SearchItem';
import SearchResults from '../SearchResults/SearchResults';
import beers from '../../utils/Untappd';

export default function SearchForm() {

    const [ isActive, setActive ] = useState(false);
    const [ searchInput, setInput ] = useState(null);
    
    const resultsElement = document.getElementById('searchResults');

    let actionIcon = Icon('search');

    const handleChange = (e) => {
        const input = e.target.value;
        
        if(input) {
            console.log(input);
            setActive(true);
            setInput(input);
        } else {
            console.log('EMPTY');
            actionIcon = Icon('cornerArrow');
            setActive(false);
            setInput(null);
        }
    }


    return (
        <div className="searchForm">
            <input className='u-h1' type="text" placeholder="I like..." onChange={handleChange} />
            {actionIcon}
            <SearchResults input={searchInput} />
        </div>

    )
}