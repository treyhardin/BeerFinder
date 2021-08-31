import React, { useRef, useEffect, useState } from 'react';
import './SearchForm.css';
import Icon from '../Helpers/Icons';
import SearchResults from '../SearchResults/SearchResults';
import gsap, { Power3 } from 'gsap';

export default function SearchForm() {

    const [ isActive, setActive ] = useState(false);
    const [ searchInput, setInput ] = useState(null);
    
    const resultsElement = document.getElementById('searchResults');

    let actionIcon = Icon('search');

    const handleChange = (e) => {
        const input = e.target.value;
        
        if(input) {
            setActive(true);
            setInput(input);
        } else {
            actionIcon = Icon('cornerArrow');
            setActive(false);
            setInput(null);
        }
    }

    let searchFormObj;

    useEffect(() => {
        gsap.from(searchFormObj, {
            duration: .8,
            delay: .3,
            ease: "Power3.out",
            opacity: 0,
            y: 40
        })
    });


    return (
        <div className="searchForm" ref={obj => searchFormObj = obj}>
            <input className='u-h1' type="text" placeholder="I like..." onChange={handleChange} />
            {actionIcon}
            <SearchResults input={searchInput} />
        </div>

    )
}