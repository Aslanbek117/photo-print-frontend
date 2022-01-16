import * as React from "react";
import Loader from "components/loader";
import TopBar from "../headers/top-bar";
import {
  AddToBasketAPI,
  GetBasketList,
  GetItem,
} from "components/backend-api/api";
import { Image } from "antd";
import { TabItem } from "./tab-item";
import { Nav } from "./nav";
import { SiteHeader } from "../headers/header";
import { Tooltip } from "antd";

import { Navigation } from "swiper";
import Select from "react-select";

import SwiperCore, { Grid } from "swiper";
import { PhotoPprint } from "models/search/Search";
import { CustomSwiper } from "./swiper";
import { errorMessage, successMessage } from "utils/Notifications";
import { sizesFormatted } from './sizes.js'
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

export const ShopItem = (props: ShopItemProps) => {
  const [loading, setLoading] = React.useState(true);

  const [selected, setSelected] = React.useState(0);

  const [item, setItem] = React.useState<PhotoPprint>();

  const [imageUrl, setImageUrl] = React.useState("");

  const [index, setIndex] = React.useState(0);

  const [moduleID, setModuleID] = React.useState(1);

  const [sizeID, setSizeID] = React.useState(1);

  const [pictureID, setPictureID] = React.useState(0);

  const [userID, setUserID] = React.useState(0);

  const [materialID, setMaterialID] = React.useState(1);

  const [count, setCount] = React.useState(0);

  const [title, setTitle] = React.useState("");

  const [origImage, setOrigImage] = React.useState("");

  const [activeSlide, setActiveSlide] = React.useState(0);

  const [swiperRef, setSwiperRef] = React.useState<Select>();

  const selectRef = React.useRef<any>(null);

  // const onSelect = (id: number) => {
  //   console.log(id);
  //   setSelected(id);
  // };

  const onSlideChange = (index: number) => {
    return index;
  };

  const imagePath = (id) => {
    return (
      "https://photo-print.fra1.digitaloceanspaces.com/" +
      item?.directory_name.trim() +
      "/module_" +
      id +
      "/complex_" +
      id +
      ".jpg"
    );
  };

  const onImageClick = (id: number) => {
    setSizeID(0)
    setModuleID(id);
    setImageUrl(imagePath(id));
    setActiveSlide(id);
    selectRef.current.clearValue();
    if (id <= 6) {
      setIndex(1);
    } else if (id >= 6 && id <= 12) {
      setIndex(3);
    } else if (id >= 12 && id <= 18) {
      setIndex(6);
    } else if (id >= 18 && id <= 24) {
      setIndex(9);
    }
  };

  async function inform() {
    if (userID != 0) {
      let response = await GetBasketList("", userID);
      if (response.status === true && response.message === "ok") {
        setCount(response.result.length);
        setLoading(false);
      }
    } else {
      setCount(0);
      setLoading(false);
    }
  }

  async function addToBasket() {
    if (pictureID === 0) {
      return;
    } else {
      let response = await AddToBasketAPI(
        "",
        pictureID,
        sizeID || 0,
        materialID || 0,
        moduleID,
        userID,
        item?.price || 5000,
        imageUrl,
        title
      );

      if (response.status === true && response.message === "ok") {
        successMessage("Успех", "Позиция добавлена в корзину.");
      } else {
        errorMessage("Ошибка", "Что-то пошло не так");
      }
    }
    inform();
  }

  const ImageTypes = () => {
    return (
      <CustomSwiper
        onClick={(id) => onImageClick(id)}
        onSlideChange={onSlideChange}
        slideTo={index}
        activeIndex={index}
        activeSlide={activeSlide}
      />
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
      setImageUrl(
        "https://photo-print.fra1.digitaloceanspaces.com/" +
          response.result.directory_name +
          "/module_2/complex_2.jpg"
      );
      inform();
      setTitle(response.result.title);
      setLoading(false);
      setSelected(1);
      setOrigImage(
        "https://photo-print.fra1.digitaloceanspaces.com/" +
          response.result.directory_name +
          "/paris-2499022_1920.jpg"
      );
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
            <SiteHeader ordersCount={count} />
            <section className="py-3" style={{ backgroundColor: "white" }}>
              <div className="container">
                <Nav
                  toShow={true}
                  title={item?.title}
                  firstTitleHref={"/"}
                  firstTitle="Картины"
                />
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
                        <Image
                          src={imageUrl}
                          height={"100%"}
                          width={"100%"}
                          fallback="data:image/png;base64,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"
                        />
                      </div>

                      <div className="col-lg-4 flex-column justify-content-between">
                        <div className="lg-5">
                          <h3 className="">Тип модуля </h3>
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

                          <Select
                            ref={selectRef}
                            className="basic-single"
                            classNamePrefix="select"
                            name="color"
                            options={sizesFormatted.find(s => s.module_id === moduleID)?.innerSizes}
                            // defaultValue={sizesFormatted.find(s => s.module_id ===0)?.innerSizes[0].value}
                            onChange={(e) => e != null && e!= undefined && setSizeID(e.id)}
                            placeholder="Выберите размер"
                          />
                          <p className="h3 text-muted fw-normal">
                            {item?.price} тг.
                          </p>
                          <p className="text-center">
                            {userID == 0 ? (
                              <Tooltip title="Войдите, чтобы добавить">
                                <button
                                  className="btn btn-outline-primary"
                                  type="submit"
                                  onClick={() => addToBasket()}
                                  disabled={userID == 0 ? true : false}
                                  style={{ border: "none" }}
                                >
                                  <i className="fas fa-shopping-cart"></i> В
                                  корзину
                                </button>
                              </Tooltip>
                            ) : (
                              <button
                                className="btn btn-outline-primary"
                                type="submit"
                                onClick={() => addToBasket()}
                                disabled={(userID == 0 ? true : false) || (moduleID === 0 || sizeID === 0) ? true  : false}
                              >
                                <i className="fas fa-shopping-cart"></i> В
                                корзину
                              </button>
                            )}
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
                                src="https://photo-print.fra1.digitaloceanspaces.com/static/characteristic-1.jpg"
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
                                src="https://photo-print.fra1.digitaloceanspaces.com/static/characteristic-2.jpg"
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
                        <div className="container">
                          <div className="row">
                            <div className="col-lg-4 col-sm-4">
                              <img
                                className="img-fluid mb-2"
                                src="https://photo-print.fra1.digitaloceanspaces.com/static/how-to-3.jpg"
                                alt="..."
                              />
                              <h4 className="h4 text-uppercase text-center">
                                ШАГ 1
                              </h4>
                              <p
                                className="text-lg mb-3"
                                style={{ whiteSpace: "initial" }}
                              >
                                Прикрепите крепление с задней стороны картины по
                                центру подрамника
                              </p>
                            </div>

                            <div className="col-lg-4 col-sm-4">
                              <img
                                className="img-fluid mb-2"
                                src="https://photo-print.fra1.digitaloceanspaces.com/static/how-to-4.jpg"
                                alt="..."
                                style={{ maxHeight: "380px" }}
                              />
                              <h4 className="h4 text-uppercase text-center">
                                ШАГ 2
                              </h4>
                              <p
                                className="text-lg mb-3"
                                style={{ whiteSpace: "initial" }}
                              >
                                Вбейте в стену молотком крючек, который будет
                                держать картину
                              </p>
                            </div>
                            <div className="col-lg-4 col-sm-4">
                              <img
                                className="img-fluid mb-2"
                                src="https://photo-print.fra1.digitaloceanspaces.com/static/characteristic-1.jpg"
                                alt="..."
                                style={{ height: 380 }}
                              />
                              <h4 className="h4 text-uppercase text-center">
                                ШАГ 3
                              </h4>
                              <p
                                className="text-lg mb-3"
                                style={{ whiteSpace: "initial" }}
                              >
                                Повесьте картину
                              </p>
                            </div>
                          </div>
                        </div>
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

// <select
// className="form-select js-sizes mb-1"
// data-customclass="bg-white rounded-0 border-2 text-uppercase border-gray-200"
// >
// {sizes.map((i) => (
//   <option value={i.id} key={i.id}>
//     {i.width}x{i.heigth}{" "}
//   </option>
// ))}
// </select>
