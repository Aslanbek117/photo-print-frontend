import * as React from "react";
import { Collapse } from "bootstrap";
import logo from "./logo2.png";

export default function SiteHeader() {
  const [visible, setVisible] = React.useState(false);

  const [width, setWidth] = React.useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  React.useEffect(() => {}, []);

  return (
    <>
      <nav
        class="navbar sticky-top navbar-expand-md navbar-light navbar-left"
        id="navbar"
        style={{ borderBottom: "2px solid #F88C00", backgroundColor: "white" }}
      >
        <div class="container py-0 py-lg-0 px-lg-0">
          {/* <a class="navbar-brand" href="/">
            <img class=" d-md-inline-block" src={logo} alt="Universal logo" />
          </a> */}

          <a class="d-md-none  navbar-brand" >
            <i class="fas fa-shopping-cart" > пусто</i>
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
                  class="nav-link"
                  href="/"
                  role="button"
                  aria-expanded="false"
                >
                  Фотообои
                </a>
              </li>

              <li class="d-none d-sm-block nav-item">
                <a
                  class="nav-link"
                  href="/"
                  role="button"
                  aria-expanded="false"
                >
                  <i class="fas fa-shopping-cart" > пусто</i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
