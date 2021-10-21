import React, { useState, useEffect } from "react";
import { Row, Col } from "antd";
import { Card, Divider } from "antd";
import { Image } from "antd";
import { Typography } from "@mui/material";
const { Title } = Typography;

const { Meta } = Card;
const { Text, Link } = Typography;

const style = { background: "#0092ff", padding: "8px 0" };

export const CardComponent = (props) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <>
      <Divider orientation="left">
        <h1
          style={{
            fontFamily: "Ubuntu Regular,Ubuntu,sans-serif",
            lineHeight: "32px",
            fontWeight: "300",
            color: '#000'
          }}
        >
          Модульные картины на стену
        </h1>
      </Divider>

      <Row gutter={[36, 8]} justify="center">
        <Col span={12} md={9} xs={12} sm={12} lg={9}>
          <Card
            hoverable
            bodyStyle={{ maxHeight: 300 }}
            cover={
              <Image
                alt="example"
                src="https://www.allstick.ru/@s/image-cache/a9b/a9b40eb54800-u..product-category~695~5b39fbc60f687.w.500~xgxgx.jpg"
              />
            }
          >
            <Meta title="Архитектура" />
          </Card>
        </Col>

        <Col span={12} md={9} xs={12} sm={12} lg={9}>
          <Card
            hoverable
            cover={
              <Image
                alt="example"
                src="https://www.allstick.ru/@s/image-cache/29b/29bbd4119946-u..product-category~701~60c302a6a4501.w.500~xgxgx.jpg"
              />
            }
          >
            <Meta title="Карта мира" />
          </Card>
        </Col>
      </Row>
    </>
  );
};
