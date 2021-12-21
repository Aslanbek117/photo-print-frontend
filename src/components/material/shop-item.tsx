import * as React from "react";
import "./app.css";
import Loader from "components/loader";
import TopBar from "./top-bar";
import Header from "./header.js";
import { GetItem } from "components/backend-api/api";
import { Card } from "./card";

import { Tabs } from "antd";
import { TabItem } from "./tab-item";
import { Nav } from "./nav";
import SiteHeader from "./header.js";

const { TabPane } = Tabs;

interface ShopItemProps {
  page: string;
  per_page: string;
  pages: number[];
  category: string;
}

function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  console.log(query); //"app=article&act=news_content&aid=160990"
  var vars = query.split("&");
  console.log(vars); //[ 'app=article', 'act=news_content', 'aid=160990' ]
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    // console.log(pair)//[ 'app', 'article' ][ 'act', 'news_content' ][ 'aid', '160990' ]
    if (pair[0] == variable) {
      return pair[1];
    }
  }
  return false;
}

const sizes = [
  { id: 1, width: 15, heigth: 25 },
  { id: 2, width: 20, heigth: 33 },
  { id: 3, width: 30, heigth: 50 },
  { id: 4, width: 40, heigth: 67 },
  { id: 5, width: 50, heigth: 83 },
  { id: 6, width: 60, heigth: 100 },
];

export const ShopItem = (props: ShopItemProps) => {
  const [loading, setLoading] = React.useState(true);

  const [selected, setSelected] = React.useState(0);

  const onSelect = (id: number) => {
    console.log(id);
    setSelected(id);
    // else router.push(`/search?query=${encodeURIComponent(_query)}`)
  };

  React.useEffect(() => {
    async function fetch() {
      let response: any;
      let item_id = getQueryVariable("id");

      if (item_id) response = await GetItem("token", parseInt(item_id, 10));
      setLoading(false);
      console.log(response);
    }
    fetch();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="wide" id="all">
            <TopBar />
            <SiteHeader />
            <section className="py-3" style={{ backgroundColor: "white" }}>
              <div className="container">
               <Nav />
                <div className="row g-5">
                  <div className="col-lg-12">
                    <div className="row gy-5 align-items-stretch">
                      <div className="col-lg-3">
                        <div className="swiper-container shop-detail-slider">
                          <div className="swiper-wrapper">
                            <div className="swiper-slide">
                              <img
                                className="img-fluid"
                                src="https://www.allstick.ru//@s/image-cache/bcf/bcf57e7f7d4e-u..product~35~35795~5e8a3d4ae89d1.fit.max.h.400.local.gallery~offset~50.w.400~xgxgxgxdxkx.jpg"
                                alt="..."
                                style={{ maxWidth: "95%" }}
                              />
                            </div>
                            {/* <div className="swiper-slide"><img className="img-fluid" src="https://www.allstick.ru//@s/image-cache/bcf/bcf57e7f7d4e-u..product~35~35795~5e8a3d4ae89d1.fit.max.h.400.local.gallery~offset~50.w.400~xgxgxgxdxkx.jpg" alt="..."/></div> */}
                            {/* <div className="swiper-slide"><img className="img-fluid" src="https://www.allstick.ru//@s/image-cache/bcf/bcf57e7f7d4e-u..product~35~35795~5e8a3d4ae89d1.fit.max.h.400.local.gallery~offset~50.w.400~xgxgxgxdxkx.jpg" alt="..."/></div> */}
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="swiper-container shop-detail-slider">
                          <div className="swiper-wrapper">
                            <div className="swiper-slide">
                              <img
                                className="img-fluid"
                                src="https://www.allstick.ru//@s/image-cache/bcf/bcf57e7f7d4e-u..product~35~35795~5e8a3d4ae89d1.fit.max.h.400.local.gallery~offset~50.w.400~xgxgxgxdxkx.jpg"
                                alt="..."
                                style={{ width: "95%", height: "100%" }}
                              />
                            </div>
                            {/* <div className="swiper-slide"><img className="img-fluid" src="https://www.allstick.ru//@s/image-cache/bcf/bcf57e7f7d4e-u..product~35~35795~5e8a3d4ae89d1.fit.max.h.400.local.gallery~offset~50.w.400~xgxgxgxdxkx.jpg" alt="..."/></div> */}
                            {/* <div className="swiper-slide"><img className="img-fluid" src="https://www.allstick.ru//@s/image-cache/bcf/bcf57e7f7d4e-u..product~35~35795~5e8a3d4ae89d1.fit.max.h.400.local.gallery~offset~50.w.400~xgxgxgxdxkx.jpg" alt="..."/></div> */}
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-3 d-flex flex-column justify-content-between">
                        <div className="p-4 p-lg-5 border mb-5 bg-light">
                          <form action="#">
                            <h3 className="text-center mb-3">Тип модуля</h3>
                            <h4 className="mb-3">Выберите размер (Ш×В)</h4>
                            <select
                              className="form-select js-sizes mb-5"
                              data-customclass="bg-white rounded-0 border-2 text-uppercase border-gray-200"
                            >
                              {sizes.map((i) => (
                                <option value={i.id}>
                                  {" "}
                                  {i.width}x{i.heigth}{" "}
                                </option>
                              ))}
                            </select>
                            <h4 className="mb-3"> Поверхность холста </h4>
                            <select
                              className="form-select js-sizes mb-5"
                              data-customclass="bg-white rounded-0 border-2 text-uppercase border-gray-200"
                            >
                              <option value="b1">Глянцевая</option>
                              <option value="b2">Матовая</option>
                            </select>
                            <p className="h1 text-muted mb-4 text-center fw-normal">
                              $124.00
                            </p>
                            <p className="text-center">
                              <button
                                className="btn btn-outline-primary"
                                type="submit"
                              >
                                <i className="fas fa-shopping-cart"></i> В
                                корзину
                              </button>
                              <button
                                className="btn btn-secondary"
                                type="submit"
                                data-bs-toggle="tooltip"
                                data-placement="top"
                                title="Add to wishlist"
                              >
                                <i className="far fa-heart"></i>
                              </button>
                            </p>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>

                  <ul className="nav justify-content-center">
                    <TabItem
                      text="Характеристики"
                      href=""
                      id={1}
                      setSelected={onSelect}
                    />
                    <TabItem
                      text="как повесить картину?"
                      href=""
                      id={3}
                      setSelected={onSelect}
                    />
                  </ul>

                  <div className="tab-content" id="myTabContent">
                    {selected == 1 ? (
                      <div
                        className="tab-pane fade show active"
                        id="1"
                        role="tabpanel"
                        aria-labelledby="info"
                      >
                        <div className="container">
                          <div className="row">
                            <div className="col-lg-6 col-sm-6">
                              <p className="text-center">
                                Натуральный плотный холст. Печать УФ стойкими
                                красками. Матовое или глянцевое покрытие на
                                выбор. Насыщенные цвета изображения.
                                Изготовление на заказ.
                              </p>
                            </div>

                            <div className="col-lg-6 col-sm-6">
                              <img
                                className="img-fluid"
                                src="https://www.allstick.ru/uploads/manager/harakteristiki/kr-1.jpg"
                                alt="..."
                                style={{ width: 400, height: 350 }}
                              />
                            </div>
                          </div>

                          <div className="row mt-4">
                            <div className="col-lg-6 col-sm-6">
                              <p className="text-center">
                                Натуральный плотный холст. Печать УФ стойкими
                                красками. Матовое или глянцевое покрытие на
                                выбор. Насыщенные цвета изображения.
                                Изготовление на заказ.
                              </p>
                            </div>

                            <div className="col-lg-6 col-sm-6">
                              <img
                                className="img-fluid"
                                src="https://www.allstick.ru/uploads/manager/harakteristiki/kr-2.jpg"
                                alt="..."
                                style={{ width: 400, height: 350 }}
                              />
                            </div>
                          </div>
                          <div className="row mt-4">
                            <div className="col-lg-6 col-sm-6">
                              <p className="text-center">
                                Натуральный плотный холст. Печать УФ стойкими
                                красками. Матовое или глянцевое покрытие на
                                выбор. Насыщенные цвета изображения.
                                Изготовление на заказ.
                              </p>
                            </div>

                            <div className="col-lg-6 col-sm-6">
                              <img
                                className="img-fluid"
                                src="	https://www.allstick.ru/uploads/manager/harakteristiki/kr-3.jpg"
                                alt="..."
                                style={{ width: 400, height: 350 }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : null}

                    {selected == 2 ? (
                      <div
                        className="tab-pane fade show active"
                        id="2"
                        role="tabpanel"
                        aria-labelledby="info_2"
                      >
                        second
                      </div>
                    ) : null}

                    {selected == 3 ? (
                      <div
                        className="tab-pane fade show active"
                        id="3"
                        role="tabpanel"
                        aria-labelledby="info_3"
                      >
                        third
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </>
      )}
    </>
  );
};
