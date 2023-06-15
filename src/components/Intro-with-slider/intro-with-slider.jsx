import React from "react";
import { Link } from "gatsby";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import removeSlashFromPagination from "common/removeSlashpagination";
import fadeWhenScroll from "common/fadeWhenScroll";

SwiperCore.use([Navigation, Pagination]);

const IntroWithSlider = ({ sliderRef }) => {
  React.useEffect(() => {
    fadeWhenScroll(document.querySelectorAll(".fixed-slider .caption"));
    removeSlashFromPagination();
  }, []);

  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const paginationRef = React.useRef(null);
  const bgImageStyles = {
    height: "100vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  // Replace these URLs with your Cloudinary image URLs
  const teamImageUrl = "https://res.cloudinary.com/wallacegraham/image/upload/v1686857295/team_1_sj6t0g.jpg";
  const monaImageUrl = "https://res.cloudinary.com/wallacegraham/image/upload/v1686858327/mona_xbbcvn.jpg";
  const billImageUrl = "https://res.cloudinary.com/wallacegraham/image/upload/v1686858441/bill1_yi8a9i.jpg";
  const whitImageUrl = "https://res.cloudinary.com/wallacegraham/image/upload/v1686858328/whit_vrwkbc.jpg";

  return (
    <header ref={sliderRef} className="slider slider-prlx fixed-slider text-center">
      <div className="swiper-container parallax-slider">
        <Swiper
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          pagination={{
            type: "fraction",
            clickable: true,
            el: paginationRef.current,
          }}
          className="swiper-wrapper"
          slidesPerView={1}
        >
          {/* Swiper slides */}
          <SwiperSlide key="1" className="swiper-slide">
            <div
              className="bg-img valign slideImg"
              style={{
                backgroundImage: `url(${teamImageUrl})`,
                ...bgImageStyles,
              }}
              data-overlay-dark="6"
            >
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8 col-md-10">
                    <div className="caption center mt-30 slideTextBG">
                      <h1 className="">Our Clients Are Our Priority</h1>
                      <p>
                        Our firm motto says it all.  We listen.  We care.  We help.  We aim to improve the lives and well-being of each and every client that walks through our door.
                      </p>
                      <Link to="/testimonials/" className="butn bord curve mt-30">
                        <span>Read our Testimonials</span>
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
              style={{
                backgroundImage: `url(${monaImageUrl})`,
                ...bgImageStyles,
              }}
              data-overlay-dark="6"
            >
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8 col-md-10">
                    <div className="caption center mt-30 slideTextBG">
                      <h1 className="">Mona Lisa Wallace</h1>
                      <p>
                        Mona Lisa founded our firm in 1981, and has been working tirelessly ever since in her fight for fairness and justice.  She has received numerous awards and acknowledgements for her successful representation of thousands of injured and harmed employees and consumers nationwide.
                      </p>
                      <Link to="/attorneys/" className="butn bord curve mt-30">
                        <span>Meet our Attorneys</span>
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
              style={{
                backgroundImage: `url(${billImageUrl})`,
                ...bgImageStyles,
              }}
              data-overlay-dark="6"
            >
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8 col-md-10">
                    <div className="caption center mt-30 slideTextBG">
                      <h1 className="">Bill Graham</h1>
                      <p>
                        Bill uses his compassion and decades of legal experience to help individuals
                      </p>
                      <Link to="/team/" className="butn bord curve mt-30">
                        <span>Meet our Team</span>
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
              style={{
                backgroundImage: `url(${whitImageUrl})`,
                ...bgImageStyles,
              }}
              data-overlay-dark="6"
            >
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8 col-md-10">
                    <div className="caption center mt-30 slideTextBG">
                      <h1 className="">We Love What We Do</h1>
                      <p>
                        We find joy in investigating legal harms and to potentially helping another deserving client.
                      </p>
                      <Link to="/about-us/" className="butn bord curve mt-30">
                        <span>Learn more about us.</span>
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
