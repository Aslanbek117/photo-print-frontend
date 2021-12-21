import * as React from "react";
import TopBar from "./top-bar.js";
import Header from "./header.js";
import "./app.css";
import { Card } from "./card";
import { Categories } from "./categories";
import { Footer } from "./footer";
import { PhotoPprint } from "../../models/search/Search";
import { useState, useEffect } from "react";
import { GetPhotoPrints } from "components/backend-api/api";
import Loader from "components/loader";
import { ShopPagination } from "./shop-pagination";
import { useHistory } from "react-router";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

interface Props {
  id: number;
  text: string;
  href: string;
  setSelected: Function;
}

export const TabItem = (props: Props)  => {
    return (
        <li className="nav-item">
        <a
          className="nav-link active"
          role="presentation"
          aria-current="page"
          style={{
            letterSpacing: "1.4px",
            fontFamily: `"Ubuntu Regular",Ubuntu,sans-serif"`,
                        fontWeight: 400,
            fontSize: "19px",
            textTransform: "uppercase",
          }}
          data-bs-toggle="tab" data-bs-target="#home" type="button" aria-controls="home"
          onClick={() => (
            props.setSelected(props.id)
            )}
        >
          {props.text}
        </a>
      </li>
    )
    
  };



