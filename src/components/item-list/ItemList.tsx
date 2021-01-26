import React from "react";
import { Breadcrumb, List } from "antd";
import NotFound from "./not_found.png";
import "./styles.css";


interface ItemProps {
  items: any[];
  onClick: (article_id: number) => void;
  navItemClicked: boolean;
  isLoading: boolean;
}

export const ItemList = (props: ItemProps) => {
  return (
    <>
      {props.items.length === 0 && !props.navItemClicked ? (
        <>
          <div>
            <img src={NotFound} />
            <span className="text" style={{ paddingLeft: 20 }}>
              Попробуйте еще раз! Либо найдите нужную статью в категории
            </span>
          </div>
        </>
      ) : (
        ""
      )}
      {props.isLoading ? "loading" : <>
        {props.items.length > 0 ? (
            <List
            itemLayout="vertical"
            size="small"
            pagination={
                {
                    onChange: page => {
                        console.log(page);
                    },

                    pageSize: 3,
                }
            }
            dataSource={props.items}
            locale={{emptyText: "В данной категории отсутствуют статьи"}}
            renderItem={item => (
                <List.Item
                    key={item.title}
                    style={{ paddingLeft: '0' }}
                >
                    <List.Item.Meta
                        title={<a style={{ color: 'rgb(0,128,96)' }} onClick={() => {
                            if (item.id === undefined) {
                                props.onClick(item.article_id)
                            } else {
                                props.onClick(item.id)
                            }
                        }}>{item.title}</a>}
                        description={<>
                            <Breadcrumb>
                                <Breadcrumb.Item> {item.path} </Breadcrumb.Item>
                                {/* <Breadcrumb.Item>
                                    <a href=""> {item.category_name}  </a>
                                </Breadcrumb.Item>
                                <Breadcrumb.Item>
                                    <a href=""> {item.subcategory_name} </a>
                                </Breadcrumb.Item> */}
                            </Breadcrumb>
                        </>}
                    />
                    {item.title}
                </List.Item>
            )} />
        ) : ''}
        </>}
    </>
  );
};
