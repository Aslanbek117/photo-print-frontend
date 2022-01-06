import * as React from "react";
import { Collapse } from "bootstrap";
import logo from "./logo2.png";
import  { SearchItems  } from "components/backend-api/api";
import { useHistory } from 'react-router-dom';


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



export default function SiteHeader() {

  const history = useHistory()


  const [visible, setVisible] = React.useState(false);

  const [width, setWidth] = React.useState(window.innerWidth);

  const [searchText, setSearchText] = React.useState('')


  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  React.useEffect(() => {}, []);

  async function onSearch() {
    
    history.push({
      pathname: '/search/pictures?search=' + searchText,
      state: { searchValue: searchText },
    });
    window.location.reload()
    // history.push("/search?search="+ searchText, state: "XUI");
  }

  return (
    <>
      <nav
        class="navbar sticky-top navbar-expand-md navbar-light navbar-left"
        id="navbar"
        style={{ borderBottom: "2px solid #F88C00", backgroundColor: "white" }}
      >
        <div class="container py-0 py-lg-0 px-lg-0">
          <div class="input-box">
            <input
              type="text"
              class="form-control"
              style={{ borderColor: "green" }}
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              
            />
            <i class="fa fa-search" onClick={(e) => onSearch()}  > </i>
          </div>

          <a class="d-md-none  navbar-brand">
            <span
              style={{
                textTransform: "uppercase",
                color: "black",
                fontFamily: "Ubuntu, Ubuntu Regular, serif",
                lineHeight: "20px",
                fontSize: "14px",
                fontWeight: 600,
                whiteSpace: "nowrap",
              }}
            >
              <i
                class="fas fa-shopping-cart fa-lg"
                style={{ color: "#4fbfa8", marginRight: 10 }}
              />
              пусто
            </span>
          </a>
          <button
            class="navbar-toggler text-primary border-primary order-first"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navigationCollapse"
            aria-controls="navigationCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
            // onClick={() => setVisible(!visible)}
            style={{ backgroundColor: "white" }}
          >
            <span class="sr-only">Окрыть меню</span>
            <i class="fas fa-align-justify"></i>
          </button>

          <div class="collapse navbar-collapse" id="navigationCollapse">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item dropdown">
                <a
                  class="nav-link"
                  href="/"
                  role="button"
                  aria-expanded="false"
                >
                  Модульные картины
                </a>
              </li>

              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  id="hpDropdown"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Информация
                </a>
                <ul class="dropdown-menu" aria-labelledby="hpDropdown">
                  <li>
                    <a
                      class="dropdown-item text-uppercase border-bottom"
                      href="/delivery"
                    >
                      Оплата и доставка
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item text-uppercase border-bottom"
                      href="/warranty"
                    >
                      Гарантия
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item text-uppercase border-bottom"
                      href="/contacts"
                    >
                      Контакты
                    </a>
                  </li>
                </ul>
              </li>

              <li class="d-none d-sm-block nav-item">
                <a
                  class="nav-link"
                  href="/"
                  role="button"
                  aria-expanded="false"
                >
                  <span
                    style={{
                      textTransform: "uppercase",
                      color: "black",
                      lineHeight: "20px",
                      fontSize: "14px",
                      fontWeight: 300,
                      whiteSpace: "nowrap",
                    }}
                  >
                    <i
                      class="fas fa-shopping-cart fa-lg"
                      style={{ color: "orange", marginRight: 10 }}
                    >
                    </i>
                    0
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
