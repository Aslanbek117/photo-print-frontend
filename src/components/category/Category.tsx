import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Row } from 'antd';

import Text from '../text';
import './category.css';

const fakeData = [
  {
    id: 1,
    title: 'Экспресс кредиты',
    description: 'Экспресс кредиты',
    content: 5,
  },
  {
    id: 2,
    title: 'Кредитые карты',
    description: 'Кредитные карты',
    content: 5,
  },
  {
    id: 3,
    title: 'Halyk light',
    description: 'Halyk light',
    content: 5,
  },
];

export const Category = (props: any) => {
  return (
    <>
      <div className="">
        <Row gutter={16}>
          <Col span={8}>
            <Card
              title={<Text type="subtitle2">Кредиты</Text>}
              bordered={false}
              style={{ backgroundColor: 'rgb(235,243,243)', borderRadius: 16 }}
              bodyStyle={{ paddingTop: '0' }}
            >
              {fakeData.map((item) => (
                <div className="list-item">
                  <Text>{item.title}</Text>
                  <div className="list-item-count">
                    <Text type="small">{item.content}</Text>
                  </div>
                </div>
              ))}
              <Link to="/nav/search=empty">
                <Text>Все разделы {'>'}</Text>
              </Link>
            </Card>
          </Col>
          <Col span={8}>
            <Card
              title={<Text type="subtitle2">Кредиты</Text>}
              bordered={false}
              style={{ backgroundColor: 'rgb(235,243,243)', borderRadius: 16 }}
              bodyStyle={{ paddingTop: '0' }}
            >
              {fakeData.map((item) => (
                <div className="list-item">
                  <Text>{item.title}</Text>
                  <div className="list-item-count">
                    <Text type="small">{item.content}</Text>
                  </div>
                </div>
              ))}
              <Link to="/nav/search=empty">
                <Text>Все разделы {'>'}</Text>
              </Link>
            </Card>
          </Col>
          <Col span={8}>
            <Card
              title={<Text type="subtitle2">Кредиты</Text>}
              bordered={false}
              style={{ backgroundColor: 'rgb(235,243,243)', borderRadius: 16 }}
              bodyStyle={{ paddingTop: '0' }}
            >
              {fakeData.map((item) => (
                <div className="list-item">
                  <Text>{item.title}</Text>
                  <div className="list-item-count">
                    <Text type="small">{item.content}</Text>
                  </div>
                </div>
              ))}
              <Link to="/nav/search=empty">
                <Text>Все разделы {'>'}</Text>
              </Link>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};
