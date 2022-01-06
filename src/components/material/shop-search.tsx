import * as React from "react";
import TopBar from "./top-bar.js";
import Header from "./header.js";
import "./app.css";
import { Card } from "./card";
import { Categories } from "./categories";
import { Footer } from "./footer";
import { PhotoPprint } from "../../models/search/Search";
import { useState, useEffect } from "react";
import { GetPhotoPrints, SearchItems } from "components/backend-api/api";
import Loader from "components/loader";
import { ShopPagination } from "./shop-pagination";
import { useHistory } from "react-router";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Nav } from "./nav";
import SiteHeader from "./header.js";
import { useLocation } from 'react-router-dom';


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


export const ShopSearch = () => {

let location = useLocation();


  const [data, setData] = useState<PhotoPprint[]>([]);

  const [pages, setPages] = useState<Number[]>([]);

  const [arrPages, setArrPages] = useState<number[]>([]);

  const [currentPage, setCurrentPage] = useState<string>("1");

  const [currentPerPage, setCurrentPerpage] = useState<string>("50");

  const [category, setCategory] = useState<string>("");

  const [searchValue, setSearchValue] = useState("")
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      console.log("SEaRCH COMPONENT")
    async function fetch() {
        console.log("localtion", window.location.pathname)
        let response: any;
        let text = getQueryVariable('search')

        if ((text.toString().length) >0 ) {
            response = await SearchItems("token", text.toString());
            setData(response.result);
        }
        setLoading(false);
    }

    const { state } = location;
    const { searchValue, categoryToExpand } = state;
    setSearchValue(searchValue)


    fetch();
  }, [location.pathname, location]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="wide" id="all">
          <TopBar />
          <SiteHeader />
          <section className="py-3" style={{backgroundColor: 'white'}}>
            <div className="container py-0">
              
              <div className="row g-5">
              <Categories />
                <div className="col-lg-9">
                  <Nav toShow={false} title="" firstTitle="Картины" firstTitleHref="/"/>
                  <h3 className="h4 text-uppercase mb-4 text-center">
                  Модульные картины
                  </h3>
                  <div className="row gy-5 align-items-stretch">
                    {data.map((d) => (
                      <div className="col-lg-4 col-md-4 col-xs-6 col-6">
                        <Link to={"/item?id=" + d.id}>
                        <Card
                          title={d.title}
                          src={"http://localhost:9092/" + d.complex_3}
                          price={d.id}
                          isDiscountEnable={false}
                        />
                        </Link>
                      </div>
                    ))}
                  </div>
                  {/* <ShopPagination page={currentPage} per_page={currentPerPage} pages={pages as number[]} category={category}/> */}
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
