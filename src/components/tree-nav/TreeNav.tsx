
import React, { Component, FunctionComponent, useState, useEffect } from 'react';
import { Tree, Popover, Tooltip, Layout } from 'antd';
import { DataNode } from 'antd/lib/tree';
import { GetAllDirs, GetAllDirs1 } from '../backend-api/api'
import './tree-nav.css'



const treeDate = [
    {
        "title": "test-folder",
        "path": "/Users/aslan/test-folder",
        "key": "/Users/aslan/test-folder",
        "info": {
            "name": "test-folder",
            "original_name": "test-folder",
            "dir": "test-folder",
            "path": "test-folder/test-folder",
            "extension": "",
            "size": 160,
            "mod_time": "2021-01-16T22:03:39.856577067+06:00",
            "is_dir": true,
            "mime": "inode/directory"
        },
        "children": [
            {
                "title": "three",
                "path": "/Users/aslan/test-folder/three",
                "key": "/Users/aslan/test-folder/three",
                "info": {
                    "name": "three",
                    "original_name": "three",
                    "dir": "three",
                    "path": "three/three",
                    "extension": "",
                    "size": 96,
                    "mod_time": "2021-01-16T22:04:23.583764211+06:00",
                    "is_dir": true,
                    "mime": "inode/directory"
                },
                "children": [
                    {
                        "title": "three-three",
                        "path": "/Users/aslan/test-folder/three/three-three",
                        "key": "/Users/aslan/test-folder/three/three-three",
                        "info": {
                            "name": "three-three",
                            "original_name": "three-three",
                            "dir": "three-three",
                            "path": "three-three/three-three",
                            "extension": "",
                            "size": 96,
                            "mod_time": "2021-01-16T22:04:32.803636293+06:00",
                            "is_dir": true,
                            "mime": "inode/directory"
                        },
                        "children": [
                            {
                                "title": "three-three-three",
                                "path": "/Users/aslan/test-folder/three/three-three/three-three-three",
                                "key": "/Users/aslan/test-folder/three/three-three/three-three-three",
                                "info": {
                                    "name": "three-three-three",
                                    "original_name": "three-three-three",
                                    "dir": "three-three-three",
                                    "path": "three-three-three/three-three-three",
                                    "extension": "",
                                    "size": 64,
                                    "mod_time": "2021-01-16T22:04:32.803624907+06:00",
                                    "is_dir": true,
                                    "mime": "inode/directory"
                                },
                                "children": []
                            }
                        ]
                    }
                ]
            },
            {
                "title": "two",
                "path": "/Users/aslan/test-folder/two",
                "key": "/Users/aslan/test-folder/two",
                "info": {
                    "name": "two",
                    "original_name": "two",
                    "dir": "two",
                    "path": "two/two",
                    "extension": "",
                    "size": 96,
                    "mod_time": "2021-01-16T22:04:07.9807106+06:00",
                    "is_dir": true,
                    "mime": "inode/directory"
                },
                "children": [
                    {
                        "title": "two-two",
                        "path": "/Users/aslan/test-folder/two/two-two",
                        "key": "/Users/aslan/test-folder/two/two-two",
                        "info": {
                            "name": "two-two",
                            "original_name": "two-two",
                            "dir": "two-two",
                            "path": "two-two/two-two",
                            "extension": "",
                            "size": 96,
                            "mod_time": "2021-01-16T22:04:12.408913596+06:00",
                            "is_dir": true,
                            "mime": "inode/directory"
                        },
                        "children": [
                            {
                                "title": "two-two-two",
                                "path": "/Users/aslan/test-folder/two/two-two/two-two-two",
                                "key": "/Users/aslan/test-folder/two/two-two/two-two-two",
                                "info": {
                                    "name": "two-two-two",
                                    "original_name": "two-two-two",
                                    "dir": "two-two-two",
                                    "path": "two-two-two/two-two-two",
                                    "extension": "",
                                    "size": 64,
                                    "mod_time": "2021-01-16T22:04:12.408901647+06:00",
                                    "is_dir": true,
                                    "mime": "inode/directory"
                                },
                                "children": []
                            }
                        ]
                    }
                ]
            },
            {
                "title": "one",
                "path": "/Users/aslan/test-folder/one",
                "key": "/Users/aslan/test-folder/one",
                "info": {
                    "name": "one",
                    "original_name": "one",
                    "dir": "one",
                    "path": "one/one",
                    "extension": "",
                    "size": 96,
                    "mod_time": "2021-01-16T22:03:49.025996655+06:00",
                    "is_dir": true,
                    "mime": "inode/directory"
                },
                "children": [
                    {
                        "title": "one-one",
                        "path": "/Users/aslan/test-folder/one/one-one",
                        "key": "/Users/aslan/test-folder/one/one-one",
                        "info": {
                            "name": "one-one",
                            "original_name": "one-one",
                            "dir": "one-one",
                            "path": "one-one/one-one",
                            "extension": "",
                            "size": 96,
                            "mod_time": "2021-01-16T22:03:59.158950745+06:00",
                            "is_dir": true,
                            "mime": "inode/directory"
                        },
                        "children": [
                            {
                                "title": "one-one-one",
                                "path": "/Users/aslan/test-folder/one/one-one/one-one-one",
                                "key": "/Users/aslan/test-folder/one/one-one/one-one-one",
                                "info": {
                                    "name": "one-one-one",
                                    "original_name": "one-one-one",
                                    "dir": "one-one-one",
                                    "path": "one-one-one/one-one-one",
                                    "extension": "",
                                    "size": 64,
                                    "mod_time": "2021-01-16T22:03:59.158940599+06:00",
                                    "is_dir": true,
                                    "mime": "inode/directory"
                                },
                                "children": []
                            }
                        ]
                    }
                ]
            }
        ]
    }
]


interface TreeViewProps {
    onSelect: (selectedKeys: any, info: any) => void;
    treeData: any[];
    token: string;
    items: any[];
    loading: boolean;
}


//рекурсинвное решение отрицательно сказывается на памяти - в будущем требуется переписать. s
const renderTreeNodes = (data: any) =>
    data.length >= 0 ? data.map((item: any) =>
        item.children ? (
            <Tree.TreeNode
                title={item.title} key={item.path} style={{fontFamily: 'Roboto', fontSize: "14px", lineHeight: '20px !important', letterSpacing: "-0.4px/"}}
            >
                {renderTreeNodes(item.children)}
            </Tree.TreeNode>
        ) : 'xui'
    ) : 'pizda';

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
            response = await GetAllDirs(props.token, "" + key.key);
            
            let sss = treeData;
            var i = 0;
            for (i = 0; i < treeData.length; i++) {
                if (treeData[i].path == key.key) {
                    sss[i].children = [];
                    if (response.result != null) {
                        response.result.forEach((r: any) => {
                            sss[i].children!.push(r)
                        })
                    }
                        
                }
            }
            setTreeData(sss)

            //only for force re-render 
            setInt(Math.random());
            //************************ */
            setLoading(false);
            resolve();
        });
    }


    async function fetch() {
        const response = await GetAllDirs1(props.token, "../");
        setTreeData(response.result)
        setLoading(false);
        console.log(response.result)
    }
    useEffect(() => {
        fetch();
        console.log("TREE", treeData)
    }, [props.treeData])

    return (
        <>
        
        {loading == true ? 'loading' : (
                <>
              <Tree
              showIcon={true}
            //   loadData={onLoadData as any}
              onSelect={props.onSelect}
              treeData={treeDate}
          >
              {/* {renderTreeNodes(treeData)} */}
            </Tree>
            </>
        )}
       
        </>
    )

}