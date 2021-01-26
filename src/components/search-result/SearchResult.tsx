import React from "react";
import { Typography } from "antd";
import Item from "antd/lib/list/Item";
const { Text } = Typography;

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
      <Typography>
        {(props.itemsCount === 0 && !props.navItemClicked) === true ? (
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

        {!props.navItemClicked && props.itemsCount > 0? (
          <div className="nav-title">
            <span> По запросу "{props.searchText}"</span>
          </div>
        ) : (
          <div className="nav-title">
            <span>{props.selectedNavItem}</span>
          </div>
        )}

        {props.articles.length == 1 ? (
          <>
            <Text
              strong={true}
              style={{
                backgroundColor: "rgb(249,250,250)",
                color: "black !important",
              }}
            >
              {props.searchText !== "empty" ? (
                <Text
                  strong={true}
                  style={{
                    backgroundColor: "rgb(249,250,250)",
                    color: "black !important",
                  }}
                ></Text>
              ) : (
                ""
              )}
              <br />
              найдена: 1 статья
            </Text>
          </>
        ) : props.itemsCount == 0 ? (
          <Text
            strong={true}
            style={{
              backgroundColor: "rgb(249,250,250)",
              color: "black !important",
            }}
          >
            найдено: 0 статей
          </Text>
        ) : (
          <Text
            strong={true}
            style={{
              backgroundColor: "rgb(249,250,250)",
              color: "black !important",
            }}
          >
            найдено: {props.articles.length} статьи
          </Text>
        )}
      </Typography>
    </>
  );
};
