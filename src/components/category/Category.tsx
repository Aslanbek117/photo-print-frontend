import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Row, Skeleton } from 'antd';

import Text from '../text';
import './category.css';
import { EntityWithCategoriesDTO } from '../../models/search/Search';
import { GetEntityArticleCount } from '../backend-api/api';
import Loader from '../loader';
const { Meta } = Card;

export const Category = (props: any) => {
  const [data, setData] = useState<EntityWithCategoriesDTO[]>([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetch() {
      const response = await GetEntityArticleCount(props.token);
      setData(response.result);
      console.log(response.result);
      setLoading(false);
    }

    fetch();
  }, [props.token]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="">
          <Row gutter={[16, 16]}>
            {data?.map(i => (
              <Col span={8}>
                <Card
                  title={<Text type="subtitle2">{i.title}</Text>}
                  bordered={false}
                  style={{
                    backgroundColor: 'rgb(235,243,243)',
                    borderRadius: 16,
                  }}
                  bodyStyle={{ paddingTop: '0' }}
                >
                  {i.categories.map(item => (
                    <div className="list-item">
                      <Link
                        to={{
                          pathname: '/search',
                          state: {
                            searchValue: '',
                            categoryToExpand: [i.title, item.category_title],
                          },
                        }}
                      >
                        <Text>{item.category_title}</Text>
                      </Link>
                      <div className="list-item-count">
                        <Text type="small">{item.article_count}</Text>
                      </div>
                    </div>
                  ))}
                  <Link
                    to={{
                      pathname: '/search',
                      state: { searchValue: '', categoryToExpand: [''] },
                    }}
                  >
                    <Text>Все разделы {'>'}</Text>
                  </Link>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      )}
    </>
  );
};
