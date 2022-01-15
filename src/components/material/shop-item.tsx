import * as React from "react";
import Loader from "components/loader";
import TopBar from "../headers/top-bar";
import { AddToBasketAPI, GetBasketList, GetItem } from "components/backend-api/api";
import { Image } from "antd";
import { TabItem } from "./tab-item";
import { Nav } from "./nav";
import { SiteHeader } from "../headers/header";

import "../../styles//app.css";
import { Navigation } from "swiper";
// Direct React component imports
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";

import first from "../files//2x2.png";
import second from "../files/3x3.png";
import one from "../files/1x1.png";
import not from "../files/2x2_not.png";
import not3x3 from "../files/3x3_not.png";
import not1x1 from "../files/1x1_not.png";
import is from "./out_5.png";
import SwiperCore, { Grid } from "swiper";
import { PhotoPprint } from "models/search/Search";
import { CustomSwiper } from "./swiper";
import { errorMessage, successMessage } from "utils/Notifications";
import { env } from "process";
// Styles must use direct files imports
// Styles must use direct files imports
import "swiper/swiper.scss"; // core Swiper
import "swiper/modules/grid/grid.scss"; // Navigation module
import "swiper/modules/navigation/navigation.scss"; // Navigation module
import "swiper/modules/pagination/pagination.scss"; // Pagination module

import "../../styles/app.css";

SwiperCore.use([Grid, Navigation]);


interface ShopItemProps {
  page: string;
  per_page: string;
  pages: number[];
  category: string;
}

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

  const [index, setIndex] =  React.useState(0);

  const [moduleID, setModuleID] = React.useState(1);

  const [sizeID, setSizeID] = React.useState(1);

  const [pictureID, setPictureID] = React.useState(0);

  const [userID, setUserID] = React.useState(0);

  const [materialID, setMaterialID] = React.useState(1);

  const [count, setCount] = React.useState(0);

  const [title, setTitle] = React.useState("");

  const [origImage, setOrigImage] = React.useState("");

  const [activeIndex, setActiveIndex] = React.useState(0);

  const [swiperRef, setSwiperRef] = React.useState(null);

  // const onSelect = (id: number) => {
  //   console.log(id);
  //   setSelected(id);
  // };
  

  const onSlideChange = (index: number) => {
    return index
  }


  const imagePath = (id) => {
    return "https://photo-print.fra1.digitaloceanspaces.com/V_Parizhe/module_" +id + "/complex_"+id + ".jpg"
  }

  const onImageClick = (id: number) => {
    setModuleID(id)
    setSizeID(id)
    setImageUrl(imagePath(id));
    if (id <=6) {
      setIndex(1); 
    } else if (id >= 6 && id <=12) {
      setIndex(3);
    } else if(id >=12 && id <= 18) {
      setIndex(6);
    } else if (id >= 18 && id <=24) {
      setIndex(9);
    }
  };

  async function inform() {
    let response = await GetBasketList("", userID);
    if (response.status === true &&  response.message === "ok") {
      console.log("DADADA")
      setCount(response.result.length)
      console.log("COUNT ss", response.result.length)
      setLoading(false)
    }
  }

  async function addToBasket() {
    if (pictureID === 0) {
      return;
    } else {
      let response = await AddToBasketAPI("", pictureID, sizeID, materialID, moduleID, userID, item?.price || 5000, imageUrl, title);

      if (response.status === true && response.message === "ok") {
        successMessage("Успех", "Позиция добавлена в корзину.");
      } else {
        errorMessage("Ошибка", "Что-то пошло не так")
      }
    }
    inform();
  }

  const ImageTypes = () => {
    return (
      <CustomSwiper onClick={(id) => onImageClick(id)} onSlideChange={onSlideChange} slideTo={index} activeIndex={index} />
    );
  };

  React.useEffect(() => {
    async function fetch() {
      let response: any;
      let item_id = getQueryVariable("id");
      if (item_id) {
        response = await GetItem("token", parseInt(item_id, 10));
        setPictureID(parseInt(item_id));
      } else {
        setPictureID(0);
      }

      let user = JSON.parse(localStorage.getItem("user")!);

      if (user != null) {
        setUserID(parseInt(user.id));
      } else {
        setUserID(0);
      }
      setItem(response.result);
      setImageUrl("http://localhost:9092/" + response.result.complex_2);
      inform()
      setTitle(response.result.title)
      setLoading(false);
      setSelected(1); 
      setOrigImage("https://photo-print.fra1.digitaloceanspaces.com/V_Parizhe/paris-2499022_1920.jpg")
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
            <SiteHeader  ordersCount={count} />
            <section className="py-3" style={{ backgroundColor: "white" }}>
              <div className="container">
                <Nav toShow={true} title={item?.title} firstTitleHref={"/"} firstTitle="Картины"/>
                <div className="row g-5">
                  <div className="col-lg-12">
                    <div className="row gy-5 align-items-stretch">
                      <div className="col-lg-3">
                        <div className="swiper-container shop-detail-slider">
                          <div className="swiper-wrapper">
                            <div className="swiper-slide">
                              <img
                                className="img-fluid"
                                src={origImage}
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
                                <option value={i.id} key={i.id}>
                                  {i.width}x{i.heigth}{" "}
                                </option>
                              ))}
                            </select>
                            <h4 className="py-1 mb-1"> Поверхность холста </h4>
                            <select
                              className="form-select js-sizes mb-4"
                              data-customclass="bg-white rounded-0 border-2 text-uppercase border-gray-200"
                              onChange={(e) => setMaterialID(parseInt(e.target.value))}
                            >
                              <option value={1}>Глянцевая</option>
                              <option value={2}>Матовая</option>
                            </select>
                              <p className="h3 text-muted fw-normal">{item?.price} тг.</p>
                            <p className="text-center">
                              <button
                                className="btn btn-outline-primary"
                                type="submit"
                                onClick={() => addToBasket()}
                              >
                                <i className="fas fa-shopping-cart"></i> В
                                корзину
                              </button>
                              <button
                                className="btn btn-secondary"
                                type="button"
                                title="Add to wishlist"
                              >
                                <i className="far fa-heart"></i>
                              </button>
                            </p>
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
                      isSelected={selected === 2 ? true : false}
                    />
                  </ul>

                  <div className="tab-content" id="myTabContent">
                    {selected === 1 ? (
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

                    {selected === 2 ? (
                      <div
                        className="tab-pane fade show active"
                        id="2"
                        role="tabpanel"
                        aria-labelledby="info_2"
                      >
                        second
                      </div>
                    ) : null}

                    {selected === 3 ? (
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
