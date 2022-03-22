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
import "../../styles//app.css";


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


export const Shop = () => {
  let location = useLocation();


  const [data, setData] = useState<PhotoPprint[]>([]);

  const [pages, setPages] = useState<Number[]>([]);

  const [arrPages, setArrPages] = useState<number[]>([]);

  const [currentPage, setCurrentPage] = useState<string>("1");

  const [currentPerPage, setCurrentPerpage] = useState<string>("5");

  const [category, setCategory] = useState<string>("");

  const [count, setCount] = React.useState(0);

  const [userID, setUserID] = React.useState(0);

  const [comments, setComments] = React.useState();

  

  const [loading, setLoading] = useState(true);

  useEffect(() => {

   
    async function fetch() {
      let response: any;
      let page = getQueryVariable('page')
      let perPage =  getQueryVariable('per_page');   
      let category = getQueryVariable('category')
      let page_formatted = 1;
      if (!category) {
        category = ""
      } 

      if (page === null || page === false) {
        page_formatted = 1
        setCurrentPage("1")
      } else {
        page_formatted = parseInt(page)
        setCurrentPage(page.toString());
      }

      if (perPage === null  || perPage === false) {
        setCurrentPerpage("15");
      } else {
        setCurrentPerpage("15")
      }

      if (perPage === null || perPage === false  || page === null || page === false) {
        if (!category) {
          response = await GetPhotoPrints("some_token", "1", "15", "");  
        } else {
          response = await GetPhotoPrints("some_token", "1", "15", category);
        }
        
      } else {
        if (!category) {
          response = await GetPhotoPrints("some_token", page.toString(), "15", "");  
        } else {
          response = await GetPhotoPrints("some_token", page.toString(), "15", category);
        }
      }
      setCategory(category.toString());
      setData(response.result.merchants);
      let count = response.result.rows_count / 15;
      let page_count =  Math.ceil(count);
      let pages: Number[] = [];


      var index = 1; 

      if (page_formatted > 3) {
        index = page_formatted - 3
      } 

      
      for (var i =index; i <= page_count; i++) {
        pages.push(i);
        if (pages.length >=7) {
          pages.push(page_count)
          break;
        }
      }
      // if (!page || page == '' ) {
      //   if (count > 10 ) {
      //     for (var i=0; i < 10; i++) {
      //       pages.push(i+1)
      //     }  
      //   } else {
      //     for (var i=0; i < count; i++) {
      //       pages.push(i+1)
      //     }
      //   }
      // } else {

      //   if (count > 10 ) {
      //     for (var i=0; i < parseInt(page.toString(), 10) + 10; i++) {
      //       pages.push(i+1)
      //     }  
      //   } else {
      //     for (var i=0; i < count; i++) {
      //       pages.push(i+1)
      //     }
      //   }
        
      // }


      let user = JSON.parse(localStorage.getItem("user")!);
      let user_id;
      if (user != null) {
        user_id = user.id
        setUserID(parseInt(user.id));
      } else {
        user_id = 0
        setUserID(0);
      }

      setPages(pages);
      const responseComments = await GetComments("");
      if (responseComments.status === true && responseComments.message === "ok") {
        setComments(responseComments.result);
      } else {
      }
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
          <SiteHeader ordersCount={count}/>
          <section className="py-3" style={{backgroundColor: 'white'}}>
            <div className="container py-0">
              
              <div className="row">
              <Categories comments={comments}/>
                <div className="col-lg-9">
                  <Nav toShow={false} title="" firstTitle="Картины" firstTitleHref="/"/>
                  <h3 className="h4 text-uppercase mb-1 text-center">
                   Картины
                  </h3>
                  <div className="row gy-5 align-items-stretch">
                    {data.map((d) => (
                      <div className="col-lg-4 col-md-4 col-xs-6 col-6">
                        <Link to={"/item?id=" + d.id}>
                        <Card
                          title={d.title}
                          src={"https://photo-print.fra1.digitaloceanspaces.com/"+ d.category_dir + "/" + d.directory_name  + "/complex_2_resized.jpg"}
                          price={d.price}
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
