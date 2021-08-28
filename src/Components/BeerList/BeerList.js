import React from 'react';
import './BeerList.css';
import BeerCard from '../BeerCard/BeerCard';

const BeerList = (props) => {

    return (
        <div className='beerList'>
            {props.beers.map(item => {
                // return <p>{beer.name}</p>;
                return <BeerCard key={'beer_' + item.beer.bid} name={item.beer.beer_name} brewery={item.brewery.brewery_name} slug={item.beer.beer_slug} />
            })}

        </div>
    )
}

export default BeerList;