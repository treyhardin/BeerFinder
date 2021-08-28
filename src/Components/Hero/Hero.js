import React from 'react';
import './Hero.css';

export default function Hero(props) {
    const model = process.env.PUBLIC_URL + '/BeerCan.gltf';
    return (
        <div className='hero'>
            <model-viewer src={model} class='model' alt="A 3D model of an astronaut" environment-image="neutral" auto-rotate rotation-per-second="40deg"></model-viewer>
            { props.beer !== null ? 
            <div className='heroText'>
                <div className='heroTop'>
                    <div>
                        <h2>{ props.beer.beer.beer_name }</h2>
                        <p className='utility'>{ props.beer.brewery.brewery_name }</p>
                    </div>
                    <div>
                        <p className='utility'>{ props.beer.beer.beer_style }</p>
                    </div>
                </div>
                <div className='heroBottom'>
                    <div>
                        <p className='utility'>{ props.beer.beer.beer_description }</p>
                    </div>
                </div>
            </div> : null }
            
        </div>
    )
}