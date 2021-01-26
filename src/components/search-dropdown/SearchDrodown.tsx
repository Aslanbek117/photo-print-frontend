import React from 'react';
import './search-dropdown.css';
import Icon from '../icon';
import { Article } from '../../models/search/Search';

interface SearchDropdownProps {
  items: Article[];
  onClick: (title: string) => void;
}

export const SearchDropdown = (props: SearchDropdownProps) => {
  const getValue = (title: string) => {
    console.log('LI VALUE', title);
  };

  const listItems = props.items.map((item) => (
    <li value={item.title} onClick={() => props.onClick(item.title)}>
      <div className="search-result-item">
        <Icon icon="corner-down-right" width={20} height={18} />
        <span style={{ paddingLeft: '20px', fontWeight: 500, fontSize: 16, color: '#171717' }}>
          {item.title}
        </span>
      </div>
    </li>
  ));

  return (
    <>
      <div style={{ paddingTop: props.items.length > 0 ? '80px' : '0px', width: '100%' }}>
        <div style={{ paddingBottom: '15px' }}>
          <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>{listItems}</ul>
        </div>
      </div>
    </>
  );
};
