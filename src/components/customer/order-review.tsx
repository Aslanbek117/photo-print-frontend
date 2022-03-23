import * as React from "react";
import { SiteHeader } from "../headers/header";
import TopBar from "../headers/top-bar.js";
import { Nav } from "../material/nav";
import {
  GetInvoiceDB,
} from "components/backend-api/api";
import Loader from "components/loader/index";
import "../../styles/app.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { sizesFormatted } from '../material/sizes.js'


function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0] === variable) {
      return pair[1];
    }
  }
  return false;
}

export const OrderReview = () => {
  const [loading, setLoading] = React.useState(true);

  const [userID, setUserID] = React.useState(0);

  const [isAuth, setIsAuth] = React.useState(false);

  const [invoiceID, setInvoiceID] = React.useState(0);

  const [item, setItem] = React.useState<any>({});

  async function getList(user_id: number) {
    if (user_id != 0) {
      const response = await GetInvoiceDB("", invoiceID);
      if (response.status === true && response.message === "ok") {
        if (response.result != null && response.result != undefined) {
            setItem(response.result);
            setLoading(false);
        }
      } else {
      }
    }
  }

  function logout() {
    localStorage.removeItem("user");
  }
  async function fetch(user_id: number) {
    getList(user_id);
  }

  React.useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user")!);
    if (user === null) {
    } else if (user != null) {
      if (parseInt(user.id) != 0) {
        let id = getQueryVariable("id");
        if (id != false) {
          setInvoiceID(parseInt(id, 10));
        } else {
          setInvoiceID(0);
        }
        setUserID(parseInt(user.id));
        fetch(parseInt(user.id, 10));
        setIsAuth(true);
      }
    }
  }, [loading, userID]);

  return (
    <>
      {loading ? (
        <>
          <Loader />
        </>
      ) : (
        <div className="wide">
          <TopBar />
          <SiteHeader ordersCount={0} />

          <section className="" style={{ backgroundColor: "white" }}>
            <section className="py-1">
              <div className="container py-1">
                <Nav
                  toShow={false}
                  title=""
                  firstTitle="История заказов"
                  firstTitleHref="/orders"
                />

                <div className="row gy-5">
                  <div className="col-lg-9">
                    <p className="lead mb-4">
                      Заказ номер <strong>{item?.id}</strong> был создан{" "}
                      <strong>{item?.created_at}</strong> и сейчас имеет статус{" "}
                      {"   "}
                      <span className="badge fw-light text-uppercase bg-info">
                        {item?.state === 1 ? " Изготовление" : null}
                        {item?.state === 2 ? " Изготовлен" : null}
                        {item?.state === 3 ? " В пути" : null}
                        {item?.state === 4 ? " Получен" : null}
                      </span>
                      .
                    </p>

                    <p className="text-muted lead mb-5">
                      Если у вас есть какие-то вопросы то, пожалуйста,
                      <a href="/contacts"> обращайтесь </a> к нашим
                      менеджерам
                    </p>

                    <div className="table-responsive">
                      <table className="table table-hover text-nowrap">
                        <thead>
                          <tr className="text-sm">
                            <th className="border-gray-300 border-top py-3">
                              Заказ
                            </th>
                            <th className="border-gray-300 border-top py-3">
                              Наименование
                            </th>
                            <th className="border-gray-300 border-top py-3">
                              Размеры
                            </th>
                            <th className="border-gray-300 border-top py-3">
                              Дата
                            </th>
                            <th className="border-gray-300 border-top py-3">
                              Сумма
                            </th>
                           
                          </tr>
                        </thead>
                        <tbody>
                          {item?.orders.map(c => (
                               <>
                               <tr className="text-sm">
                                 <td className="align-middle border-gray-300 py-3">
                                   <Link to={"/" + c?.category_dir?.replace("_dir", "") + "/" + c?.picture_id}>
                                     <img
                                       className="img-fluid flex-shrink-0"
                                       src={
                                          c?.img_path
                                       }
                                       alt=""
                                       style={{
                                         width: "150px",
                                         minWidth: "150px",
                                       }}
                                     />
                                   </Link>
                                 </td>
                                 <td className="align-middle border-gray-300 py-3">
                                   {c?.title}
                                 </td>
                                 <td className="align-middle border-gray-300 py-3">
                                   {sizesFormatted.find(s => s.module_id === c?.module_id)?.innerSizes.find(i => i.id === c?.size_id)?.label}
                                 </td>
                                 <td className="align-middle border-gray-300 py-3">
                                   {c?.created_at}
                                 </td>

                                 <td className="align-middle border-gray-300 py-3">
                                   {c?.price} тг.
                                 </td>
                                 {/* <td className="align-middle border-gray-300 py-3">
                                   {item?.delivery_price} тг.
                                 </td> */}
                                 {/* <td className="align-middle border-gray-300 py-3">
                                   {item?.final_price} тг.
                                 </td> */}
                               </tr>
                             </>
                          ))}
                        </tbody>
                        <tfoot>
                          <tr>
                            <th className="text-end lead py-3" col-span="10">
                              Сумма позиций
                            </th>
                            <th className="lead py-3">{item?.price_all} тг.</th>
                          </tr>
                          <tr>
                            <th className="text-end lead py-3" col-span="10">
                              Доставка
                            </th>
                            <th className="lead py-3">
                              {item?.delivery_price} тг.
                            </th>
                          </tr>
                        
                          <tr>
                            <th
                              className="border-0 text-end lead py-3"
                              col-span="10"
                            >
                              Всего
                            </th>
                            <th className="border-0 lead py-3">
                              {item?.final_price} тг.
                            </th>
                          </tr>
                        </tfoot>
                      </table>
                    </div>

                    <div className="row gy-4 pb-4 border-bottom border-gray-300">
                      <div className="col-md-12 text-center">
                        <h3 className="text-uppercase">Доставка</h3>
                        <p className="lead">
                          {item?.name} {item?.last_name}
                          <br />
                          {item?.delivery_address}
                          <br />
                          {item?.telephone_number}{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <h3 className="h4 text-uppercase lined mb-4">
                      Дополнительно
                    </h3>
                    <nav className="nav flex-column nav-pills">
                      <a className="nav-link text-sm active" href="/orders">
                        {" "}
                        <i className="me-2 fas fa-list"></i>
                        <span>Мои заказы</span>
                      </a>
                      <a className="nav-link text-sm" href="/account">
                        <i className="me-2 fas fa-user"></i>
                        <span>Личный кабнет</span>
                      </a>
                      <a
                        className="nav-link text-sm"
                        href="/"
                        onClick={() => logout()}
                      >
                        {" "}
                        <i className="me-2 fas fa-door-open"></i>
                        <span>Выйти</span>
                      </a>
                    </nav>
                  </div>
                </div>
              </div>
            </section>
          </section>
        </div>
      )}
    </>
  );
};
