import * as React from "react";
import { SiteHeader } from "../headers/header";
import TopBar from "../headers/top-bar.js";
import { Nav } from "../material/nav";
import {
  GetInvoicesDB,
} from "components/backend-api/api";
import Loader from "components/loader/index";
import "../../styles/app.css";

export const OrderHistory = () => {
  const [loading, setLoading] = React.useState(true);

  const [data, setData] = React.useState<any[]>();

  const [userID, setUserID] = React.useState(0);

  async function getList(user_id: number) {
    if (user_id != 0) {
      const response = await GetInvoicesDB("", userID);
      if (response.status === true && response.message === "ok") {
        for (var i = 0; i < response.result.length; i++) {
            response.result[i].created_at = new Date(response.result[i].created_at).toISOString().split('T')[0] 
        }
        setData(response.result);
        setLoading(false);
      } else {
      }
    }
  }

  function logout() {
      localStorage.removeItem("user")
  }
  async function fetch(user_id: number) {
    getList(user_id);
    
  }

  React.useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user")!);
    if (user === null) {
    } else if (user != null) {
      if (parseInt(user.id) != 0) {
        setUserID(parseInt(user.id));
        fetch(parseInt(user.id, 10));
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
                              Дата
                            </th>
                            <th className="border-gray-300 border-top py-3">
                              Сумма
                            </th>
                            <th className="border-gray-300 border-top py-3">
                              Статус
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {data?.map((d) => (
                            <>
                              <tr className="text-sm">
                                <th className="align-middle py-3">{d.id}</th>
                                <td className="align-middle py-3">
                                  {d.orders.map(o => (
                                      o.title+" "
                                  ))}
                                </td>
                                <td className="align-middle py-3">
                                  {d.created_at} 
                                </td>
                                <td className="align-middle py-3">
                                  {d.final_price}
                                </td>
                                <td className="align-middle py-3">
                                  <span className="badge fw-light text-uppercase bg-info">
                                    {d.state === 1 ? 'Изготовление' : null}
                                    {d.state === 2 ? 'Изготовлен' : null}
                                    {d.state === 3 ? 'В пути' : null}
                                    {d.state === 4 ? 'Получен' : null}
                                  </span>
                                </td>
                                <td className="align-middle py-3">
                                  <a
                                    className="btn btn-outline-primary btn-sm"
                                    href={"/order?id="+ d.id}
                                  >
                                    Детали заказа
                                  </a>
                                </td>
                              </tr>
                            </>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <h3 className="h4 text-uppercase lined mb-4">
                      Дополнительно
                    </h3>
                    <nav className="nav flex-column nav-pills">
                      <a
                        className="nav-link text-sm active"
                        href="/orders"
                      >
                        {" "}
                        <i className="me-2 fas fa-list"></i>
                        <span>Мои заказы</span>
                      </a>
                      <a
                        className="nav-link text-sm"
                        href="/account"
                      >
                        <i className="me-2 fas fa-user"></i>
                        <span>Личный кабнет</span>
                      </a>
                      <a className="nav-link text-sm" href="/" onClick={() => logout()}>
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
