import React, { useState, useEffect } from "react";

import { Button } from "antd";
import { Search, GetAllDirs } from "../backend-api/api";
import { SearchResponseDTO } from "../../models/search/Search";
import HalykLogo from "./halyk-logo.png";
import { Layout, Typography } from "antd";
import { useLocation } from "react-router-dom";
import { TreeContent } from "../tree-content/TreeContent";
import { DepartmentModal } from "../modals/DepartmentModal";
import { Article as ArticleModel } from "../../models/search/Search";
import { Header } from "../header-maha/Header";
import "./main.css";

const { Content } = Layout;
const { Text } = Typography;

export const TreePage = (props: any) => {
  let location = useLocation();

  const [loading, setLoading] = useState(true);

  const [treeData, setTreeData] = useState<any[]>([]);

  const [suggest, setSuggest] = useState<ArticleModel[]>([]);

  const [article, setArticle] = useState<ArticleModel>();

  const [isModalVisible, setIsModalVisible] = useState(false);

  const [searchText, setSearchText] = useState("");

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  async function fetch() {
    const response = await GetAllDirs(props.token, "../");
    setTreeData(response.result);
    setLoading(false);
  }

  useEffect(() => {
    fetch();
    let query = location.pathname.slice(
      location.pathname.lastIndexOf("=") + 1,
      location.pathname.length
    );
    setSearchText(query);
    // if (location.pathname='/')
    if (location.pathname != "/" && query != "empty") {
      searchArticles(query);
    } else {
      setLoading(false);
    }
  }, []);

  const searchArticles = async (searchValue: string) => {
    const resp: SearchResponseDTO = await Search("", searchValue);

    if (resp.result === null) {
      setSuggest([]);
    } else {
      setSuggest(resp.result);
      setLoading(false);
    }
  };

  return (
    <>
      {!loading ? (
        <Layout
          className="layout"
          style={{ backgroundColor: "rgb(243,246,248)" }}
        >

         <Header />
          
          <Content
            style={{ padding: "0 50px" }}
          >
            <div className="site-layout-content">
              <TreeContent
                article={article}
                loading={loading}
                items={suggest}
                treeData={treeData}
                searchText={searchText}
              />
            </div>
          </Content>
          {isModalVisible && (
            <DepartmentModal
              title={"Филиалы"}
              isVisible={isModalVisible}
              onOk={handleOk}
              onCancel={handleCancel}
            />
          )}
        </Layout>
      ) : (
        "loading"
      )}
    </>
  );
};
