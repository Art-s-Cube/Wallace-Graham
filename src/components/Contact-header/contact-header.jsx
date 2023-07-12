import React, { useEffect } from "react";

const ContactHeader = ({ sliderRef }) => {
  useEffect(() => {
    setTimeout(() => {
      document.querySelector('#particles-js canvas')?.style.removeProperty('position');
    }, 0);
  }, []);


  return (
    <section id="contact" className="about-ar section-padding pb-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9 col-md-11">
            <div className="capt">
              <div className="text-center">
                <h1 className="mb-10 fw-700">
                  How Can We Help You?
                </h1>
                <p>Get your free case review. All Fields Required.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHeader;
