import React, { useState } from 'react';

import { Layout, Menu, Breadcrumb, Typography, Divider } from 'antd';
import Title from 'antd/lib/typography/Title';
import { useHistory, useLocation } from "react-router-dom";
import { TreeView } from '../tree-nav/TreeNav';
import { ItemList } from '../item-list/ItemList';
import { ArrowLeftOutlined } from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;

const { Text, Link } = Typography;



export const TreeContent = (props: any) => {
    const [loading, SetLoading] = useState(false);

    return (
        <>

            <Layout>
            
                <Sider theme='light' style={{borderTopLeftRadius: '24px', paddingTop: '20px'}}>
                <span style={{fontFamily: 'Roboto', fontSize: "14px", lineHeight: '20px !important', letterSpacing: "-0.4px/"}}>
                <ArrowLeftOutlined style={{paddingLeft: '5px', marginRight: '10px'}}/>
                    Вернуться на главную
                </span>
                    {/* <span > */}
            {/* </span> */}
                    {loading ? null : (
                        <TreeView onSelect={{} as any} treeData={[]} token="" />
                    )}
                </Sider>

                <Divider type="vertical" style={{ height: "100%", margin: "0 0px" }} />

                <Content style={{ padding: '0 24px', minHeight: 280, backgroundColor: 'white', paddingTop: '15px', borderTopRightRadius: '24px'}} >
                <Typography>
                        <Title>Кредитные карты</Title>
                        <Text  strong={true} style={{backgroundColor:"rgb(249,250,250)", color:"black !important"}}>найдено: 3 статьи</Text>
                </Typography>

                <Divider type="horizontal"/>

                
                <ItemList />


                </Content>
            </Layout>
        </>
    )
}

