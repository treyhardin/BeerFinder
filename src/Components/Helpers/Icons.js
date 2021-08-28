import React from 'react';

export default function Icon(icon) {
    if (icon === 'cornerArrow') {
        return (
            <svg className='icon' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
              <path stroke="currentColor" strokeWidth="2" d="M1 1.127h15.805v16M1 17.127l16-16"/>
            </svg>
        )
    } else if (icon === 'search') {
        return (
            <svg className='icon' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 38 38">
                <path fill="currentColor" fillRule="evenodd" d="M23.224 13.112c0 5.585-4.527 10.112-10.112 10.112S3 18.697 3 13.112 7.527 3 13.112 3s10.112 4.527 10.112 10.112zm-1.961 10.272a13.057 13.057 0 01-8.15 2.84C5.87 26.224 0 20.354 0 13.112 0 5.871 5.87 0 13.112 0s13.112 5.87 13.112 13.112c0 3.08-1.062 5.913-2.84 8.15L37.06 34.94l-2.12 2.122-13.677-13.677z" clipRule="evenodd"/>
            </svg>
        )
    }

    
}