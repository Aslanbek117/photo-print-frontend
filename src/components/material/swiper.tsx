import React from "react";
import ReactDOM from "react-dom";

import { Navigation } from "swiper";
// Direct React component imports
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";

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
    onClick: Function
    onSlideChange: Function
    slideTo: number
}

export const CustomSwiper = (props: Props)  => {
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
 }

 const nextTo= () => {
   swiperInstance?.slideNext();
 }
 
  return (
    <div className="swiper">
      <Swiper
        spaceBetween={30}
        grid={{"rows": 2}}
        slidesPerView={3}
        slidesPerGroup={6}
        navigation={true}
        className="mySwiper"
        initialSlide={props.slideTo}
       
        onTransitionEnd={(swiper) => {
          props.onSlideChange(swiper.realIndex*2)
        }}
        onSlideChange={(swiper) => 
          
        //   (
          
        //   setValue(swiper.realIndex* 2),
        //   console.log(swiper.realIndex*2),
        //   console.log("SLIDE_TO", props.slideTo),
        //   // props.onSlideChange(3),
        //   swiper.slideTo(6)
        // )
      {
        // if (swiper.realIndex == 0) {
        //   if (swiper.ri)
        // }
      }
      
      }

      >
        <SwiperSlide onClick={ () => props.onClick(1)}  >Slide 1</SwiperSlide>
        <SwiperSlide onClick={ () => props.onClick(2)}>Slide 2</SwiperSlide>
        <SwiperSlide onClick={ () => props.onClick(3)}>Slide 3</SwiperSlide>
        <SwiperSlide onClick={ () => props.onClick(4)}>Slide 4</SwiperSlide>
        <SwiperSlide onClick={ () => props.onClick(5)}>Slide 5</SwiperSlide>
        <SwiperSlide onClick={ () => props.onClick(6)}>Slide 6</SwiperSlide>
        <SwiperSlide onClick={ () => props.onClick(7)}>Slide 7</SwiperSlide>
        <SwiperSlide onClick={ () => props.onClick(8)}>Slide 8</SwiperSlide>
        <SwiperSlide onClick={ () => props.onClick(9)}>Slide 9</SwiperSlide>
        <SwiperSlide onClick={ () => props.onClick(10)}>Slide 10</SwiperSlide>
        <SwiperSlide onClick={ () => props.onClick(11)}>Slide 11</SwiperSlide>
        <SwiperSlide onClick={ () => props.onClick(12)}>Slide 12</SwiperSlide>
      </Swiper>
      {/* <button onClick={nextTo} type='button'>next</button> */}
    </div>
  );
};



