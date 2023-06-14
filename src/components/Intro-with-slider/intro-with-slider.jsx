import React from "react";
import { Link } from "gatsby";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Parallax } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import removeSlashFromPagination from "common/removeSlashpagination";
import fadeWhenScroll from "common/fadeWhenScroll";

SwiperCore.use([Navigation, Pagination, Parallax]);

const IntroWithSlider = ({ sliderRef }) => {
  React.useEffect(() => {
    fadeWhenScroll(document.querySelectorAll(".fixed-slider .caption"));
    removeSlashFromPagination();
  }, []);

  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const paginationRef = React.useRef(null);

  return (
    <header ref={sliderRef} className="slider slider-prlx fixed-slider text-center">
      <div className="swiper-container parallax-slider">
        <Swiper
          parallax={true}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          pagination={{
            type: "fraction",
            clickable: true,
            el: paginationRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
            swiper.params.pagination.el = paginationRef.current;
          }}
          onSwiper={(swiper) => {
            setTimeout(() => {
              for (var i = 0; i < swiper.slides.length; i++) {
                swiper.slides[i].childNodes[0].setAttribute(
                  "data-swiper-parallax",
                  0.75 * swiper.width
                );
              }

              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;

              swiper.params.pagination.el = paginationRef.current;

              swiper.navigation.destroy();
              swiper.navigation.init();
              swiper.navigation.update();

              swiper.pagination.destroy();
              swiper.pagination.init();
              swiper.pagination.update();
            });
          }}
          className="swiper-wrapper"
          slidesPerView={1}
        >
            <SwiperSlide key="1" className="swiper-slide">
              <div
                  className="bg-img valign"
                  style={{ backgroundImage: `url(/img/slid/team.jpg)` }}
                  data-overlay-dark="6"
              >
                  <div className="container">
                  <div className="row justify-content-center">
                      <div className="col-lg-8 col-md-10">
                      <div className="caption center mt-30">
                          <h1 className="">Our Clients Are Our Priority</h1>
                          <p>Our firm motto says it all.  We listen.  We care.  We help.  We aim to improve the lives and well-being of each and every client that walks through our door.</p>
                          <Link to="/about/about-dark" className="butn bord curve mt-30">
                          <span>Look More</span>
                          </Link>
                      </div>
                      </div>
                  </div>
                  </div>
              </div>
          </SwiperSlide>
          <SwiperSlide key="2" className="swiper-slide">
              <div
                  className="bg-img valign"
                  style={{ backgroundImage: `url(/img/slid/mona.jpg)` }}
                  data-overlay-dark="6"
              >
                  <div className="container">
                  <div className="row justify-content-center">
                      <div className="col-lg-8 col-md-10">
                      <div className="caption center mt-30">
                          <h1 className="">Mona Lisa Wallace</h1>
                          <p>Mona Lisa founded our firm in 1981, and has been working tirelessly ever since in her fight for fairness and justice.  She has received numerous awards and acknowledgements for her successful representation of thousands of injured and harmed employees and consumers nationwide.</p>
                          <Link to="/about/about-dark" className="butn bord curve mt-30">
                          <span>Look More</span>
                          </Link>
                      </div>
                      </div>
                  </div>
                  </div>
              </div>
          </SwiperSlide>
          <SwiperSlide key="3" className="swiper-slide">
              <div
                  className="bg-img valign"
                  style={{ backgroundImage: `url(/img/slid/bill.jpg)` }}
                  data-overlay-dark="6"
              >
                  <div className="container">
                  <div className="row justify-content-center">
                      <div className="col-lg-8 col-md-10">
                      <div className="caption center mt-30">
                          <h1 className="">Bill Graham</h1>
                          <p>Bill uses his compassion and decades of legal experience to help individuals </p>
                          <Link to="/about/about-dark" className="butn bord curve mt-30">
                          <span>Look More</span>
                          </Link>
                      </div>
                      </div>
                  </div>
                  </div>
              </div>
          </SwiperSlide>
          <SwiperSlide key="4" className="swiper-slide">
              <div
                  className="bg-img valign"
                  style={{ backgroundImage: `url(/img/slid/whit.jpg)` }}
                  data-overlay-dark="6"
              >
                  <div className="container">
                  <div className="row justify-content-center">
                      <div className="col-lg-8 col-md-10">
                      <div className="caption center mt-30">
                          <h1 className="">We Love What We Do</h1>
                          <p>We find joy in investigating legal harms and to potentially helping another deserving client. </p>
                          <Link to="/about/about-dark" className="butn bord curve mt-30">
                          <span>Look More</span>
                          </Link>
                      </div>
                      </div>
                  </div>
                  </div>
              </div>
          </SwiperSlide>
          </Swiper>
        <div className="setone setwo">
          <div
            ref={navigationNextRef}
            className="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer"
          >
            <i className="fas fa-chevron-right"></i>
          </div>
          <div
            ref={navigationPrevRef}
            className="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer"
          >
            <i className="fas fa-chevron-left"></i>
          </div>
        </div>
      </div>
    </header>
  );
};
export default IntroWithSlider;