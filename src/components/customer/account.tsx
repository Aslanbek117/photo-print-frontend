import * as React from "react";
import { SiteHeader } from "../headers/header";
import TopBar from "../headers/top-bar.js";
import { Nav } from "../material/nav";
import { UpdateUserInfo } from "components/backend-api/api";
import Loader from "components/loader/index";
import "../../styles/app.css";
import { infoMessage, successMessage } from "utils/Notifications";

export const Account = () => {
  const [loading, setLoading] = React.useState(true);

  const [name, setName] = React.useState("");

  const [lastName, setLastName] = React.useState("");

  const [city, setCity] = React.useState("");

  const [district, setDistrict] = React.useState("");

  const [number, setNumber] = React.useState("");

  const [address, setAddress] = React.useState("");

  const [id, setId] = React.useState(0);

  function logout() {
    localStorage.removeItem("user")
}

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

  React.useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user")!);
    setId(user.id);

    if (user === null) {
    } else if (user != null) {
      setName(user.name);
      setLastName(user!.lastname);
      setDistrict(user!.district);
      setAddress(user!.address);
      setCity(user!.city);
      setNumber(user!.telephone_number);
      setLastName(user!.last_name);
    }
    setLoading(false);
  }, []);

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
                  firstTitle="Личный кабинет"
                  firstTitleHref="/account"
                />
                <div className="row gy-5">
                <div className="col-lg-3">
                    <h3 className="h4 text-uppercase lined mb-4">
                      Дополнительно
                    </h3>
                    <nav className="nav flex-column nav-pills">
                      <a
                        className="nav-link text-sm"
                        href="/orders"
                      >
                        {" "}
                        <i className="me-2 fas fa-list"></i>
                        <span>Мои заказы</span>
                      </a>
                      <a
                        className="nav-link text-sm active"
                        href="/account"
                      >
                        {" "}
                        <i className="me-2 fas fa-user"></i>
                        <span>Личный кабинет</span>
                      </a>
                      <a className="nav-link text-sm" href="/" onClick={() => logout()}>
                        {" "}
                        <i className="me-2 fas fa-door-open"></i>
                        <span>Выйти</span>
                      </a>
                    </nav>
                  </div>
                  <div className="col-lg-9">
                    <p className="lead mb-4">Личный кабинет</p>
                    <p className="text-muted mb-3">
                      Здесь вы сможете добавить или изменить имя и адрес. Имейл, телефонный телефон и адрес никогда не будут
                      показаны на сайте!.
                    </p>
                    <form className="py-2" action="#">
                      <div className="row">
                        <div className="col-12 mb-4">
                          <h3 className="text-uppercase lined">
                            Дополнительная информация
                          </h3>
                        </div>
                        <div className="col-md-6 mb-3">
                          <label className="form-label">Имя</label>
                          <input
                            className="form-control"
                            id="firstname"
                            type="text"
                            name="firstname"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                        <div className="col-md-6 mb-3">
                          <label className="form-label">Фамилия</label>
                          <input
                            className="form-control"
                            id="lastname"
                            type="text"
                            name="lastname"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                          />
                        </div>

                        <div className="col-md-6 mb-3">
                          <label className="form-label">Город</label>
                          <input
                            className="form-control"
                            id="street"
                            type="text"
                            name="street"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 mb-3 col-lg-3">
                          <label className="form-label">Район</label>
                          <input
                            className="form-control"
                            id="region"
                            type="text"
                            name="region"
                            value={district}
                            onChange={(e) => setDistrict(e.target.value)}
                          />
                        </div>

                        <div className="col-md-6 mb-3 col-lg-3">
                          <label className="form-label">Адрес доставки</label>
                          <input
                            className="form-control"
                            id="region"
                            type="text"
                            name="region"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                          />
                        </div>
                        <div className="col-md-6 mb-3">
                          <label className="form-label">Телефонный номер</label>
                          <input
                            className="form-control"
                            id="phone"
                            type="tel"
                            name="phone"
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}
                          />
                        </div>

                        <div className="col-lg-12 text-center">
                          <button
                            className="btn btn-outline-primary"
                            type="button"
                            onClick={() => updateUserInfo()}
                          >
                            {" "}
                            <i className="fas fa-save me-2"></i>Сохранить
                            изменения
                          </button>
                        </div>
                      </div>
                    </form>
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
