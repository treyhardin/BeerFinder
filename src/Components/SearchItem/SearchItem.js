import React from 'react';
import './SearchItem.css';
import Icon from '../Helpers/Icons';
import { Link } from 'react-router-dom';
import { convertToSlug } from '../Helpers/Functions';

export default function SearchItem(props) {
    return (
        <Link to={'/beers/' + props.slug} className="searchItem">
            <div className="itemText">
                <p className='u-h2'>{props.name}</p>
                <p className='utility'>{props.brewery}</p>
            </div>  
            {Icon('cornerArrow')}
        </Link>

    )
}