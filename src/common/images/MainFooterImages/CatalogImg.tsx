import React from 'react';

export const CatalogImg = ({className}: { className?: string }) => {
    return (
        <svg className={className} version="1.1" id="Layer_1"
             xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24px" height="24px"
             viewBox="0 0 24 24" enable-background="new 0 0 24 24">
			<path d="M20,5H4C3.4,5,3,4.6,3,4s0.4-1,1-1h16c0.6,0,1,0.4,1,1S20.6,5,20,5z"/>
            <path d="M20,21H4c-0.6,0-1-0.4-1-1s0.4-1,1-1h16c0.6,0,1,0.4,1,1S20.6,21,20,21z"/>
            <path d="M20,13H4c-0.6,0-1-0.4-1-1s0.4-1,1-1h16c0.6,0,1,0.4,1,1S20.6,13,20,13z"/>
</svg>
    )
}

