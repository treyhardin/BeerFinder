import React, { useRef, useEffect } from 'react';
import './BeerCard.css';
import Icon from '../Helpers/Icons';
import { Link } from 'react-router-dom';


export default function BeerCard(props) {
    const model = process.env.PUBLIC_URL + '/BeerCan.gltf';
    const slug = '/beers/' + props.slug;

    let modelViewerTexture = null;
    let labelImg = props.label;

    useEffect(() => {

        modelViewerTexture.addEventListener("load", (ev) => {

            if (modelViewerTexture) {
                
                let material = modelViewerTexture.model.materials[0];
    
                let applyPBRTexture = (channel, src) => {
                    material.pbrMetallicRoughness.baseColorTexture.texture.source.setURI(src);
                }
    
                applyPBRTexture('baseColorTexture', labelImg);

            }

        })
    })
                

    return (
        <Link to={slug} className='beerCard'>
                {Icon('cornerArrow')}
                <model-viewer class='beerModel' src={model} ref={obj => {modelViewerTexture = obj}} alt={`A 3D model of ${props.name} beer`} environment-image="neutral" poster={process.env.PUBLIC_URL + '/Beer_Placeholder.png'} auto-rotate auto-rotate-delay='0'></model-viewer>
                <div className='cardText'>
                    <h3 className='u-h2'>{props.name}</h3>
                    <p className='utility'>{props.brewery}</p>
                </div>
        </Link>
    )
}