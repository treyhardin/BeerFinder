import React, { useRef, useEffect } from 'react';
import BeerCard from '../BeerCard/BeerCard';
import SearchForm from '../SearchForm/SearchForm';
import './SearchMenu.css';
import gsap, { Power3 } from 'gsap';


export default function SearchMenu(props) {

    let introText = null;

    useEffect(() => {
        gsap.from(introText, {
            duration: 1,
            opacity: 0,
            y: 40,
            ease: "Power3.out"
        })
    })


    return (
        <div className='searchMenu'>
                <p className='u-h2' ref={el => {introText = el}}>Search for a beer you like. <br />Find <strong>other</strong> beers you’ll like.</p>
                <SearchForm />
        </div>
    )
}