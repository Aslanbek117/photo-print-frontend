import React, { useState, useEffect } from "react";
import ArrowLeft from "./arrow-left.png";
import { Link } from "react-router-dom";
import "./styles.css";
export const BackToMainPage = (props: any) => {
  return (
    <span
      style={{
        fontFamily: "Roboto",
        fontSize: "16px",
        lineHeight: "20px !important",
        letterSpacing: "-0.4px/",
      }}
    >
      <img
        src={ArrowLeft}
        style={{ paddingLeft: "5px", width: 18, height: 12 }}
      />
      <span style={{ paddingLeft: "5px" }}>
        <Link to="/">Вернуться на главную</Link>
      </span>
    </span>
  );
};
