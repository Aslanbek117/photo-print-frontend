import React from "react";

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

import "../../styles/app.css";

SwiperCore.use([Grid, Navigation]);

interface Props {
  onClick: Function;
  onSlideChange: Function;
  slideTo: number;
  activeIndex: number;
  activeSlide: number;
}

export const CustomSwiper = (props: Props) => {
  const [swiperInstance, setSwiperInstance] = React.useState<SwiperCore>();

  const [isActive, setIsActive]= React.useState(new Map());

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
    let oldMap = new Map(isActive)
    oldMap.set(props.activeSlide, true)
    setIsActive(oldMap)
  }, []);


  return (
    <>
      <div className="swiper" style={{minHeight: 120}}>
        <Swiper
          
          spaceBetween={30}
          grid={{ rows: 2 }}
          slidesPerView={3}
          slidesPerGroup={3}
          navigation={true}
          className="mySwiper"
          preloadImages={true}
          initialSlide={props.slideTo}
          lazy = {{loadPrevNext: true}}
          style={{ border: "1px solid black" }}
        >
          <SwiperSlide
            onClick={() => toggleClass(1)}
          >
            <span className={isActive?.get(1) ? 'sepia-active': 'sepia'} >
            <img src={"https://photo-print.fra1.digitaloceanspaces.com/static/slide-3.png"} />
            </span>
          </SwiperSlide>
          <SwiperSlide
            onClick={() => {
              toggleClass(2);
              // props.onClick(2);
            }}
          >
            <span className={isActive?.get(2) ? 'sepia-active': 'sepia'}>
            <img src={"https://photo-print.fra1.digitaloceanspaces.com/static/slide-5.png"} />

            </span>
          </SwiperSlide>
          <SwiperSlide
            onClick={() => {
              toggleClass(3);
              props.onClick(3);
            }}
          >
            <span className={isActive?.get(3) ? 'sepia-active': 'sepia'}>
            <img src={"https://photo-print.fra1.digitaloceanspaces.com/static/slide-6.png"} />

            </span>
          </SwiperSlide>
          <SwiperSlide
            onClick={() => {
              toggleClass(4);
              props.onClick(4);
            }}
          >
            <span className={isActive?.get(4) ? 'sepia-active': 'sepia'}>
            <img src={"https://photo-print.fra1.digitaloceanspaces.com/static/slide-40.png"} />
            </span>
          </SwiperSlide>
          <SwiperSlide
            onClick={() => {
              toggleClass(5);
              props.onClick(5);
            }}
          >
            <span className={isActive?.get(5) ? 'sepia-active': 'sepia'}>
            <img src={"https://photo-print.fra1.digitaloceanspaces.com/static/slide-41.png"} />
            </span>
          </SwiperSlide>
          <SwiperSlide
            onClick={() => {
              toggleClass(37);
              props.onClick(37);
            }}
            
          >
            <span className={isActive?.get(37) ? 'sepia-active': 'sepia'}>
            <img src={"https://photo-print.fra1.digitaloceanspaces.com/static/slide-37.png"} />
            </span>
          </SwiperSlide>
          

          <SwiperSlide
            onClick={() => {
              toggleClass(7);
              props.onClick(7);
            }}
          >
                 <span className={isActive?.get(7) ? 'sepia-active': 'sepia'}>
              <img src={"https://photo-print.fra1.digitaloceanspaces.com/static/slide-38.png"} />
            </span>
          </SwiperSlide>

          <SwiperSlide
            onClick={() => {
              toggleClass(8);
              props.onClick(8);
            }}
          >
            {/* // https://photo-print.fra1.digitaloceanspaces.com/static/slide-8.png */}
            <span className={isActive?.get(8) ? 'sepia-active': 'sepia'}>
              <img src={"https://photo-print.fra1.digitaloceanspaces.com/static/slide-8.png"} />
            </span>
          </SwiperSlide>
          <SwiperSlide
            onClick={() => {
              toggleClass(9);
              props.onClick(9);
            }}
          >
             <span className={isActive?.get(9) ? 'sepia-active': 'sepia'}>
              <img src={"https://photo-print.fra1.digitaloceanspaces.com/static/slide-9.png"} />
            </span>
          </SwiperSlide>
          <SwiperSlide
            onClick={() => {
              toggleClass(10);
              props.onClick(10);
            }}
          >
             <span className={isActive?.get(10) ? 'sepia-active': 'sepia'}>
              <img src={"https://photo-print.fra1.digitaloceanspaces.com/static/slide-10.png"} />
            </span>
          </SwiperSlide>
          <SwiperSlide
            onClick={() => {
              toggleClass(11);
              props.onClick(11);
            }}
          >
            <span className={isActive?.get(11) ? 'sepia-active': 'sepia'}>
              <img src={"https://photo-print.fra1.digitaloceanspaces.com/static/slide-11.png"} />
            </span>
          </SwiperSlide>
          <SwiperSlide
            onClick={() => {
              toggleClass(12);
              props.onClick(12);
            }}
          >
            <span className={isActive?.get(12) ? 'sepia-active': 'sepia'}>
              <img src={"https://photo-print.fra1.digitaloceanspaces.com/static/slide-12.png"} />
            </span>
          </SwiperSlide>
          <SwiperSlide
            onClick={() => {
              toggleClass(13);
              props.onClick(13);
            }}
          >
            <span className={isActive?.get(13) ? 'sepia-active': 'sepia'}>
              <img src={"https://photo-print.fra1.digitaloceanspaces.com/static/slide-13.png"} />
            </span>
          </SwiperSlide>
          <SwiperSlide
            onClick={() => {
              toggleClass(14);
              props.onClick(14);
            }}
          >
             <span className={isActive?.get(14) ? 'sepia-active': 'sepia'}>
              <img src={"https://photo-print.fra1.digitaloceanspaces.com/static/slide-14.png"} />
            </span>
          </SwiperSlide>
          <SwiperSlide
            onClick={() => {
              toggleClass(15);
              props.onClick(15);
            }}
          >
             <span className={isActive?.get(15) ? 'sepia-active': 'sepia'}>
              <img src={"https://photo-print.fra1.digitaloceanspaces.com/static/slide-15.png"} />
            </span>
          </SwiperSlide>
          <SwiperSlide
            onClick={() => {
              toggleClass(16);
              props.onClick(16);
            }}
          >
              <span className={isActive?.get(16) ? 'sepia-active': 'sepia'}>
              <img src={"https://photo-print.fra1.digitaloceanspaces.com/static/slide-16.png"} />
            </span>
          </SwiperSlide>
          <SwiperSlide
            onClick={() => {
              toggleClass(17);
              props.onClick(17);
            }}
          >
                <span className={isActive?.get(17) ? 'sepia-active': 'sepia'}>
              <img src={"https://photo-print.fra1.digitaloceanspaces.com/static/slide-17.png"} />
            </span>
          </SwiperSlide>
          <SwiperSlide
            onClick={() => {
              toggleClass(18);
              props.onClick(18);
            }}
          >
              <span className={isActive?.get(18) ? 'sepia-active': 'sepia'}>
              <img src={"https://photo-print.fra1.digitaloceanspaces.com/static/slide-18.png"} />
            </span>
          </SwiperSlide>
          <SwiperSlide
            onClick={() => {
              toggleClass(19);
              props.onClick(19);
            }}
          >
              <span className={isActive?.get(19) ? 'sepia-active': 'sepia'}>
              <img src={"https://photo-print.fra1.digitaloceanspaces.com/static/slide-19.png"} />
            </span>
          </SwiperSlide>
          <SwiperSlide
            onClick={() => {
              toggleClass(20);
              props.onClick(20);
            }}
          >
               <span className={isActive?.get(20) ? 'sepia-active': 'sepia'}>
              <img src={"https://photo-print.fra1.digitaloceanspaces.com/static/slide-20.png"} />
            </span>
          </SwiperSlide>
          <SwiperSlide
            onClick={() => {
              toggleClass(21);
              props.onClick(21);
            }}
          >
                <span className={isActive?.get(21) ? 'sepia-active': 'sepia'}>
              <img src={"https://photo-print.fra1.digitaloceanspaces.com/static/slide-21.png"} />
            </span>
          </SwiperSlide>
          <SwiperSlide
            onClick={() => {
              toggleClass(2);
              props.onClick(22);
            }}
          >
               <span className={isActive?.get(22) ? 'sepia-active': 'sepia'}>
              <img src={"https://photo-print.fra1.digitaloceanspaces.com/static/slide-22.png"} />
            </span>
          </SwiperSlide>
          <SwiperSlide
            onClick={() => {
              toggleClass(23);
              props.onClick(23);
            }}
          >
                 <span className={isActive?.get(23) ? 'sepia-active': 'sepia'}>
              <img src={"https://photo-print.fra1.digitaloceanspaces.com/static/slide-23.png"} />
            </span>
          </SwiperSlide>
          <SwiperSlide
            onClick={() => {
              toggleClass(24);
              props.onClick(24);
            }}
          >
                 <span className={isActive?.get(24) ? 'sepia-active': 'sepia'}>
              <img src={"https://photo-print.fra1.digitaloceanspaces.com/static/slide-24.png"} />
            </span>
          </SwiperSlide>

          <SwiperSlide
            onClick={() => {
              toggleClass(26);
              props.onClick(26);
            }}
          >
                 <span className={isActive?.get(26) ? 'sepia-active': 'sepia'}>
              <img src={"https://photo-print.fra1.digitaloceanspaces.com/static/slide-26.png"} />
            </span>
          </SwiperSlide>


          <SwiperSlide
            onClick={() => {
              toggleClass(27);
              props.onClick(27);
            }}
          >
                 <span className={isActive?.get(27) ? 'sepia-active': 'sepia'}>
              <img src={"https://photo-print.fra1.digitaloceanspaces.com/static/slide-27.png"} />
            </span>
          </SwiperSlide>


          <SwiperSlide
            onClick={() => {
              toggleClass(28);
              props.onClick(28);
            }}
          >
                 <span className={isActive?.get(28) ? 'sepia-active': 'sepia'}>
              <img src={"https://photo-print.fra1.digitaloceanspaces.com/static/slide-28.png"} />
            </span>
          </SwiperSlide>


          <SwiperSlide
            onClick={() => {
              toggleClass(29);
              props.onClick(29);
            }}
          >
                 <span className={isActive?.get(29) ? 'sepia-active': 'sepia'}>
              <img src={"https://photo-print.fra1.digitaloceanspaces.com/static/slide-31.png"} />
            </span>
          </SwiperSlide>


          <SwiperSlide
            onClick={() => {
              toggleClass(30);
              props.onClick(30);
            }}
          >
                 <span className={isActive?.get(30) ? 'sepia-active': 'sepia'}>
              <img src={"https://photo-print.fra1.digitaloceanspaces.com/static/slide-30.png"} />
            </span>
          </SwiperSlide>

          <SwiperSlide
            onClick={() => {
              toggleClass(31);
              props.onClick(31);
            }}
          >
                 <span className={isActive?.get(31) ? 'sepia-active': 'sepia'}>
              <img src={"https://photo-print.fra1.digitaloceanspaces.com/static/slide-29.png"} />
            </span>
          </SwiperSlide>

{/* 
          <SwiperSlide
            onClick={() => {
              toggleClass(32);
              props.onClick(32);
            }}
          >
                 <span className={isActive?.get(32) ? 'sepia-active': 'sepia'}>
              <img src={"https://photo-print.fra1.digitaloceanspaces.com/static/slide-32.png"} />
            </span>
          </SwiperSlide>


          <SwiperSlide
            onClick={() => {
              toggleClass(33);
              props.onClick(33);
            }}
          >
                 <span className={isActive?.get(33) ? 'sepia-active': 'sepia'}>
              <img src={"https://photo-print.fra1.digitaloceanspaces.com/static/slide-33.png"} />
            </span>
          </SwiperSlide>


          <SwiperSlide
            onClick={() => {
              toggleClass(34);
              props.onClick(34);
            }}
          >
                 <span className={isActive?.get(34) ? 'sepia-active': 'sepia'}>
              <img src={"https://photo-print.fra1.digitaloceanspaces.com/static/slide-34.png"} />
            </span>
          </SwiperSlide>


          <SwiperSlide
            onClick={() => {
              toggleClass(35);
              props.onClick(35);
            }}
          >
                 <span className={isActive?.get(35) ? 'sepia-active': 'sepia'}>
              <img src={"https://photo-print.fra1.digitaloceanspaces.com/static/slide-35.png"} />
            </span>
          </SwiperSlide>


          <SwiperSlide
            onClick={() => {
              toggleClass(36);
              props.onClick(36);
            }}
          >
                 <span className={isActive?.get(36) ? 'sepia-active': 'sepia'}>
              <img src={"https://photo-print.fra1.digitaloceanspaces.com/static/slide-36.png"} />
            </span>
          </SwiperSlide>



          <SwiperSlide
            onClick={() => {
              toggleClass(37);
              props.onClick(37);
            }}
          >
                 <span className={isActive?.get(37) ? 'sepia-active': 'sepia'}>
              <img src={"https://photo-print.fra1.digitaloceanspaces.com/static/slide-37.png"} />
            </span>
          </SwiperSlide> */}

        </Swiper>
      </div>
    </>
  );
};
