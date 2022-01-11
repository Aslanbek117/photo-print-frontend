import React from "react";

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
// Styles must use direct files imports
// Styles must use direct files imports
import "swiper/swiper.scss"; // core Swiper
import "swiper/modules/grid/grid.scss"; // Navigation module
import "swiper/modules/navigation/navigation.scss"; // Navigation module
import "swiper/modules/pagination/pagination.scss"; // Pagination module

import "../../styles/app.css";

SwiperCore.use([Grid, Navigation]);

interface Props {
  onClick: Function;
  onSlideChange: Function;
  slideTo: number;
  activeIndex: number;
}

export const CustomSwiper = (props: Props) => {
  const [swiperInstance, setSwiperInstance] = React.useState<SwiperCore>();

  const [value, setValue] = React.useState(0);

  const [index, setIndex] = React.useState(0);

  const [selected, setSelected] = React.useState(0);

  const [isActive, setIsActive]= React.useState(new Map());

  const handleExternalChangeSlide = (newSlideIndexToShow) => {
    // console.log("NEW", newSlideIndexToShow.realIndex)
    // console.log(newSlideIndexToShow.activeIndex, newSlideIndexToShow.realIndex);
    // swiperInstance?.slideTo(newSlideIndexToShow.realIndex);
    // console.log(newSlideIndexToShow.activeIndex, newSlideIndexToShow.realIndex);
    // let currentSlide = swiperInstance?.slides[newSlideIndexToShow.realIndex]
    // swiperInstance?.slideTo(newSlideIndexToShow.realIndex);
    setValue(newSlideIndexToShow.realIndex);
  };

  const toggleClass = (id) => {
    let oldMap = new Map(isActive)
    oldMap.set(id, true)
    props.onClick(id)
    setIsActive(oldMap)
    // props.onClick(id)
  };

  const nextTo = () => {
    swiperInstance?.slideNext();
  };

  React.useEffect(() => {
    console.log("props", props.activeIndex)
    let oldMap = new Map(isActive)
    oldMap.set(props.activeIndex, true)
    setIsActive(oldMap)
  }, []);




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
          onSlideChange={() => setSelected(1)}
//          on={{'click': function() { setSelected(1); console.log("selected 1")} }}
        >
          <SwiperSlide
            onClick={() => toggleClass(1)}
          >
            <span className={isActive?.get(1) ? 'sepia-active': 'sepia'} >
              <img src={first} />
            </span>
          </SwiperSlide>
          <SwiperSlide
            onClick={() => {
              toggleClass(2);
              // props.onClick(2);
            }}
          >
            <span className={isActive?.get(2) ? 'sepia-active': 'sepia'}>
              <img src={second} />
            </span>
          </SwiperSlide>
          <SwiperSlide
            onClick={() => {
              toggleClass(3);
              props.onClick(3);
            }}
          >
            <span className={isActive?.get(3) ? 'sepia-active': 'sepia'}>
              <img src={one} />
            </span>
          </SwiperSlide>
          <SwiperSlide
            onClick={() => {
              toggleClass(4);
              props.onClick(4);
            }}
          >
            <span className={isActive?.get(4) ? 'sepia-active': 'sepia'}>
              <img src={not} />
            </span>
          </SwiperSlide>
          <SwiperSlide
            onClick={() => {
              toggleClass(5);
              props.onClick(5);
            }}
          >
            <span className={isActive?.get(5) ? 'sepia-active': 'sepia'}>
              <img src={not3x3} />
            </span>
          </SwiperSlide>
          <SwiperSlide
            onClick={() => {
              toggleClass(6);
              props.onClick(6);
            }}
          >
            <span className={isActive?.get(6) ? 'sepia-active': 'sepia'}>
              <img src={not1x1} />
            </span>
          </SwiperSlide>
          <SwiperSlide
            onClick={() => {
              toggleClass(7);
              props.onClick(7);
            }}
          >
            Slide 7
          </SwiperSlide>
          <SwiperSlide
            onClick={() => {
              toggleClass(8);
              props.onClick(8);
            }}
          >
            Slide 8
          </SwiperSlide>
          <SwiperSlide
            onClick={() => {
              toggleClass(9);
              props.onClick(9);
            }}
          >
            Slide 9
          </SwiperSlide>
          <SwiperSlide
            onClick={() => {
              toggleClass(10);
              props.onClick(10);
            }}
          >
            Slide 10
          </SwiperSlide>
          <SwiperSlide
            onClick={() => {
              toggleClass(11);
              props.onClick(11);
            }}
          >
            Slide 11
          </SwiperSlide>
          <SwiperSlide
            onClick={() => {
              toggleClass(12);
              props.onClick(12);
            }}
          >
            Slide 12
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};
