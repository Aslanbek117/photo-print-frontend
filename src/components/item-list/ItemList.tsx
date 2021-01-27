import React from 'react';
import { Breadcrumb, List } from 'antd';
import './styles.css';
import Icon from '../icon';

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
            <Icon icon="empty-list" width={132} height={122} />
            <span className="text" style={{ paddingLeft: 20 }}>
              Попробуйте еще раз! Либо найдите нужную статью в категории
            </span>
          </div>
        </>
      ) : (
        ''
      )}
      {props.isLoading ? (
        'loading'
      ) : (
        <>
          {props.items.length > 0 ? (
            <List
              itemLayout="vertical"
              size="small"
              pagination={{
                onChange: (page) => {
                  console.log(page);
                },

                pageSize: 3,
              }}
              dataSource={props.items}
              locale={{ emptyText: 'В данной категории отсутствуют статьи' }}
              renderItem={(item) => (
                <List.Item key={item.title} style={{ paddingLeft: '0' }}>
                  <List.Item.Meta
                    title={
                      <span
                        style={{ color: 'rgb(0,128,96)' }}
                        onClick={() => {
                          if (item.id === undefined) {
                            props.onClick(item.article_id);
                          } else {
                            props.onClick(item.id);
                          }
                        }}
                      >
                        {item.title}
                      </span>
                    }
                    description={
                      <>
                        <Breadcrumb>
                          <Breadcrumb.Item> {item.path} </Breadcrumb.Item>
                          {/* <Breadcrumb.Item>
                                    <a href=""> {item.category_name}  </a>
                                </Breadcrumb.Item>
                                <Breadcrumb.Item>
                                    <a href=""> {item.subcategory_name} </a>
                                </Breadcrumb.Item> */}
                        </Breadcrumb>
                      </>
                    }
                  />
                  {item.title}
                </List.Item>
              )}
            />
          ) : (
            ''
          )}
        </>
      )}
    </>
  );
};
