import React, {
  FunctionComponent,
  useState,
  useEffect,
} from 'react';
import { Tree } from 'antd';
import { GetAllDirs, GetAllDirs1 } from '../backend-api/api';
import './tree-nav.css';


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

export const TreeView: FunctionComponent<TreeViewProps> = (
  props: TreeViewProps
) => {
  const [treeData, setTreeData] = useState(props.treeData);
  const [int, setInt] = useState(0);

  const [loading, setLoading] = useState(true);
  function onLoadData(key: any, children: any) {
    return new Promise(async resolve => {
      if (children) {
        resolve(null);
        return;
      }
      let response: any;
      response = await GetAllDirs(props.token, '' + key.key);

      let sss = treeData;
      var i = 0;
      for (i = 0; i < treeData.length; i++) {
        if (treeData[i].path == key.key) {
          sss[i].children = [];
          if (response.result != null) {
            response.result.forEach((r: any) => {
              sss[i].children!.push(r);
            });
          }
        }
      }
      setTreeData(sss);

      //only for force re-render
      setInt(Math.random());
      //************************ */
      setLoading(false);
      resolve(null);
    });
  }

  async function fetch() {
    const response = await GetAllDirs1(props.token, '../');
    setTreeData(response.result);
    setLoading(false);
    console.log(response.result);
  }
  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      {loading == true ? (
        'loading'
      ) : (
        <>
          <Tree
            showIcon={true}
            //   loadData={onLoadData as any}
            onSelect={props.onSelect}
            treeData={treeData}
          >
            {/* {renderTreeNodes(treeData)} */}
          </Tree>
        </>
      )}
    </>
  );
};
