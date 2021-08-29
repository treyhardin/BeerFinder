import React, { useState } from 'react';
import './Recommendations.css'
import BeerCard from '../BeerCard/BeerCard';
import { convertToSlug } from '../Helpers/Functions';
import beers from '../../utils/Untappd';

export default function Recommendations(props) {

    // let selectedBeer = props.beer;
    // let slugLookup = beers.find(item => item.beer.beer_slug === selectedBeer.beer.beer_slug);
    const selectedBeer = props.beer;
    const slug = beers.find(item => item.beer.bid == selectedBeer.beer.bid);

    return (
        <div className='recommendations'>
            <div className='recommendationsHeader'>
                <h1>You should try...</h1>
            </div>
                {props.beer.similar.items.map(item => {
                    let slug = beers.find(findItem => findItem.beer.bid === item.beer.bid);
                    return <BeerCard key={'beer_' + item.beer.bid} name={item.beer.beer_name} brewery={item.brewery.brewery_name} slug={slug.beer.beer_slug} label={item.beer.beer_label} />
                })}
        </div>
    )
}