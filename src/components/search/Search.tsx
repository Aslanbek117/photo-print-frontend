import React, { useState } from 'react';
import { Search } from '../backend-api/api';
import { SearchResponseDTO, Article } from '../../models/search/Search';
import './search.css';
import { SearchDropdown } from '../search-dropdown/SearchDrodown';
import Icon from '../icon';
import { useHistory } from 'react-router-dom';

interface SearchProps {}

export const SearchTop = (props: SearchProps) => {
  const history = useHistory();

  const [searchValue, setSearchValue] = useState<string>('');
  const [suggest, setSuggest] = useState<Article[]>([]);

  const onInputChange = async (event: any) => {
    const response: SearchResponseDTO = await Search('', event.target.value);
    
    const key = 'title';

    //get only unique objects array by title
const unique = [...new Map(response.result.map(item =>
  [item[key], item])).values()];


    setSuggest(unique);
  };

  const getSearchValue = (title: string) => {
    setSearchValue(title);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      history.push('/nav/search=' + searchValue);
    }
  };

  const filteredItems = () => {
    if (suggest !== null) {
      if (suggest?.length > 0) {
        return suggest;
      } else {
        return [];
      }
    }
    return [];
  };

  return (
    <>
      <div
        className="search-input"
        style={{
          boxShadow: filteredItems().length > 0 ? '0px 4px 20px rgba(0, 0, 0, 0.16)' : 'none',
        }}
      >
        <i className="search-icon">
          <Icon icon="grey-search-19" width={19} height={19} />
        </i>
        <input
          className="search-input-field"
          placeholder="Напишите вопрос или проблему"
          value={searchValue}
          onChange={(event) => {
            if (event.target.value === '') {
              setSuggest([]);
            } else {
              onInputChange(event);
            }
            setSearchValue(event.target.value);
          }}
          onKeyDown={(event) => handleKeyDown(event)}
        />
        <SearchDropdown items={filteredItems()} onClick={(title) => getSearchValue(title)} />
        <button
          className="search-button"
          onClick={() => {
            searchValue && history.push('/nav/search=' + searchValue);
          }}
        >
          <span className="search-button-text">Поиск</span>
        </button>
      </div>
    </>
  );
};
