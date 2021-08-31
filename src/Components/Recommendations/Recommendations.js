import React, { useEffect } from 'react';
import './Recommendations.css'
import BeerCard from '../BeerCard/BeerCard';
import beers from '../../utils/Untappd';
import gsap, {Power3} from 'gsap';

export default function Recommendations(props) {

    useEffect(() => {
        if(!props.load) {
            gsap.to(".beerCard", {
                opacity: 1,
                duration: .3,
                ease: "Power3.out",
                stagger: 0.15
            })

        }
    })

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