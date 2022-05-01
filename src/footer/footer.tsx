import * as React from "react";
import {
  CreateInvoiceDB,
  GetBasketList,
  RemoveOrder,
  UpdateUserInfo,
} from "components/backend-api/api";
import "../styles//app.css";

export const Footer = () => {
  return (
    <>
      <div
        className="bg-gray-700 text-white py-5"
        style={{ backgroundColor: "#333" }}
      >
        <div className="container py-4">
          <div className="row gy-4 text-center">
            <div className="col-lg-6">
              <h4 className="" style={{ color: "white" }}>
                Покупателям
              </h4>
              <ul className="list-unstyled text-center">
                <li className="mb-2">
                  <div className="text-center">
                    <h6 className="text-uppercase mb-0">
                      <a
                        className="text-center"
                        href="/"
                        style={{ color: "#b5b5b9" }}
                      >
                        Каталог
                      </a>
                    </h6>
                  </div>
                </li>
                <li className=" mb-2">
                  <div className="">
                    <h6 className="text-uppercase mb-0">
                      <a
                        className=""
                        href="/delivery"
                        style={{ color: "#b5b5b9" }}
                      >
                        Оплата и доставка
                      </a>
                    </h6>
                  </div>
                </li>
                <li className="align-items-center mb-2">
                  <div className="">
                    <h6 className="text-uppercase mb-0">
                      <a
                        className=""
                        href="/warranty"
                        style={{ color: "#b5b5b9" }}
                      >
                        Гарантия
                      </a>
                    </h6>
                  </div>
                </li>
                <li className="align-items-center mb-2">
                  <div className="">
                    <h6 className="text-uppercase mb-0">
                      <a
                        className=""
                        href="/contacts"
                        style={{ color: "#b5b5b9" }}
                      >
                        Контакты
                      </a>
                    </h6>
                  </div>
                </li>
                <li className="align-items-center mb-2">
                  <div className="">
                    <h6 className="text-uppercase mb-0">
                      <a
                        className=""
                        href="/comments"
                        style={{ color: "#b5b5b9" }}
                      >
                        Отзывы
                      </a>
                    </h6>
                  </div>
                </li>
              </ul>
            </div>

            <div className="col-lg-6">
              <h4 className="" style={{ color: "white" }}>
                Обратная связь
              </h4>
              <ul className="list-unstyled">
                <li className=" align-items-center mb-2">
                  <div className="">
                    <h6 className="text-uppercase mb-0">
                      <a
                        className=""
                        href="/contacts"
                        style={{ color: "#b5b5b9" }}
                      >
                        Контакты
                      </a>
                    </h6>
                  </div>
                </li>
                <li className="align-items-center mb-2">
                  <div className="">
                    <h6 className="text-uppercase mb-0">
                      <a
                        className=""
                        href="/comments"
                        style={{ color: "#b5b5b9" }}
                      >
                        Оставить отзыв
                      </a>
                    </h6>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
