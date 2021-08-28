import React from 'react';
import './Filter.css';

export default function Filter() {

    const filterOptions = [
        {
            label: "IPA",
            slug: "ipa"
        },
        {
            label: "Pilsner",
            slug: "pilsner"
        },
        {
            label: "Lager",
            slug: "pilsner"
        }
    ]


    return (
        <div className='sortWrapper'>
            <a href="#">IPA</a>
            <a href="#">Pale Ale</a>
            <a href="#">Lager</a>
            <a href="#">Pilsner</a>
        </div>
    )
}