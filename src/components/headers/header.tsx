import { GetBasketList } from "components/backend-api/api";
import * as React from "react";
import { useHistory } from "react-router-dom";
import "../../styles/app.css";

interface Props {
  onAddToBasket?: Function;
  ordersCount?: number;
}

export const SiteHeader = (props: Props) => {
  const history = useHistory();

  const [searchText, setSearchText] = React.useState("");

  const [display, setDisplay] = React.useState(false);

  const [showCollapse, setShowCollapse] = React.useState(false);

  const [isAuthorized, setIsAuthorized] = React.useState(false);

  const [loading, setLoading] = React.useState(true);

  const [count, setCount] = React.useState(0);

  async function GetCount(user_id: number) {
    if (user_id != 0) {
      
        let response = await GetBasketList("", user_id);
        if (response.status === true && response.message === "ok") {
          localStorage.setItem("basket", JSON.stringify(response.result))
          if (props.ordersCount != undefined) {
            if (props.ordersCount > response.result.length) {
              setCount(props.ordersCount);
            } else if (props.ordersCount < response.result.length) {
              setCount(response.result.length);
            }
          }
        } else {
          setCount(0);
        }
      } 
  }

  React.useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user")!);
    let user_id;
    if (user != null) {
      user_id = user.id;
    } else {
      user_id = 0;
    }
    if (localStorage.getItem("user") != null) {
      setIsAuthorized(true);
    }
    async function fetch() {
      GetCount(user_id);
      setLoading(false);
    }
    fetch();
  }, [loading]);

  async function onSearch() {
    history.push({
      pathname: "/search?search=" + searchText,
      state: { searchValue: searchText },
    });
    window.location.reload();
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      history.push({
        pathname: "/search?search=" + searchText,
        state: { searchValue: searchText },
      });
      window.location.reload();
    }
  };

  return (
    <>
      <nav
        className="navbar sticky-top navbar-expand-md navbar-light navbar-left"
        id="navbar"
        style={{ borderBottom: "2px solid #F88C00", backgroundColor: "white" }}
      >
        <div className="container py-0 py-lg-0 px-lg-0">
          <div className="input-box">
            <input
              type="text"
              className="form-control"
              style={{ borderColor: "green" }}
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              onKeyPress={(event) => handleKeyDown(event)}
            />
            <i className="fa fa-search" onClick={(e) => onSearch()}>
              {" "}
            </i>
          </div>

          <a className="d-md-none  navbar-brand" href="/shop-basket">
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
                className="fas fa-shopping-cart fa-lg"
                style={{ color: "#4fbfa8", marginRight: 10 }}
              />
              {props.ordersCount === 0 && count === 0 && "пусто"}
              {/* {count > 0  ? count : null} */}
              {props.ordersCount != undefined &&
                props.ordersCount > count &&
                props.ordersCount}
              {props.ordersCount != undefined &&
                props.ordersCount < count &&
                count}
            </span>
          </a>
          <button
            className="navbar-toggler text-primary border-primary order-first"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navigationCollapse"
            aria-controls="navigationCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
            // onClick={() => setVisible(!visible)}
            style={{ backgroundColor: "white" }}
            onClick={() => setShowCollapse(!showCollapse)}
          >
            <span className="sr-only">Окрыть меню</span>
            <i className="fas fa-align-justify"></i>
          </button>

          <div
            className={
              showCollapse
                ? "collapse navbar-collapse show"
                : "collapse navbar-collapse"
            }
            id="navigationCollapse"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/"
                  role="button"
                  aria-expanded="false"
                >
                  картины
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="hpDropdown"
                  role="button"
                  data-bs-toggle="#hpDropdown"
                  aria-expanded="false"
                  onClick={() => setDisplay(!display)}
                >
                  Информация
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="hpDropdown"
                  style={{ display: display ? "block" : "none" }}
                >
                  <li>
                    <a
                      className="dropdown-item text-uppercase border-bottom"
                      href="/delivery"
                      style={{ color: "black" }}
                    >
                      Оплата и доставка
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item text-uppercase border-bottom"
                      href="/warranty"
                      style={{ color: "black" }}
                    >
                      Гарантия
                    </a>
                  </li>
                  <li key={67453}>
                    <a
                      className="dropdown-item text-uppercase border-bottom"
                      href="/contacts"
                      style={{ color: "black" }}
                    >
                      Контакты
                    </a>
                  </li>
                  <li key={6742253}>
                    <a
                      className="dropdown-item text-uppercase border-bottom"
                      href="/comments"
                      style={{ color: "black" }}
                    >
                      Отзывы
                    </a>
                  </li>
                </ul>
              </li>

              {isAuthorized ? (
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/account"
                    role="button"
                    aria-expanded="false"
                  >
                    Личный кабинет
                  </a>
                </li>
              ) : null}

              <li className="d-none d-sm-block nav-item" key={65423}>
                <a
                  className="nav-link"
                  href="/shop-basket"
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
                      className="fas fa-shopping-cart fa-lg"
                      style={{ color: "orange", marginRight: 10 }}
                    ></i>
                    {props.ordersCount === 0 && count === 0 && "пусто"}
                    {props.ordersCount != undefined &&
                      props.ordersCount > count &&
                      props.ordersCount}
                    {props.ordersCount != undefined &&
                      props.ordersCount < count &&
                      count}
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
