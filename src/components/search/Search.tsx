import React, { useState } from 'react';
import { Search } from '../backend-api/api';
import { SearchResponseDTO, Article } from '../../models/search/Search';
import './search.css';
import { SearchDropdown } from '../search-dropdown/SearchDrodown';
import Icon from '../icon';
import Text from '../text';
import { useHistory } from 'react-router-dom';

interface SearchProps {
  header?: boolean;
}

export const SearchTop = (props: SearchProps) => {
  const history = useHistory();

  const [searchValue, setSearchValue] = useState<string>('');
  const [suggest, setSuggest] = useState<Article[]>([]);

  const onInputChange = async (event: any) => {
    const response: SearchResponseDTO = await Search('', event.target.value);

    const key = 'title';

    //get only unique objects array by title
    const unique = [...new Map(response?.result?.map(item => [item[key], item])).values()];

    setSuggest(unique);
  };

  const getSearchValue = (title: string) => {
    setSearchValue(title);
  };

  const handleKeyDown = e => {
    // if (e.key === 'Enter') {
    //   history.push('/search', state:{ searchValue: ""});
    // }
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

  const onClickSearch = (searchVal: string) => {
    if (searchVal) {
      history.push({
        pathname: '/search',
        state: { searchValue: searchVal, categoryToExpand: '' },
      });
    }
  };

  if (props.header) {
    return (
      <div className="header-search-container-with-dropdown">
        <div className="header-search-container">
          <Icon icon="grey-search-19" width={19} height={19} mr={15} />
          <input
            className="header-serach-input"
            placeholder="Напишите вопрос или проблему"
            value={searchValue}
            onChange={event => {
              if (event.target.value === '') {
                setSuggest([]);
              } else {
                onInputChange(event);
              }
              setSearchValue(event.target.value);
            }}
            onKeyDown={event => handleKeyDown(event)}
          />
          <button className="header-search-button" onClick={() => onClickSearch(searchValue)}>
            <Text type="subtitle3" color="#ffffff">
              Поиск
            </Text>
          </button>
        </div>
        <SearchDropdown items={filteredItems()} onClick={title => onClickSearch(title)} header />
      </div>
    );
  }

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
          onChange={event => {
            if (event.target.value === '') {
              setSuggest([]);
            } else {
              onInputChange(event);
            }
            setSearchValue(event.target.value);
          }}
          onKeyDown={event => handleKeyDown(event)}
        />
        <SearchDropdown items={filteredItems()} onClick={title => onClickSearch(title)} />
        <button className="search-button" onClick={() => onClickSearch(searchValue)}>
          <Text type="subtitle3" color="#ffffff">
            Поиск
          </Text>
        </button>
      </div>
    </>
  );
};
