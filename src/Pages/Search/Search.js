import React from 'react';
import Hero from '../../Components/Hero/Hero';
import SearchMenu from '../../Components/SearchMenu/SearchMenu';
import './Search.css';

export default function Search() {
    return (
        <div className='searchWrapper'>
            <div id="badge">
                <div className='badgeInner'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 157 157">
                        <path fill="#fff" d="M78.728.61l6.716 18.292L96.06 2.563l2.476 19.328 13.986-13.567-1.886 19.394 16.655-10.115-6.155 18.488 18.488-6.154-10.114 16.654 19.394-1.886-13.567 13.986 19.327 2.477-16.339 10.617 18.292 6.715-18.292 6.715 16.339 10.617-19.327 2.476 13.567 13.987-19.394-1.886 10.114 16.654-18.488-6.154 6.155 18.487-16.655-10.114 1.886 19.394-13.986-13.567-2.477 19.328-10.617-16.339-6.715 18.292-6.715-18.292-10.617 16.339-2.476-19.328-13.987 13.567 1.887-19.394-16.655 10.114 6.155-18.487-18.488 6.154 10.114-16.654-19.394 1.886L22.12 98.308 2.792 95.832 19.13 85.215.839 78.5l18.292-6.715L2.79 61.168 22.12 58.69 8.552 44.706l19.394 1.886-10.114-16.654L36.32 36.09l-6.155-18.488L46.82 27.718 44.933 8.324 58.92 21.89l2.476-19.328 10.617 16.34L78.728.61z"/>
                    </svg>
                    <p className='badgeText utility'>Find ya' some beer!</p>
                </div>
                
            </div>


            <SearchMenu />
            <Hero beer={null} />
        </div>
    )
}