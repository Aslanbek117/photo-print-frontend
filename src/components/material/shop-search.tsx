import * as React from "react";
import TopBar from "../headers/top-bar.js";
import "../../styles//app.css";
import { Card } from "../card/card";
import { Categories } from "./categories";
import { PhotoPprint } from "../../models/search/Search";
import { useState, useEffect } from "react";
import { SearchItems } from "components/backend-api/api";
import Loader from "components/loader";
import {
  Link
} from "react-router-dom";
import { Nav } from "./nav";
import { SiteHeader } from "../headers/header";
import { useLocation } from 'react-router-dom';
import { Footer } from "footer/footer";


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


export const ShopSearch = () => {

let location = useLocation();


  const [data, setData] = useState<PhotoPprint[]>([]);

  const [searchValue, setSearchValue] = useState("")
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetch() {
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
                  картины
                  </h3>
                  <div className="row gy-5 align-items-stretch">
                    {data.map((d) => (
                      <div className="col-lg-4 col-md-4 col-xs-6 col-6">
                        <Link to={"/" + d.category_dir.replace("_dir", "") + "/" + d.id}>
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
                  {/* <ShopPagination page={currentPage} per_page={currentPerPage} pages={pages as number[]} category={category}/> */}
                </div>
              </div>
            </div>
          </section>

          <Footer />
        </div>
    </>
  );
};
