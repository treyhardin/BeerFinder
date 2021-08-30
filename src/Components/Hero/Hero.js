import React, { useRef, useState, useEffect } from 'react';
import './Hero.css';

export default function Hero(props) {
    const model = process.env.PUBLIC_URL + '/BeerCan.gltf';

    let modelViewerTexture = useRef(null);
    let labelImg;
    let material;

    const applyPBRTexture = (material, src) => {
        material.pbrMetallicRoughness.baseColorTexture.texture.source.setURI(src);
    }
    
    useEffect(() => {
        if(props.beer) {
            console.log('Side Effect with NO Model Loaded')
            modelViewerTexture.addEventListener("load", (ev) => {
                console.log('Model Now Loaded');
                labelImg = props.beer.beer.beer_label;
                applyPBRTexture(modelViewerTexture.model.materials[0], labelImg);
            });
        }
        if(props.beer && modelViewerTexture.loaded) {
            console.log('Model Rerender');
            labelImg = props.beer.beer.beer_label;
            applyPBRTexture(modelViewerTexture.model.materials[0], labelImg);
            
        }
        
    }, [props.beer])

    return (
        <div className='hero'>
            <model-viewer src={model} ref={obj => {modelViewerTexture = obj}} class='model' alt={`A 3D model of a beer`} environment-image="neutral" auto-rotate rotation-per-second="40deg" auto-rotate-delay='0'></model-viewer>
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