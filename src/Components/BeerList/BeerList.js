import React, { useEffect } from 'react';
import './BeerList.css';
import BeerCard from '../BeerCard/BeerCard';
import gsap, {Power3} from 'gsap';

const BeerList = (props) => {


    useEffect(() => {
        if(!props.load){
            gsap.to(".beerCard", {
                opacity: 1,
                duration: .3,
                ease: "Power3.out",
                stagger: 0.15
            })
        }
    })

    return (
        <div className='beerList'>
            {props.beers.map(item => {
                // return <p>{beer.name}</p>;
                return <BeerCard key={'beer_' + item.beer.bid} name={item.beer.beer_name} brewery={item.brewery.brewery_name} slug={item.beer.beer_slug} label={item.beer.beer_label} />
            })}

        </div>
    )
}

export default BeerList;