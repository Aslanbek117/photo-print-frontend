import React from 'react';
import './search-dropdown.css';
import Icon from '../icon';
import { Article } from '../../models/search/Search';

interface SearchDropdownProps {
  items: Article[];
  onClick: (title: string) => void;
  header?: boolean;
}

export const SearchDropdown = (props: SearchDropdownProps) => {
  const getValue = (title: string) => {
    console.log('LI VALUE', title);
  };

  const listItems = props.items.map(item => (
    <li value={item.title} onClick={() => props.onClick(item.title)}>
      <div className="search-result-item">
        <Icon icon="corner-down-right" width={20} height={18} />
        <span
          style={{
            paddingLeft: '20px',
            fontWeight: 500,
            fontSize: 16,
            color: '#171717',
          }}
        >
          {item.title}
        </span>
      </div>
    </li>
  ));

  if (props?.items?.length > 0) {
    return (
      <div
        style={{
          paddingTop: props?.header ? '0px' : '20px',
          width: props?.header ? '56%' : '100%',
        }}
        className="search-dropdown"
      >
        <div style={{ paddingBottom: '15px' }}>
          <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>{listItems}</ul>
        </div>
      </div>
    );
  }
  return null;
};
