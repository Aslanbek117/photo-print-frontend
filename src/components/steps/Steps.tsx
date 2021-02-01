import React from 'react';
import { List, Image } from 'antd';
import Text from '../text';
import './steps.css';
import { ProcessModel } from '../../models/search/Search';

interface StepsProps {
  data: any;
}

export const StepsComponent = (props: StepsProps) => {
  return (
    <>
      <List
        itemLayout="horizontal"
        dataSource={props.data}
        renderItem={(item: any, index) => (
          <>
            <List.Item>
              <List.Item.Meta
                avatar={
                  <div className="index-container">
                    <Text type="subtitle2" color="#008060">
                      {index + 1}
                    </Text>
                  </div>
                }
                description={
                  <>
                    <Text>{item?.description}</Text>
                    <br />
                    {item?.files?.map(f => (
                      <>
                        <div
                          style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'space-between',
                          }}
                        >
                          <div className="img-border">
                            <Image
                              className="img-style"
                              src={'http://halyk-wiki.cfp.corp.p-s.kz/file-server/' + f.name}
                            />
                            <Text type="small" color="#171717" style={{ maxWidth: 120 }}>
                              {f.name}
                            </Text>
                          </div>
                        </div>
                      </>
                    ))}
                  </>
                }
              />
            </List.Item>
          </>
        )}
      />
    </>
  );
};
