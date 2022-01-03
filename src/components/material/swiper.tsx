import React from "react";
import ReactDOM from "react-dom";

import { Navigation } from "swiper";
// Direct React component imports
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";

import first from "./2x2.png";
import second from "./3x3.png";
import one from "./1x1.png";
import not from "./2x2_not.png";
import not3x3 from "./3x3_not.png";
import not1x1 from "./1x1_not.png";
import is from "./out_5.png";
import SwiperCore, { Grid } from "swiper";
// Styles must use direct files imports
// Styles must use direct files imports
import "swiper/swiper.scss"; // core Swiper
import "swiper/modules/grid/grid.scss"; // Navigation module
import "swiper/modules/navigation/navigation.scss"; // Navigation module
import "swiper/modules/pagination/pagination.scss"; // Pagination module

import "./app.css";
import { read } from "fs";
import { relative } from "path/posix";

SwiperCore.use([Grid, Navigation]);

interface Props {
  onClick: Function;
  onSlideChange: Function;
  slideTo: number;
}

export const CustomSwiper = (props: Props) => {
  const [swiperInstance, setSwiperInstance] = React.useState<SwiperCore>();

  const [value, setValue] = React.useState(0);

  const [index, setIndex] = React.useState(0);

  const handleExternalChangeSlide = (newSlideIndexToShow) => {
    // console.log("NEW", newSlideIndexToShow.realIndex)
    // console.log(newSlideIndexToShow.activeIndex, newSlideIndexToShow.realIndex);
    // swiperInstance?.slideTo(newSlideIndexToShow.realIndex);
    // console.log(newSlideIndexToShow.activeIndex, newSlideIndexToShow.realIndex);
    // let currentSlide = swiperInstance?.slides[newSlideIndexToShow.realIndex]
    // swiperInstance?.slideTo(newSlideIndexToShow.realIndex);
    setValue(newSlideIndexToShow.realIndex);
  };

  const nextTo = () => {
    swiperInstance?.slideNext();
  };

  return (
    <>
      <div className="swiper">
        <Swiper
          spaceBetween={30}
          grid={{ rows: 2 }}
          slidesPerView={3}
          slidesPerGroup={6}
          navigation={true}
          className="mySwiper"
          initialSlide={props.slideTo}
          onTransitionEnd={(swiper) => {
            props.onSlideChange(swiper.realIndex * 2);
          }}
          style={{ border: "1px solid black" }}
        >
          <SwiperSlide onClick={() => props.onClick(1)}>
            <span className="sepia">
              <img src={first} onClick={() => props.onClick(1)} />
            </span>
          </SwiperSlide>
          <SwiperSlide onClick={() => props.onClick(2)}>
            <span className="sepia">
              <img src={second} onClick={() => props.onClick(2)} />
            </span>
          </SwiperSlide>
          <SwiperSlide onClick={() => props.onClick(3)}>
            <span className="sepia">
              <img src={one} onClick={() => props.onClick(3)} />
            </span>
          </SwiperSlide>
          <SwiperSlide onClick={() => props.onClick(4)}>
            <span className="sepia">
              <img src={not} onClick={() => props.onClick(4)} />
            </span>
          </SwiperSlide>
          <SwiperSlide onClick={() => props.onClick(5)}>
            <span className="sepia">
              <img src={not3x3} onClick={() => props.onClick(5)} />
            </span>
          </SwiperSlide>
          <SwiperSlide onClick={() => props.onClick(6)}>
            <span className="sepia">
              <img src={not1x1} onClick={() => props.onClick(6)} />
            </span>
          </SwiperSlide>
          <SwiperSlide onClick={() => props.onClick(7)}>Slide 7</SwiperSlide>
          <SwiperSlide onClick={() => props.onClick(8)}>Slide 8</SwiperSlide>
          <SwiperSlide onClick={() => props.onClick(9)}>Slide 9</SwiperSlide>
          <SwiperSlide onClick={() => props.onClick(10)}>Slide 10</SwiperSlide>
          <SwiperSlide onClick={() => props.onClick(11)}>Slide 11</SwiperSlide>
          <SwiperSlide onClick={() => props.onClick(12)}>Slide 12</SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};
