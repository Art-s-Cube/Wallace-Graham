import React from "react";
const Logo = "/img/Wallace-Graham-logo-blackBG.svg";
const Footer = ({ hideBGCOLOR }) => {
  return (
    <footer className={`${!hideBGCOLOR ? "sub-bg" : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Contact Us</h5>
              </div>
              <ul>
                <li>
                  <span className="icon pe-7s-map-marker"></span>
                  <div className="cont">
                    <h6>Officeal Address</h6>
                    <p>525 N. Main St., Salisbury NC, 28144</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-call"></span>
                  <div className="cont">
                    <h6>Call Us</h6>
                    <p>800.849.5291</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-call"></span>
                  <div className="cont">
                    <h6>Call Us</h6>
                    <p>704.633.5244</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            
          </div>
          <div className="col-lg-4">
            <div className="item">
              <div className="logo">
              <img src={Logo} alt="Wallace & Graham" width={250} height={40} />
              </div>
              <div className="copy-right">
                <p>
                Copyright Wallace & Graham © 2023. All Rights Reserved.
                  
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
