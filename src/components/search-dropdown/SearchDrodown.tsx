import React, { useState } from 'react';
import './search-dropdown.css';
import ArrowIcon from './arrow-icon.png'
import { SearchModel } from '../../models/search/Search';
import { getByDisplayValue } from '@testing-library/react';


interface SearchDropdownProps {
    items: SearchModel[];
    onClick: (title: string) => void;
}

export const SearchDropdown = (props: SearchDropdownProps) => {

    const getValue = (title: string) => {
        console.log("LI VALUE", title);
    }

    const listItems = props.items.map((item) =>
        <li value={item.title} onClick={() => props.onClick(item.title)}>
            <i>
                <img src={ArrowIcon} />
            </i>
            <span style={{ paddingLeft: '20px', fontWeight: 500, fontSize: 16, color: '#171717' }}>
                {item.title}
            </span>
        </li>
    );

    return (
        <>
            <div style={{ paddingTop: props.items.length > 0 ? '80px' : '0px', width: '100%' }}>
                <div className="on-hover" style={{ paddingLeft: '35px', paddingBottom: '15px' }}>
                    <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }} >
                        {listItems}
                    </ul>
                </div>
            </div>

        </>
    )
}

