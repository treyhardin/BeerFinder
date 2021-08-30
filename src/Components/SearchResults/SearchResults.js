import React from 'react';
import beers from '../../utils/Untappd';
import './SearchResults.css';
import SearchItem from '../SearchItem/SearchItem';

export default function SearchResults(props) {
    let input = props.input;
    if (input) {
        input = input.toLowerCase();
    }
    return (
        <div className="searchResults">
            {beers.map(item => {
                if(item.beer.beer_name.toLowerCase().includes(input) || item.brewery.brewery_name.toLowerCase().includes(input)) {
                    return <SearchItem key={item.beer.bid} name={item.beer.beer_name} brewery={item.brewery.brewery_name} slug={item.beer.beer_slug} />;
                }
            })}
        </div>

    )
}