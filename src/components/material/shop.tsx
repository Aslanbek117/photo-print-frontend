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
import { Nav } from "./nav";
import SiteHeader from "./header.js";

function getQueryVariable(variable)
{
        var query = window.location.search.substring(1);
        console.log(query)//"app=article&act=news_content&aid=160990"
        var vars = query.split("&");
        console.log(vars) //[ 'app=article', 'act=news_content', 'aid=160990' ]
        for (var i=0;i<vars.length;i++) {
                    var pair = vars[i].split("=");
                    // console.log(pair)//[ 'app', 'article' ][ 'act', 'news_content' ][ 'aid', '160990' ] 
        if(pair[0] == variable){return pair[1];}
         }
         return(false);
}


export const Shop = () => {
  const [data, setData] = useState<PhotoPprint[]>([]);

  const [pages, setPages] = useState<Number[]>([]);

  const [arrPages, setArrPages] = useState<number[]>([]);

  const [currentPage, setCurrentPage] = useState<string>("1");

  const [currentPerPage, setCurrentPerpage] = useState<string>("50");

  const [category, setCategory] = useState<string>("");


  const [loading, setLoading] = useState(true);

  useEffect(() => {
   
    //160990

    async function fetch() {
      let response: any;
      let page = getQueryVariable('page')
      let perPage =  getQueryVariable('per_page');   
      let category = getQueryVariable('category')
      
      if (!category) {
        category = ""
      } 

      if (page === null || page === false) {
        setCurrentPage("1")
      } else {
        setCurrentPage(page.toString());
      }

      if (perPage === null  || perPage === false) {
        setCurrentPerpage("50");
      } else {
        setCurrentPerpage("50")
      }

      if (perPage === null || perPage === false  || page === null || page === false) {
        if (!category) {
          response = await GetPhotoPrints("some_token", "1", "50", "");  
        } else {
          response = await GetPhotoPrints("some_token", "1", "50", category);
        }
        
      } else {
        if (!category) {
          response = await GetPhotoPrints("some_token", page.toString(), "50", "");  
        } else {
          response = await GetPhotoPrints("some_token", page.toString(), "50", category);
        }
      }
      setCategory(category.toString());
      setData(response.result.merchants);
      let count = response.result.rows_count / 50;
      let page_count =  Math.floor(count);
      let pages: Number[] = [];
      if (!page || page == '' ) {
        if (count > 10 ) {
          for (var i=0; i < 10; i++) {
            pages.push(i)
          }  
        } else {
          for (var i=0; i < count; i++) {
            pages.push(i)
          }
        }
      } else {

        if (count > 10 ) {
          for (var i=parseInt(page.toString(), 10); i < parseInt(page.toString(), 10) + 10; i++) {
            pages.push(i+1)
          }  
        } else {
          for (var i=parseInt(page.toString(), 10); i < count; i++) {
            pages.push(i+1)
          }
        }
        
      }
      
      setPages(pages);
      setLoading(false);
    }

    fetch();
  }, []);

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
                  <Nav />
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
                  <ShopPagination page={currentPage} per_page={currentPerPage} pages={pages as number[]} category={category}/>
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
