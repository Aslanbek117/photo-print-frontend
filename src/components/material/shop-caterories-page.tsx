import * as React from "react";
import TopBar from "../headers/top-bar.js";
import { Card } from "../card/card";
import { Categories } from "./categories";
import { PhotoPprint } from "../../models/search/Search";
import { useState, useEffect } from "react";
import { GetBasketList, GetComments, GetPhotoPrints } from "components/backend-api/api";
import Loader from "components/loader";
import { ShopPagination } from "./shop-pagination";
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import { Nav } from "./nav";
import { SiteHeader } from "../headers/header";
import { useLocation } from 'react-router-dom';
import { data } from '../card/data.js';
import "../../styles//app.css";
import { CategoryCard } from "components/card/category-card";


function getQueryVariable(variable)
{
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i=0;i<vars.length;i++) {
                    var pair = vars[i].split("=");
                    // console.log(pair)//[ 'app', 'article' ][ 'act', 'news_content' ][ 'aid', '160990' ] 
        if(pair[0] == variable){return pair[1];}
         }
         return(false);
}


export const ShopCategoriesPage = () => {
  let location = useLocation();

  const [pages, setPages] = useState<Number[]>([]);

  const [category, setCategory] = useState<string>("");

  const [userID, setUserID] = React.useState(0);

  const [comments, setComments] = React.useState();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetch() {
      setLoading(false);
    }

    fetch();
  }, [location.pathname]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="wide">
          <TopBar />
          <SiteHeader ordersCount={0}/>
          <section className="py-3" style={{backgroundColor: 'white'}}>
            <div className="container py-0">
              
              <div className="row">
              <Categories comments={comments}/>
                <div className="col-lg-9">
                  <Nav toShow={false} title="" firstTitle="Картины" firstTitleHref="/"/>
                  <h3 className="h4 text-uppercase mb-3 text-center">
                  Модульные картины
                  </h3>
                  <div className="row gy-5 align-items-stretch">
                    {data.map((d) => (
                      <div className="col-lg-6 col-md-6 col-xs-6 col-6">
                        <Link to={"/?page=1&per_page=100&category=Мосты"}>
                        <CategoryCard
                          title={d.title}
                          src={d.url}
                          price={0}
                          isDiscountEnable={false}
                        />
                        </Link>
                      </div>
                     ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* <Footer /> */}
        </div>
      )}
    </>
  );
};
