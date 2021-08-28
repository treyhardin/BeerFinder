import React from 'react';
import Hero from '../../Components/Hero/Hero';
import { useParams } from 'react-router-dom';
import './Beer.css';
import Recommendations from '../../Components/Recommendations/Recommendations';
import beers from '../../utils/Untappd';

export default function Beer() {

    const { handle } = useParams();

    const selectedBeer = beers.find(item => item.beer.beer_slug == handle);

    return (
        <div className='beerWrapper'>
            <Hero beer={selectedBeer} />
            <Recommendations beer={selectedBeer} />
        </div>
    )
}