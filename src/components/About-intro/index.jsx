import React from "react";
import Split from "../Split";
import AboutInfo1Data from "data/sections/about-info1.json";

const AboutIntro = () => {
  return (
    <section className="intro-section section-padding pb-40">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="htit sm-mb30">
              <h4>{AboutInfo1Data.title}</h4>
            </div>
          </div>
          <div className="col-lg-8 offset-lg-1 col-md-8">
            <div className="text">
              <Split>
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
              </Split>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
