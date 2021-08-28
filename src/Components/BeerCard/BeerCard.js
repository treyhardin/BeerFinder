import React from 'react';
import './BeerCard.css';
import Icon from '../Helpers/Icons';
import { Link } from 'react-router-dom';
import { convertToSlug } from '../Helpers/Functions';

export default function BeerCard(props) {
    const model = process.env.PUBLIC_URL + '/BeerCan.gltf';
    const slug = '/beers/' + props.slug;

    // const modelViewerTexture = document.querySelector("model-viewer#lantern");

    // modelViewerTexture.addEventListener("load", (ev) => {

    //     let material = modelViewerTexture.model.materials[0];

    //     let applyPBRTexture = (channel, event) => {
    //         material.pbrMetallicRoughness[channel].texture.source.setURI(event.target.value);
    //     }

    //     document.querySelector('#diffuse').addEventListener('input', (event) => {
    //         applyPBRTexture('baseColorTexture', event);
    //     });
        
    // })

    const textureSwap = (id, newTexture) => {

        let modelViewerTexture = document.getElementById(id);

        let material = modelViewerTexture.model.materials[0];

        material.pbrMetallicRoughness['baseColorTexture'].texture.source.setURI(newTexture);

    }

    return (
        <Link to={slug} className='beerCard'>
           
                {Icon('cornerArrow')}
                <model-viewer class='beerModel' src={model} alt="A 3D model of an astronaut" environment-image="neutral" auto-rotate></model-viewer>
                <div className='cardText'>
                    <h3 className='u-h2'>{props.name}</h3>
                    <p className='utility'>{props.brewery}</p>
                </div>
        </Link>
    )
}