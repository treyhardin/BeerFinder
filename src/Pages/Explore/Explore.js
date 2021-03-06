import React from 'react';
import beers from '../../utils/Untappd';
import BeerList from '../../Components/BeerList/BeerList';
import ExploreHeader from '../../Components/ExploreHeader/ExploreHeader';
import './Explore.css';

export default function Explore(props) {
    return (
        <div className='exploreWrapper'>
            <ExploreHeader />
            <BeerList beers={beers} load={props.load} />
        </div>
    )
}