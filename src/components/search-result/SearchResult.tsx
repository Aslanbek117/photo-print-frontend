import React from 'react';
import Text from '../text';
import './styles.css';

interface SearchResultProps {
  itemsCount: number;
  navItemClicked: boolean;
  searchText: string;
  selectedNavItem: string;
  articles: any[];
}

export const SearchResult = (props: SearchResultProps) => {
  return (
    <>
      {props.itemsCount === 0 && !props.navItemClicked && props.searchText !== '' && (
        <Text type="subtitle1">В Базе знаний нет статьи по запросу «{props.searchText}»</Text>
      )}

      {!props.navItemClicked && props.itemsCount > 0 ? (
        <Text type="subtitle1">По запросу "{props.searchText}"</Text>
      ) : (
        props.selectedNavItem && <Text type="subtitle1">{props.selectedNavItem}</Text>
      )}

      {props.articles?.length === 1 ? (
        // props.searchText === '' && (
        <div className="arcticles-length-container">
          <Text type="small" color="#8F92A1">
            Найдена:
          </Text>
          <Text type="small" style={{ paddingLeft: '5px' }}>
            1 статья
          </Text>
        </div>
      ) : // )
      props.itemsCount === 0 ? (
        <div className="arcticles-length-container">
          <Text type="small" color="#8F92A1">
            Найдено:
          </Text>
          <Text type="small" style={{ paddingLeft: '5px' }}>
            0 статей
          </Text>
        </div>
      ) : (
        <div className="arcticles-length-container">
          <Text type="small" color="#8F92A1">
            Найдено:
          </Text>
          <Text type="small" style={{ paddingLeft: '5px' }}>
            {props.articles?.length} статьи
          </Text>
        </div>
      )}
    </>
  );
};
