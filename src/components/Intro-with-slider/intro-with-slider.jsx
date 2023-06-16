import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import removeSlashFromPagination from "common/removeSlashpagination";
import fadeWhenScroll from "common/fadeWhenScroll";
import BackgroundImage from "gatsby-background-image";

SwiperCore.use([Navigation, Pagination]);

const IntroWithSlider = ({ sliderRef }) => {
  React.useEffect(() => {
    fadeWhenScroll(document.querySelectorAll(".fixed-slider .caption"));
    removeSlashFromPagination();
  }, []);

  // Get the image files using GraphQL
  const data = useStaticQuery(graphql`
    query {
      teamImage: file(relativePath: { eq: "img/team.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      monaImage: file(relativePath: { eq: "img/mona.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      billImage: file(relativePath: { eq: "img/bill.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      whitImage: file(relativePath: { eq: "img/whit.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const paginationRef = React.useRef(null);
  const bgImageStyles = {
    height: "100vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

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
            <BackgroundImage
              Tag="div"
              className="bg-img valign slideImg"
              fluid={data.teamImage?.childImageSharp?.fluid}
              data-overlay-dark="6"
              style={bgImageStyles}
            >
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8 col-md-10">
                    <div className="caption center mt-30 slideTextBG">
                      <h1 className="">Our Clients Are Our Priority</h1>
                      <p>
                        Our firm motto says it all.  We listen.  We care.  We help.  We aim to improve the lives and well-being of each and every client that walks through our door.
                      </p>
                      <Link to="/about/about-dark" className="butn bord curve mt-30">
                        <span>Look More</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </BackgroundImage>
          </SwiperSlide>
          <SwiperSlide key="2" className="swiper-slide">
            <BackgroundImage
              Tag="div"
              className="bg-img valign"
              fluid={data.monaImage?.childImageSharp?.fluid}
              data-overlay-dark="6"
              style={bgImageStyles}
            >
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8 col-md-10">
                    <div className="caption center mt-30 slideTextBG">
                      <h1 className="">Mona Lisa Wallace</h1>
                      <p>
                        Mona Lisa founded our firm in 1981, and has been working tirelessly ever since in her fight for fairness and justice.  She has received numerous awards and acknowledgements for her successful representation of thousands of injured and harmed employees and consumers nationwide.
                      </p>
                      <Link to="/about/about-dark" className="butn bord curve mt-30">
                        <span>Look More</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </BackgroundImage>
          </SwiperSlide>
          <SwiperSlide key="3" className="swiper-slide">
            <BackgroundImage
              Tag="div"
              className="bg-img valign"
              fluid={data.billImage?.childImageSharp?.fluid}
              data-overlay-dark="6"
              style={bgImageStyles}
            >
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8 col-md-10">
                    <div className="caption center mt-30 slideTextBG">
                      <h1 className="">Bill Graham</h1>
                      <p>
                        Bill uses his compassion and decades of legal experience to help individuals
                      </p>
                      <Link to="/about/about-dark" className="butn bord curve mt-30">
                        <span>Look More</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </BackgroundImage>
          </SwiperSlide>
          <SwiperSlide key="4" className="swiper-slide">
            <BackgroundImage
              Tag="div"
              className="bg-img valign"
              fluid={data.whitImage?.childImageSharp?.fluid}
              data-overlay-dark="6"
              style={bgImageStyles}
            >
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8 col-md-10">
                    <div className="caption center mt-30 slideTextBG">
                      <h1 className="">We Love What We Do</h1>
                      <p>
                        We find joy in investigating legal harms and to potentially helping another deserving client.
                      </p>
                      <Link to="/about/about-dark" className="butn bord curve mt-30">
                        <span>Look More</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </BackgroundImage>
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