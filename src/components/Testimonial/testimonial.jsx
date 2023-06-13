import React, { useEffect, useState } from "react";
import testimonialsData from "data/sections/testimonials.json";
import SwiperCore, { Pagination, Parallax } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

SwiperCore.use([Pagination, Parallax]);

const Testimonials = () => {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
  }, [load]);

  return (
    <section className="app-testim section-padding bg-gray">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 col-md-10">
            <div className="s-head text-center mb-80">
              <h6 className="stit mb-30">
                <span className="left"></span> Clients Feedback
                <span className="right"></span>
              </h6>
              <h2>Valuable Clients Feedback About Our Services</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
          {testimonialsData.map((testimonial) => (
            <div key={testimonial.id} className="col-lg-6 col-md-6 testimonial">
                  <div className="info">
                    <p>{testimonial.quote}</p>
                    <h6>{testimonial.name}</h6>
                  </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
