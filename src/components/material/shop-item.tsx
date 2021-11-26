import * as React from "react";
import "./app.css";
import Loader from "components/loader";
import TopBar from "./top-bar";
import Header from "./header.js";

 interface ShopItemProps {
     page: string;
     per_page: string;
     pages: number[];
     category: string;
 }

export const ShopItem = (props: ShopItemProps) => {
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        setLoading(false);
    }, []);


    
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="wide" id="all">
            <TopBar />
            <Header />
            <section className="py-5">
            <div className="container py-4">
              <div className="row g-5">
              <div className="col-lg-9">
              <p className="lead mb-4">Built purse maids cease her ham new seven among and. Pulled coming wooded tended it answer remain me be. So landlord by we unlocked sensible it. Fat cannot use denied excuse son law. Wisdom happen suffer common the appear ham beauty her had. Or belonging zealously existence as by resources.</p>
              <div className="text-center mb-5"><a className="text-muted text-center small text-uppercase text-decoration-underline" href="#details">Scroll to product details, material &amp; care and sizing</a></div>
              <div className="row gy-5 align-items-stretch">
                <div className="col-lg-6">
                  <div className="swiper-container shop-detail-slider">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide"><img className="img-fluid" src="https://www.allstick.ru//@s/image-cache/bcf/bcf57e7f7d4e-u..product~35~35795~5e8a3d4ae89d1.fit.max.h.400.local.gallery~offset~50.w.400~xgxgxgxdxkx.jpg" alt="..." /></div>
                      {/* <div className="swiper-slide"><img className="img-fluid" src="https://www.allstick.ru//@s/image-cache/bcf/bcf57e7f7d4e-u..product~35~35795~5e8a3d4ae89d1.fit.max.h.400.local.gallery~offset~50.w.400~xgxgxgxdxkx.jpg" alt="..."/></div> */}
                      {/* <div className="swiper-slide"><img className="img-fluid" src="https://www.allstick.ru//@s/image-cache/bcf/bcf57e7f7d4e-u..product~35~35795~5e8a3d4ae89d1.fit.max.h.400.local.gallery~offset~50.w.400~xgxgxgxdxkx.jpg" alt="..."/></div> */}
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 d-flex flex-column justify-content-between">
                  <div className="p-4 p-lg-5 border mb-5 bg-light">
                    <form action="#">
                      <h3 className="text-center mb-3">Available sizes</h3>
                      <select className="form-select js-sizes mb-5" data-customclass="bg-white rounded-0 border-2 text-uppercase border-gray-200">
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                        <option value="x-large">X Large</option>
                      </select>
                      <p className="h1 text-muted mb-4 text-center fw-normal">$124.00</p>
                      <p className="text-center">
                        <button className="btn btn-outline-primary" type="submit"><i className="fas fa-shopping-cart"></i> Add to cart</button>
                        <button className="btn btn-secondary" type="submit" data-bs-toggle="tooltip" data-placement="top" title="Add to wishlist"><i className="far fa-heart"></i></button>
                      </p>
                    </form>
                  </div>
                  <div className="swiper-container shop-detail-slider-thumbs w-100">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide swiper-slide-thumb flex-fill"><img className="img-fluid" src="https://www.allstick.ru//@s/image-cache/bcf/bcf57e7f7d4e-u..product~35~35795~5e8a3d4ae89d1.fit.max.h.400.local.gallery~offset~50.w.400~xgxgxgxdxkx.jpg" alt="..." /></div>
                      {/* <div className="swiper-slide swiper-slide-thumb flex-fill"><img className="img-fluid" src="https://www.allstick.ru//@s/image-cache/bcf/bcf57e7f7d4e-u..product~35~35795~5e8a3d4ae89d1.fit.max.h.400.local.gallery~offset~50.w.400~xgxgxgxdxkx.jpg" alt="..." /></div> */}
                      {/* <div className="swiper-slide swiper-slide-thumb flex-fill"><img className="img-fluid" src="https://www.allstick.ru//@s/image-cache/bcf/bcf57e7f7d4e-u..product~35~35795~5e8a3d4ae89d1.fit.max.h.400.local.gallery~offset~50.w.400~xgxgxgxdxkx.jpg" alt="..." /></div> */}
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </div>
            </div>
            </section>
        </div>
      )
        }
    </>
  );
};
