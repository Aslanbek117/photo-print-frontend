import * as React from "react";
import SiteHeader from "./header.js";
import TopBar from "./top-bar.js";
import { Nav } from "./nav";

export default function Warranty() {
  return (
    <>
      <div className="wide">
        <TopBar />
        <SiteHeader />
        <section className="" style={{ backgroundColor: "white" }}>
          <section class="">
            <div class="container py-4">
              <Nav
                toShow={false}
                title=""
                firstTitle="Оплата и доставка"
                firstTitleHref="/delivery"
              />
              <header class="mb-5">
                <h2 class="text-uppercase lined mb-4">Гарантия</h2>
                <h3>Работаем в Казахстане с 2020 года.</h3>
                <h3>Почему стоит выбрать наши услуги:</h3>
                <p class="lead">
                  1. Изготавливаем каждый заказ исходя из желаний Клиента;{" "}
                </p>
                <p class="lead">
                  2. Имеем современный принтер, который соответствует мировым
                  стандартам для печати фото-картин. Разрешение 2880 х 1440
                  (dpi);{" "}
                </p>
                <p class="lead">
                  3. Используем лучшие чернила, которые не вредят здоровью и не
                  выцветают со временем;{" "}
                </p>
                <p class="lead">
                  4. Применяем только экологически безопасные материалы.
                </p>
              </header>

              <h2 class="text-uppercase mb-4">Контроль качества</h2>
              <p class="lead">
                Каждый заказ проходит несколько этапов на проверку качества:{" "}
              </p>
              <p class="lead">1. Присланное Вами фото-картины; </p>
              <p class="lead">2. Проверка внешнего вида изделия; </p>
              <p class="lead">3. Целостность упаковки. </p>
              <p class="lead">
                Приблизительный срок изготовления картины занимает от 1 до 3
                рабочих дней{" "}
              </p>

              <h2 class="text-uppercase mb-4">Возврат</h2>
              <p class="lead">
                Возврат наших изделий происходит крайне редко, так как каждое
                изделие проходит проверку качества.{" "}
              </p>
              <p class="lead">
                В том случае, если Вы считаете, что возник производственный
                брак, то обязательно дайте нам об этом знать.{" "}
              </p>
              <p class="lead">
                Возврат возможет в течении 14 дней. Также мы можем предложить
                Вам изготовить изделия повторно за наш счет либо вернуть Вам
                100% суммы заказы{" "}
              </p>
            </div>
          </section>

          <section class="pb-5">
            <div class="container pb-4">
              <div class="row gy-3">
                <div class="col-lg-4">
                  <h2 class="lined text-uppercase mb-4">Услуги</h2>
                  <ul class="list-unstyled">
                    <li class="d-flex mb-3">
                      <div class="icon-filled me-2">
                        <i class="fas fa-check"></i>
                      </div>
                      <p class="text-sm mb-0">
                        Изготовление классических картин
                      </p>
                    </li>
                    <li class="d-flex mb-3">
                      <div class="icon-filled me-2">
                        <i class="fas fa-check"></i>
                      </div>
                      <p class="text-sm mb-0">Изготовление модульных картин</p>
                    </li>
                    <li class="d-flex mb-3">
                      <div class="icon-filled me-2">
                        <i class="fas fa-check"></i>
                      </div>
                      <p class="text-sm mb-0">
                        Изготовление картин по индивидуальному дизайну
                      </p>
                    </li>
                  </ul>
                </div>

                <div class="col-lg-4">
                  <h2 class="lined text-uppercase mb-4">Наши Ценности</h2>
                  <ul class="list-unstyled">
                    <li class="d-flex mb-3">
                      <div class="icon-filled me-2">
                        <i class="fas fa-check"></i>
                      </div>
                      <p class="text-sm mb-0">
                        Качество
                      </p>
                    </li>
                    <li class="d-flex mb-3">
                      <div class="icon-filled me-2">
                        <i class="fas fa-check"></i>
                      </div>
                      <p class="text-sm mb-0">Сроки</p>
                    </li>
                    <li class="d-flex mb-3">
                      <div class="icon-filled me-2">
                        <i class="fas fa-check"></i>
                      </div>
                      <p class="text-sm mb-0">
                        Ответственность
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section class="py-5 bg-pentagon border-top border-bottom border-gray-600">
        <div class="container py-4">
          <div class="row gy-4 text-center" id="counterUp">
            <div class="col-lg-3 col-sm-6">
              <div class="text-center text-gray-700">
                <div class="icon-outlined border-gray-600 icon-sm mx-auto mb-3 icon-thin"><i class="fas fa-align-justify"></i></div>
                <h4 class="h1 counter mb-3" data-counter="580">2553</h4>
                <p class="text-uppercase fw-bold mb-0">Произвели изделий</p>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6">
              <div class="text-center text-gray-700">
                <div class="icon-outlined border-gray-600 icon-sm mx-auto mb-3 icon-thin"><i class="fas fa-users"></i></div>
                <h4 class="h1 counter mb-3" data-counter="100">1878</h4>
                <p class="text-uppercase fw-bold mb-0">Довольных клиентов</p>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6">
              <div class="text-center text-gray-700">
                <div class="icon-outlined border-gray-600 icon-sm mx-auto mb-3 icon-thin"><i class="far fa-copy"></i></div>
                <h4 class="h1 counter mb-3" data-counter="320">553</h4>
                <p class="text-uppercase fw-bold mb-0">Модульных картин</p>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6">
              <div class="text-center text-gray-700">
                <div class="icon-outlined border-gray-600 icon-sm mx-auto mb-3 icon-thin"><i class="fas fa-drafting-compass"></i></div>
                <h4 class="h1 counter mb-3" data-counter="923">1287</h4>
                <p class="text-uppercase fw-bold mb-0">Изделий в магазине</p>
              </div>
            </div>
          </div>
        </div>
      </section>
        </section>
      </div>
    </>
  );
}
