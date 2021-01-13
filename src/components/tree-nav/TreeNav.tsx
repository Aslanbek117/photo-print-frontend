
import React, { Component, FunctionComponent, useState, useEffect } from 'react';
import { Tree, Popover, Tooltip, Layout } from 'antd';
import { DownOutlined, MinusCircleOutlined } from '@ant-design/icons';
import { DataNode } from 'antd/lib/tree';
import { GetAllDirs } from '../backend-api/api'
import './tree-nav.css'
import HeaderTemp from '../header-temp/HeaderTemp';

const { Header, Content, Footer, Sider } = Layout;


interface TreeViewProps {
    onSelect: (selectedKeys: any, info: any) => void;
    treeData: any[];
    token: string;
}


//рекурсинвное решение отрицательно сказывается на памяти - в будущем требуется переписать. s
const renderTreeNodes = (data: any) =>
    data.length > 0 ? data.map((item: any) =>
        item.children ? (
            <Tree.TreeNode
                title={item.title} key={item.path}
            >
                {renderTreeNodes(item.children)}
            </Tree.TreeNode>
        ) : null
    ) : null;

export const TreeView: FunctionComponent<TreeViewProps> =  (props: TreeViewProps) => {
    const [treeData, setTreeData] = useState(props.treeData);
    const [int, setInt] = useState(0);

    const [loading, setLoading] = useState(true);
    function onLoadData(key: any, children: any) {
        return new Promise(async resolve => {
            if (children) {
                resolve();
                return;
            }
            let response: any;
            console.log("ZEBAL")
            response = await GetAllDirs(props.token, "../" + key.key);
            let sss = treeData;
            var i = 0;
            for (i = 0; i < treeData.length; i++) {
                if (treeData[i].path == key.key) {
                    sss[i].children = [];
                    response.result != undefined ? response.result.forEach((r: any) => {
                        sss[i].children!.push(r)
                    }) :
                        setTreeData(sss)
                }
            }

            //only for force re-render 
            setInt(Math.random());
            //************************ */
            setLoading(false);
            resolve();
        });
    }


    async function fetch() {
        const response = await GetAllDirs(props.token, "../");
        console.log("ZAEBAL", response)
        setTreeData(response.result)
        setLoading(false);
    }
    useEffect(() => {
        fetch();
        console.log(treeData)
        // setTreeData(props.treeData)
    }, [])

    return (
        <>
        
            <HeaderTemp user={{} as any} cityId={2} />
            <div className="container content">

            <Layout>



            <Sider >
            <span style={{backgroundColor: 'white'}}>
                Вернуться на главную
            </span>

            {loading ? null : (
                <Tree
                    // height={1000}
                    showIcon={true}
                    loadData={onLoadData as any}
                    // switcherIcon={<DownOutlined style={{ fontSize: '1.2em', color: 'red' }} />}
                    onSelect={props.onSelect}
                >
                    {renderTreeNodes(treeData)}
                </Tree>
            )}
            </Sider>
            <Content style={{ padding: '0 24px', minHeight: 280 }}>Content</Content>

            </Layout>
            </div>
      </>

    )

}