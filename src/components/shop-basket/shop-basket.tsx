import * as React from "react";
import { SiteHeader } from "../headers/header";
import TopBar from "../headers/top-bar.js";
import { Nav } from "../material/nav";
import {
  CreateInvoiceDB,
  GetBasketList,
  RemoveOrder,
  UpdateUserInfo,
} from "components/backend-api/api";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Loader from "components/loader/index";
import { infoMessage, successMessage } from "utils/Notifications";
import "../../styles/app.css";

export const ShopBasket = () => {
  const [loading, setLoading] = React.useState(true);

  const [name, setName] = React.useState("");

  const [lastName, setLastName] = React.useState("");

  const [city, setCity] = React.useState("");

  const [district, setDistrict] = React.useState("");

  const [number, setNumber] = React.useState("");

  const [address, setAddress] = React.useState("");

  const [id, setId] = React.useState(0);

  const [data, setData] = React.useState<any[]>([]);

  const [finalPrice, setFinalPrice] = React.useState(0);

  const [lastNameOrder, setLastNameOrder] = React.useState("");

  const [nameOrder, setNameOrder] = React.useState("");

  const [deliveryAddress, setDeliverAddress] = React.useState("");

  const [deliveryNumber, setDeliveryNumber] = React.useState("");

  const [ordersIds, setOrdersIds] = React.useState("");
  async function updateUserInfo() {
    const response = await UpdateUserInfo(
      "",
      name,
      lastName,
      city,
      district,
      number,
      address,
      id
    );

    if (response.status === true && response.message === "ok") {
      localStorage.setItem("user", JSON.stringify(response.result));
      successMessage("Успех", "Данные обновлены");
    } else {
      infoMessage("Ошибка", "Что-то пошло не так");
    }
  }

  async function DeleteOrder(userId: number, orderId: number) {
    const response = await RemoveOrder("", userId, orderId);
    if (response.status === true && response.message === "ok") {
    } else {
    }
    GetList(userId);
  }

  async function GetList(user_id: number) {
    if (user_id != 0) {
      let response = await GetBasketList("", user_id);
      if (response.status === true && response.message === "ok") {
        var date = new Date();
        for (var i = 0; i < response.result.length; i++) {
          response.result[i].created_at = new Date(
            response.result[i].created_at
          )
            .toISOString()
            .split("T")[0];
        }
        setData(response.result);
        let finalPrice = 0;
        let temp = "";
        for (var i = 0; i < response.result.length; i++) {
          finalPrice += response.result[i].price;
          temp += response.result[i].id;
          if (temp.endsWith(",", temp.length - 1) === false) {
            temp += ",";
          }
        }
        if (temp.endsWith(",", temp.length) === true) {
          temp = temp.substring(0, temp.length - 1);
        }
        setFinalPrice(finalPrice);
        setOrdersIds(temp);
      }
    }
  }

  async function CreateInvoice() {
    if (nameOrder.replaceAll(" ", "").trim() === "") {
      infoMessage("Ошибка", "Заполните поле Имя");
      return;
    }

    if (lastNameOrder.replaceAll(" ", "").trim() === "") {
      infoMessage("Ошибка", "Заполните поле Фамилия");
      return;
    }

    if (deliveryNumber.replaceAll(" ", "").trim() === "") {
      infoMessage("Ошибка", "Заполните поле Телефонный номер");
      return;
    }

    if (deliveryAddress.replaceAll(" ", "").trim() === "") {
      infoMessage("Ошибка", "Заполните поле Адрес доставки");
      return;
    }

    const response = await CreateInvoiceDB(
      "",
      id,
      ordersIds,
      nameOrder,
      lastNameOrder,
      deliveryAddress,
      deliveryNumber,
      finalPrice,
      2000,
      finalPrice + 2000
    );
    if (response.status === true && response.message === "ok") {
      window.location.href = "/orders";
    }
  }

  React.useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user")!);

    if (user === null) {
    } else if (user != null) {
      setId(user.id);
      setName(user.name);
      setNameOrder(user.name);
      setDistrict(user.district);
      setAddress(user.address);
      setCity(user.city);
      setNumber(user.telephone_number);
      setDeliveryNumber(user.telephone_number);
      setLastName(user.last_name);
      setLastNameOrder(user!.last_name);
      let temp = "";

      if (user.city && user.city.trim() != "") {
        temp += "г. " + user.city;
      }

      if (user.district && user.district.trim() != "") {
        temp += ", " + user.district + " район, ";
      }

      if (user.address && user.address.trim() != "") {
        temp += user.address;
      }
      setDeliverAddress(temp);
    }

    async function fetch() {
      if (user != null) {
        GetList(user.id);
      }
      setLoading(false);
    }
    fetch();
  }, [loading]);

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
                  firstTitle="Корзина"
                  firstTitleHref="/shop-basket"
                />

                <h1 className="h2 mb-0 text-uppercase">Корзина</h1>
                <p className="" style={{ color: "black", fontSize: "20px" }}>
                  Посмотреть свои <a href="/orders">заказы (нажмите тут)</a>
                </p>
                <div className="row">
                  <div className="col-lg-9">
                    <div className="table-responsive">
                      <table className="table text-nowrap">
                        <thead>
                          <tr className="text-sm">
                            <th className="border-gray-300 border-top py-3">
                              Позиция
                            </th>
                            <th className="border-gray-300 border-top py-3">
                              Цена
                            </th>
                            <th className="border-gray-300 border-top py-3">
                              Всего
                            </th>
                            <th className="border-gray-300 border-top py-3"></th>
                          </tr>
                        </thead>
                        <tbody>
                          {data.map((c) => (
                            <>
                              <tr className="text-sm">
                                <td className="align-middle border-gray-300 py-3">
                                  <Link to={"/item?id=" + c.picture_id}>
                                    <img
                                      className="img-fluid flex-shrink-0"
                                      src={c.img_path}
                                      alt=""
                                      style={{
                                        width: "150px",
                                        minWidth: "150px",
                                      }}
                                    />
                                  </Link>
                                </td>
                                <td className="align-middle border-gray-300 py-3">
                                  <Link to={"/item?id=" + c.picture_id}>
                                    {c.title}
                                  </Link>
                                </td>

                                <td className="align-middle border-gray-300 py-3">
                                  {c.price}
                                </td>
                                <td className="align-middle border-gray-300 py-3">
                                  {c.price}
                                </td>
                                <td className="align-middle border-gray-300 py-3">
                                  <button
                                    className="btn btn-link p-0"
                                    type="button"
                                    onClick={() => DeleteOrder(id, c.id)}
                                  >
                                    <i className="fas fa-trash-alt"></i>
                                  </button>
                                </td>
                              </tr>
                            </>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <h3>Дополнительная информация</h3>
                    <p className="text-muted">
                      Наши менеджеры свяжутся с Вами после подтверждения заказа
                      (<strong>онлайн оплата временно отсутствует</strong>)
                    </p>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label className="form-label">Имя</label>
                        <sup className="required text-primary">обязательно</sup>
                        <input
                          className="form-control"
                          id="firstname"
                          type="text"
                          name="firstname"
                          value={nameOrder}
                          onChange={(e) => setNameOrder(e.target.value)}
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label className="form-label">Фамилия</label>
                        <sup className="required text-primary">
                          необязательно
                        </sup>
                        <input
                          className="form-control"
                          id="lastname"
                          type="text"
                          name="lastname"
                          value={lastNameOrder}
                          onChange={(e) => setLastNameOrder(e.target.value)}
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label className="form-label">Телефонный номер</label>
                        <sup className="required text-primary">обязательно</sup>
                        <input
                          className="form-control"
                          id="company"
                          type="text"
                          name="company"
                          value={deliveryNumber}
                          onChange={(e) => setDeliveryNumber(e.target.value)}
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label className="form-label">Адрес доставки</label>
                        <sup className="required text-primary">обязательно</sup>
                        <input
                          className="form-control"
                          id="street"
                          type="text"
                          name="street"
                          value={deliveryAddress}
                          onChange={(e) => setDeliverAddress(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="row gx-lg-0 align-items-center bg-light px-4 py-3 text-center mb-5">
                      <div className="col-md-6 text-md-start py-1">
                        <a className="btn btn-secondary my-1" href="/">
                          <i className="fas fa-angle-left me-1"></i> Обратно в
                          галерею
                        </a>
                      </div>
                      <div className="col-md-6 text-md-end py-1">
                        <button
                          className="btn btn-outline-primary my-1"
                          type="submit"
                          disabled={data.length === 0 ? true : false}
                          onClick={() => CreateInvoice()}
                        >
                          Подтвердить
                          <i className="fas fa-angle-right ms-1"></i>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3">
                    <div className="mb-5">
                      <div className="p-4 bg-gray-200">
                        <h3 className="text-uppercase mb-0">Описание заказа</h3>
                      </div>
                      <div className="bg-light py-4 px-3">
                        <p className="text-muted">
                          Сумма высчитывается автоматически исходя из позиций,
                          которые Вы выбрали
                        </p>
                        <div className="table-responsive">
                          <table className="table mb-0">
                            <tbody className="text-sm">
                              <tr>
                                <th className="text-muted">
                                  <span className="d-block py-1 fw-normal">
                                    Сумма позиций
                                  </span>
                                </th>
                                <th>
                                  <span className="d-block py-1 fw-normal text-end">
                                    {finalPrice} тг.
                                  </span>
                                </th>
                              </tr>
                              <tr>
                                <th className="text-muted">
                                  <span className="d-block py-1 fw-normal">
                                    Доставка
                                  </span>
                                </th>
                                <th>
                                  <span className="d-block py-1 fw-normal text-end">
                                    {id === 0 ? 0 : 2000} тг.
                                  </span>
                                </th>
                              </tr>
                              <tr>
                                <th className="text-muted">
                                  <span className="d-block py-1 fw-normal">
                                    Коммиссия
                                  </span>
                                </th>
                                <th>
                                  <span className="d-block py-1 fw-normal text-end">
                                    0.00 тг.
                                  </span>
                                </th>
                              </tr>
                              <tr className="total">
                                <td className="py-3 border-bottom-0 text-muted">
                                  <span className="lead fw-bold">Всего</span>
                                </td>
                                <th className="py-3 border-bottom-0">
                                  <span className="lead fw-bold text-end">
                                    {id === 0 ? 0 : finalPrice + 2000} тг.
                                  </span>
                                </th>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="p-4 bg-gray-200">
                        <h4 className="text-uppercase mb-0">Промокод</h4>
                      </div>
                      <div className="bg-light py-4 px-3">
                        <p className="text-muted">
                          Если у Вас есть <strong>промокод</strong>, то введите
                          его ниже
                        </p>
                        <form action="#">
                          <div className="input-group">
                            <input className="form-control" type="text" />
                            <button className="btn btn-primary" type="submit">
                              <i className="fas fa-gift"></i>
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
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
