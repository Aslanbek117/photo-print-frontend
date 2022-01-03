import * as React from "react";
import ReactDOM from "react-dom";
import Loader from "components/loader";
import TopBar from "./top-bar";
import Header from "./header.js";
import { GetItem } from "components/backend-api/api";
import { Card } from "./card";
import { Image } from "antd";
import { Tabs } from "antd";
import { TabItem } from "./tab-item";
import { Nav } from "./nav";
import SiteHeader from "./header.js";
import Slider from "react-slick";

import "./app.css";


// import "./app.css";
import { PhotoPprint } from "models/search/Search";
import { CustomSwiper } from "./swiper";

const { TabPane } = Tabs;

interface ShopItemProps {
  page: string;
  per_page: string;
  pages: number[];
  category: string;
}

function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  console.log(query);
  var vars = query.split("&");
  console.log(vars);
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0] == variable) {
      return pair[1];
    }
  }
  return false;
}

const sizes = [
  { id: 1, width: 15, heigth: 25, url: "" },
  { id: 2, width: 20, heigth: 33 },
  { id: 3, width: 30, heigth: 50 },
  { id: 4, width: 40, heigth: 67 },
  { id: 5, width: 50, heigth: 83 },
  { id: 6, width: 60, heigth: 100 },
];





export const ShopItem = (props: ShopItemProps) => {
  const [loading, setLoading] = React.useState(true);

  const [selected, setSelected] = React.useState(0);

  const [item, setItem] = React.useState<PhotoPprint>();

  const [imageUrl, setImageUrl] = React.useState("");

  const [current, setCurrent] = React.useState(0);

  const [swiper, setSwiper] = React.useState<any>();

  const [index, setIndex] =  React.useState(0);

  // const onSelect = (id: number) => {
  //   console.log(id);
  //   setSelected(id);
  // };

  const onSlideChange = (index: number) => {
    console.log("index in shop", index);
    setIndex(index);
  }

  const onImageClick = (id: number) => {
    if (id == 1) {
      setImageUrl("http://localhost:9092/" + item!.complex_2);
      setIndex(1);
    } else if (id == 2) {
      setImageUrl("http://localhost:9092/" + item!.complex_3);
      setIndex(2);
    } else if (id == 3) {
      setImageUrl("http://localhost:9092/" + item!.original); //break
      setIndex(3);
    } else if (id == 4) {
      setImageUrl("http://localhost:9092/" + item!.complex_2_low); // break
      setIndex(4);
    } else if (id == 5) {
      setImageUrl("http://localhost:9092/" + item!.complex_3_low); // break
      setIndex(5);
    } else if (id == 6) {
      setImageUrl("http://localhost:9092/" + item!.transform); // break
      // setIndex(6);
    } else if (id >= 7 && id <= 9) {
      setImageUrl("http://localhost:9092/" + item!.complex_2);
    }
  };

  const ImageTypes = () => {
    return (
      <CustomSwiper onClick={(id) => onImageClick(id)} onSlideChange={onSlideChange} slideTo={index} activeIndex={index} />
    );
  };

  React.useEffect(() => {
    async function fetch() {
      let response: any;
      let item_id = getQueryVariable("id");
      if (item_id) response = await GetItem("token", parseInt(item_id, 10));
      setItem(response.result);
      setImageUrl("http://localhost:9092/" + response.result.complex_2);
      setLoading(false);
      setSelected(1); 
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
                                src={"http://localhost:9092/" + item?.original}
                                alt="..."
                                style={{ maxWidth: "95%" }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        className="col-lg-5"
                        style={{
                          border: "1px solid",
                          borderColor: "lightgray",
                        }}
                      >
                        <Image src={imageUrl} height={"100%"} />
                      </div>

                      <div className="col-lg-4 flex-column justify-content-between">
                        <div className="lg-5">
                          <form action="#">
                            <h3 className="">Тип модуля</h3>
                            <div
                              className=""
                              style={{
                                border: "1px solid",
                                borderColor: "lightgray",
                                height: "100px",
                              }}
                            >
                              <ImageTypes />
                            </div>
                            <h4 className="py-1 mb-2">Выберите размер (Ш×В)</h4>
                            <select
                              className="form-select js-sizes mb-1"
                              data-customclass="bg-white rounded-0 border-2 text-uppercase border-gray-200"
                            >
                              {sizes.map((i) => (
                                <option value={i.id}>
                                  {i.width}x{i.heigth}{" "}
                                </option>
                              ))}
                            </select>
                            <h4 className="py-1 mb-1"> Поверхность холста </h4>
                            <select
                              className="form-select js-sizes mb-4"
                              data-customclass="bg-white rounded-0 border-2 text-uppercase border-gray-200"
                            >
                              <option value="b1">Глянцевая</option>
                              <option value="b2">Матовая</option>
                            </select>
                            <p className="h3 text-muted fw-normal">8000 tg</p>
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
                      setSelected={() => setSelected(1)}
                      isSelected={selected === 1 ? true : false}
                    />
                    <TabItem
                      text="как повесить картину?"
                      href=""
                      id={3}
                      setSelected={() => setSelected(2)}
                      isSelected={selected ===2 ? true : false}
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
