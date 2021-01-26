import React, { useState, useEffect } from "react";
import { SearchTop } from "../search/Search";
import { Category } from "../category/Category";
import { Layout } from "antd";
import Text from "../text";
import { Header } from "../header-maha/Header";
import "./main.css";
const { Content } = Layout;

export const MainPage = (props: any) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <Layout className="layout">
      {!loading ? (
        <>
          <Header />

          <Content style={{ display: "flex", justifyContent: "center" }}>
            <div className="main-container">
              <div className="site-layout-content">
                <Text type="title">Добро пожаловать в "Базу знаний"</Text>
                <SearchTop />
                <div style={{ paddingTop: "50px" }}></div>
                <Text type="subtitle1">Поиск по категориям</Text>
                <div style={{ paddingTop: "20px" }}></div>
                <Category />
              </div>
            </div>
          </Content>
        </>
      ) : (
        "loading"
      )}
    </Layout>
  );
};
