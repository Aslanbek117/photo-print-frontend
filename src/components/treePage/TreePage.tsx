import React, { useState, useEffect } from "react";
import { Search, GetAllDirs } from "../backend-api/api";
import { SearchResponseDTO } from "../../models/search/Search";
import { Layout } from "antd";
import { useLocation } from "react-router-dom";
import { TreeContent } from "../tree-content/TreeContent";
import { Article as ArticleModel } from "../../models/search/Search";
import { Header } from "../header-maha/Header";
import "./main.css";

const { Content } = Layout;

export const TreePage = (props: any) => {
  let location = useLocation();

  const [loading, setLoading] = useState(true);

  const [treeData, setTreeData] = useState<any[]>([]);

  const [suggest, setSuggest] = useState<ArticleModel[]>([]);

  const [searchText, setSearchText] = useState("");

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
        <Layout className="layout">
          <Header />
          <Content style={{ display: "flex", justifyContent: "center" }}>
            <div className="main-container">
              <div className="site-layout-content">
                <TreeContent
                  loading={loading}
                  items={suggest}
                  treeData={treeData}
                  searchText={searchText}
                />
              </div>
            </div>
          </Content>
        </Layout>
      ) : (
        "loading"
      )}
    </>
  );
};
