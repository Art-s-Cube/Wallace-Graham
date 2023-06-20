import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import { graphql, useStaticQuery } from "gatsby";
import removeSlashFromPagination from "common/removeSlashpagination";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Parallax } from "swiper";
import { GatsbyImage, getImage } from "gatsby-plugin-image";



SwiperCore.use([Navigation, Pagination, Parallax]);
const bgImageStyles = {
  height: "100vh",
  backgroundSize: "cover",
  backgroundPosition: "center",
};
const Intro5 = () => {
  const [load, setLoad] = React.useState(true);
  React.useEffect(() => {
    removeSlashFromPagination()
    setTimeout(() => {
      setLoad(false);
    });
  }, []);
  const data = useStaticQuery(graphql`
    query {
      teamImage: file(relativePath: {eq: "img/team.jpg"}) {
        childImageSharp {
          gatsbyImageData(width: 1920, placeholder: BLURRED, quality: 100)
        }
      }
      monaImage: file(relativePath: { eq: "img/mona.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 1920, placeholder: BLURRED, quality: 100)
        }
      }
      billImage: file(relativePath: { eq: "img/bill.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 1920, placeholder: BLURRED, quality: 100)
        }
      }
      whitImage: file(relativePath: { eq: "img/whit.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 1920, placeholder: BLURRED, quality: 100)
        }
      }
    }
  `);
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const paginationRef = React.useRef(null);

  return (
    <header id="arch-slider" className="slider arch-slider">
      <div className="swiper-container parallax-slider">
        {!load ? (
          <Swiper
            speed={1000}
            parallax={true}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            pagination={{
              clickable: true,
              el: paginationRef.current,
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
                <div className="bg-img valign slideImg teamImg" style={bgImageStyles}>
                  <GatsbyImage
                    image={getImage(data.teamImage.childImageSharp.gatsbyImageData)}
                    alt="Team Image"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                  <div
                    className="overlay"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      background: "rgba(0, 0, 0, 0.6)",
                    }}
                  ></div>
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-6 slideTextBG">
                        <div className="caption mt-30">
                          <h1 className="">Our Clients Are Our Priority</h1>
                          <p>
                            Our firm motto says it all. We listen. We care. We help. We aim to
                            improve the lives and well-being of each and every client that
                            walks through our door.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide key="2" className="swiper-slide">
                <div className="bg-img valign slideImg" style={bgImageStyles}>
                  <GatsbyImage
                    image={getImage(data.monaImage.childImageSharp.gatsbyImageData)}
                    alt="Team Image"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                  <div
                    className="overlay"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      background: "rgba(0, 0, 0, 0.6)",
                    }}
                  ></div>
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-6 slideTextBG">
                        <div className="caption mt-30">
                        <h1 className="">Mona Lisa Wallace</h1>
                        <p>
                          Mona Lisa founded our firm in 1981, and has been working tirelessly ever since in her fight for fairness and justice.  She has received numerous awards and acknowledgements for her successful representation of thousands of injured and harmed employees and consumers nationwide.
                        </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide key="3" className="swiper-slide">
                <div className="bg-img valign slideImg" style={bgImageStyles}>
                  <GatsbyImage
                    image={getImage(data.billImage.childImageSharp.gatsbyImageData)}
                    alt="Team Image"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                  <div
                    className="overlay"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      background: "rgba(0, 0, 0, 0.6)",
                    }}
                  ></div>
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-6 slideTextBG">
                        <div className="caption mt-30">
                          <h1 className="">Bill Graham</h1>
                          <p>
                            Bill uses his compassion and decades of legal experience to help individuals
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide key="4" className="swiper-slide">
                <div className="bg-img valign slideImg" style={bgImageStyles}>
                  <GatsbyImage
                    image={getImage(data.whitImage.childImageSharp.gatsbyImageData)}
                    alt="Team Image"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                  <div
                    className="overlay"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      background: "rgba(0, 0, 0, 0.6)",
                    }}
                  ></div>
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-6 slideTextBG">
                        <div className="caption mt-30">
                          <h1 className="">We Love What We Do</h1>
                          <p>
                            We find joy in investigating legal harms and to potentially helping another deserving client.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
          </Swiper>
        ) : null}
        <div className="setting">
          <div className="controls">
            <div
              ref={navigationNextRef}
              className="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer"
            >
              <i className="ion-chevron-right"></i>
            </div>
            <div
              ref={navigationPrevRef}
              className="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer"
            >
              <i className="ion-chevron-left"></i>
            </div>
          </div>
          <div ref={paginationRef} className="swiper-pagination"></div>
        </div>
      </div>
    </header>
  );
};

export default Intro5;