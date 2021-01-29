import React from 'react';
import { Breadcrumb, List } from 'antd';
import './styles.css';
import Icon from '../icon';
import Text from '../text';
import Loader from '../loader';

interface ItemProps {
  items: any[];
  onClick: (article_id: number) => void;
  navItemClicked: boolean;
  isLoading: boolean;
}

export const ItemList = (props: ItemProps) => {
  return (
    <>
      {props.items?.length === 0 && !props.navItemClicked && (
        <div>
          <Icon icon="empty-list" width={132} height={122} />
          <span className="text" style={{ paddingLeft: 20 }}>
            Попробуйте еще раз! Либо найдите нужную статью в категории
          </span>
        </div>
      )}
      {props.isLoading ? (
        <Loader />
      ) : (
        <>
          {props.items?.length > 0 && (
            <List
              itemLayout="vertical"
              size="small"
              pagination={{
                onChange: page => {
                  console.log(page);
                },

                pageSize: 3,
              }}
              dataSource={props.items}
              locale={{ emptyText: 'В данной категории отсутствуют статьи' }}
              renderItem={item => (
                <List.Item key={item.title} style={{ paddingLeft: '0' }}>
                  <List.Item.Meta
                    title={
                      <Text
                        type="subtitle2"
                        color="#008060"
                        onClick={() => {
                          if (item.id === undefined) {
                            props.onClick(item.article_id);
                          } else {
                            props.onClick(item.id);
                          }
                        }}
                      >
                        {item.title}
                      </Text>
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
                        <Text color="#8F92A1" style={{ marginTop: '10px' }}>
                          {item.title}
                        </Text>
                      </>
                    }
                  />
                </List.Item>
              )}
            />
          )}
        </>
      )}
    </>
  );
};
