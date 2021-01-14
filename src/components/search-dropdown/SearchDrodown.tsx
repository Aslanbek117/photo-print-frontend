import React, { useState } from 'react';
import './search-dropdown.css';
import ArrowIcon from './arrow-icon.png'


interface SearchDropdownProps {
    items: any[];
}

export const SearchDropdown = (props: SearchDropdownProps) => {

    return (
        <>
            <div  style={{ paddingTop: props.items.length > 0 ? '80px' : '0px', width: '100%' }}>

                {props.items.map(i => (
                    // <div className="search-arrow-icon">
                    <>
                    <div className="on-hover" style={{paddingLeft: '35px', paddingBottom: '15px' }}>
                        <i> 
                            <img src={ArrowIcon} />
                        </i>
                        
                        <span style={{paddingLeft: '20px', fontWeight: 500, fontSize: 16,  color: '#171717'}}>
                        {i}
                        </span>
                        </div>    
                        </>
                ))}
            </div>

        </>
    )
}

