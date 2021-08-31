import React, { useRef, useEffect, useState } from 'react';
import './SearchForm.css';
import Icon from '../Helpers/Icons';
import SearchResults from '../SearchResults/SearchResults';
import gsap, { Power3 } from 'gsap';

export default function SearchForm(props) {

    const [ isActive, setActive ] = useState(false);
    const [ searchInput, setInput ] = useState(null);
    
    const resultsElement = document.getElementById('searchResults');

    let actionIcon = Icon('search');

    let searchForm = null;

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

    useEffect(() => {
        if(!props.load) {
            gsap.from(searchForm, {
                duration: 1,
                delay: .3,
                opacity: 0,
                y: 40,
                ease: "Power3.out"
            })
        }
    }, [props.load])


    return (
        <div className="searchForm" ref={obj => {searchForm = obj}}>
            <input className='u-h1' type="text" placeholder="I like..." onChange={handleChange} />
            {actionIcon}
            <SearchResults input={searchInput}/>
        </div>

    )
}