import React from "react";
import { Typography } from "antd";
import Text from "../text";

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
      {(props.itemsCount === 0 && !props.navItemClicked) ? (
        props.searchText === "empty" && !props.navItemClicked ? (
          ""
        ) : (
          <span className="title">
            В Базе знаний нет статьи по запросу "{props.searchText}"
          </span>
        )
      ) : (
        ""
      )}

      {!props.navItemClicked && props.itemsCount > 0 ? (
        <div className="nav-title">
          <span> По запросу "{props.searchText}"</span>
        </div>
      ) : (
        <div className="nav-title">
          <span>{props.selectedNavItem}</span>
        </div>
      )}

      {props.articles.length == 1 ? (
        props.searchText !== "empty" ? (
          <Text type="subtitle2">найдена: 1 статья</Text>
        ) : (
          ""
        )
      ) : props.itemsCount == 0 ? (
        <Text type="subtitle2">найдено: 0 статей</Text>
      ) : (
        <Text type="subtitle2">найдено: {props.articles.length} статьи</Text>
      )}
    </>
  );
};
