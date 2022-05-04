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
import { Footer } from "footer/footer";
import { Helmet } from "react-helmet";



function getQueryVariable(variable)
{
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i=0;i<vars.length;i++) {
                    var pair = vars[i].split("=");
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

  const [catalogCategory, setCatalogCategory] = React.useState("")

  const [title, setTitle] = React.useState("");

  const [categorySelected, setCategorySelected] = React.useState(false);
  

  const [loading, setLoading] = useState(true);

  const [keyword, setKeyword] = useState("Картины");

  useEffect(() => {

   
    async function fetch() {
      let response: any;
      let tt = window.location.href
      let c = tt.split("/").length - 3
      let category = ""
      if (c == 3) {
        let catalogIndex = tt.lastIndexOf("catalog/")
        let lastSlashIndex = tt.lastIndexOf("/")
        category = tt.substring(catalogIndex + 8 , lastSlashIndex)
        setCatalogCategory(category)
        setCategorySelected(true);

        if (category == "abstraction") {
          setKeyword("Картины бстракции")
        } else if (category == "ship") {
          setKeyword("Картины Корабли")
        } else if (category == "space") {
          setKeyword("Картины космоса")
        } else if (category == "watercolor") {
          setKeyword("Картины акварелью")
        } else if (category == "animal") {
          setKeyword("Картины животных")
        } else if (category == "landscape") {
          setKeyword("Картины пейзажа")
        } else if (category == "architecture") {
          setKeyword("Картины архитектура")
        } else if (category == "black_and_white") {
          setKeyword("Картины черно белые")
        } else if (category == "bridges") {
          setKeyword("Картины мостиков")
        } else if (category == "cities") {
          setKeyword("Картины городов")
        } else if (category =="flowers") {
          setKeyword("Картины цветов")
        } else if (category == "nature") {
          setKeyword("Картины природы")
        } else if (category == "retro") {
          setKeyword("Картины ретро")
        } else {
          setKeyword("Картины")
        }
      } else if (c == 1) {
        category = ""
        setCatalogCategory("")
        setCategorySelected(false);
      } else {
        let catalogIndex = tt.lastIndexOf("catalog/")
        category = tt.substring(catalogIndex + 8, tt.length)
        setCatalogCategory(category)
        setCategorySelected(true)
        if (category == "abstraction") {
          setKeyword("Картины бстракции")
        } else if (category == "ship") {
          setKeyword("Картины Корабли")
        } else if (category == "space") {
          setKeyword("Картины космоса")
        } else if (category == "watercolor") {
          setKeyword("Картины акварелью")
        } else if (category == "animal") {
          setKeyword("Картины животных")
        } else if (category == "landscape") {
          setKeyword("Картины пейзажа")
        } else if (category == "architecture") {
          setKeyword("Картины архитектура")
        } else if (category == "black_and_white") {
          setKeyword("Картины черно белые")
        } else if (category == "bridges") {
          setKeyword("Картины мостиков")
        } else if (category == "cities") {
          setKeyword("Картины городов")
        } else if (category =="flowers") {
          setKeyword("Картины цветов")
        } else if (category == "nature") {
          setKeyword("Картины природы")
        } else if (category == "retro") {
          setKeyword("Картины ретро")
        } else {
          setKeyword("Картины")
        }
      }

      let page = getQueryVariable('page')
      if (category) {
        document.title = decodeURI(category + " - print-shop.kz")
      } else {
        document.title = "Картины - print-shop.kz"
      }

      if (page === null || page === false) {
        setCurrentPage("1")
      } else {
        setCurrentPage(page.toString());
      }


      if (page === null || page === false) {
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

      
      for (var i =index; i <= page_count; i++) {
        pages.push(i);
        if (pages.length >=7) {
          pages.push(page_count)
          break;
        }
      }

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
      if (catalogCategory.length == 0) {
          setTitle( "Картины недорого - Фото и цены | Купить")
      } else {
        setTitle("Картины " + catalogCategory + " недорого - Фото и цены | Купить")
      }
      setLoading(false);
      
    }

    fetch();
  }, [location.pathname]);

  return (
    <>
        <div className="wide">
          <Helmet>
            <title>
              {keyword}
            </title>
            <meta name="keywords" content={keyword} />
            {categorySelected ? (
              <meta name="description" content={"Картины на Холсте для интерьера недорого. Купите  " + keyword +  " на стену в интернет магазине от 5000 тг. Отличное качество, экологичные материалы от print-shop.kz. Изготовление 2-4 дня. Удобная доставка."} />
            ) : (
              <meta name="description" content={"Картины на Холсте для интерьера недорого. Купите картины на стену в интернет магазине от 5000 тг. Отличное качество, экологичные материалы от print-shop.kz. Изготовление 2-4 дня. Удобная доставка."} />
            )}
  
            <meta property="og:title" content={keyword + " - на сайте print-shop.kz"} />
            {keyword == "Картины" ? (
              <meta property="og:url" content={"https://print-shop.kz" + catalogCategory} />  
            ) : (
              <meta property="og:url" content={"https://print-shop.kz/catalog/" + catalogCategory} />
            ) }
            <meta property="og:type" content="website" />
            <meta property="og:description" content="Картины на Холсте для интерьера недорого. Купите картины на стену в интернет магазине от 5000 тг. Отличное качество, экологичные материалы от print-shop.kz. Изготовление 2-4 дня. Удобная доставка." />
          
            
          </Helmet>
          <TopBar />
          <SiteHeader ordersCount={count}/>
          <section className="py-3" style={{backgroundColor: 'white'}}>
            <div className="container py-0">
                  <>
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
                          <Link to={"/" + d.category_dir.replace("_dir", "") +"/" + d.id}>
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
                    <ShopPagination page={currentPage} per_page={currentPerPage} pages={pages as number[]} category={catalogCategory}/>
                  </div>
                </div>
                </>
            </div>
          </section>

          <Footer />
        </div>
      )
    </>
  );
};
