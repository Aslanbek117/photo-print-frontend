import React, { FunctionComponent, useState, useEffect } from 'react';
import { Tree } from 'antd';
import { GetAllDirs1 } from '../backend-api/api';
import './tree-nav.css';
import Icon from '../icon';

interface TreeViewProps {
  onSelect: (selectedKeys: any, info: any) => void;
  treeData: any[];
  token: string;
  items: any[];
  loading: boolean;
}

//рекурсинвное решение отрицательно сказывается на памяти - в будущем требуется переписать. s
const renderTreeNodes = (data: any) =>
  data.length >= 0
    ? data.map((item: any) =>
        item.children ? (
          <Tree.TreeNode
            title={item.title}
            key={item.path}
            style={{
              fontFamily: 'Roboto',
              fontSize: '14px',
              lineHeight: '20px !important',
              letterSpacing: '-0.4px/',
            }}
          >
            {renderTreeNodes(item.children)}
          </Tree.TreeNode>
        ) : (
          ''
        )
      )
    : '';

export const TreeView: FunctionComponent<TreeViewProps> = (props: TreeViewProps) => {
  const [treeData, setTreeData] = useState(props.treeData);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetch() {
      const response = await GetAllDirs1(props.token, '../');
      setTreeData(response.result);
      setLoading(false);
    }

    fetch();
  }, [props.token]);

  return (
    <>
      {loading ? (
        'loading'
      ) : (
        <>
          <Tree
            showIcon={true}
            onSelect={props.onSelect}
            treeData={treeData}
            // switcherIcon={<Icon icon="filled-arrow-bottom" width={10} height={6} />}
          >
            {/* {renderTreeNodes(treeData)} */}
          </Tree>
        </>
      )}
    </>
  );
};
