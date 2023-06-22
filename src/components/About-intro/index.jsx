import React from "react";
import featuresData from "data/sections/features.json";
import AboutInfo1Data from "data/sections/about-info1.json";

const AboutIntro = ({ style, lines }) => {
  return (
    <section className={`services bords section-padding bggrey ${
      style === "4item" ? "lficon" : lines ? "" : "pt-0"
    }`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4">
            <div className="htit sm-mb30">
              <h4>{AboutInfo1Data.title}</h4>
            </div>
          
          {style === "4item"
            ? featuresData.map((feature) => (
                <div
                  key={feature.id}
                  className="wow fadeInLeft"
                  data-wow-delay={`${
                    feature.id === 1
                      ? ".5"
                      : feature.id === 2
                      ? ".7"
                      : feature.id === 3
                      ? ".9"
                      : "1.1"
                  }s`}
                >
                  <div className="item-box">
                    <div>
                      <span className={`icon ${feature.icon}`}></span>
                    </div>
                    <div className="cont">
                      <h6>{feature.title}</h6>
                      <p>{feature.content}</p>
                    </div>
                  </div>
                </div>
              ))
            : // max item 3 in Home page
              featuresData.slice(0, 3).map((feature) => (
                <div
                  key={feature.id}
                  className="wow fadeInLeft "
                  data-wow-delay=".01s"
                >
                  <div className="item-box md-mb50 bgwhite">
                    <span className={`imagebox`}><img src={feature.icon} alt={feature.title}/></span>
                    <h6>{feature.title}</h6>
                    <p>{feature.content}</p>
                  </div>
                </div>
              ))}
              </div>
          <div className="col-lg-8  col-md-8 pt-60">
            <div className="text">
              <div>
                <p className="" >
                  {AboutInfo1Data.paragraph1}
                </p>
                <p className="">
                  {AboutInfo1Data.paragraph2}
                </p>
                <p className="">
                  {AboutInfo1Data.paragraph3}
                </p>
                <p className="">
                  {AboutInfo1Data.paragraph4}
                </p>
                <p className="">
                  {AboutInfo1Data.paragraph5}
                </p>
                <p className="">
                  {AboutInfo1Data.paragraph6}
                </p>
                <p className="">
                  {AboutInfo1Data.paragraph7}
                </p>
                <p className="">
                  {AboutInfo1Data.paragraph8}
                </p>
                <p className="disclaimer">
                  {AboutInfo1Data.paragraph9}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
