import React from 'react'
import Split from '../Split'
import { Link } from 'gatsby'

const CallToAction = () => {
    return (
      <section className="call-action section-padding sub-bg bg-img">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-lg-9">
              <div className="content sm-mb30">
                <Split>
                  <h6 className="fw-300 text-u ls10 mb-10 fz-25">
                    Request   a
                  </h6>
                  <h7 className="wow words chars splitting h2Style" data-splitting>
                    Free <br/><b className="back-color">Consultation</b>
                  </h7>
                </Split>
              </div>
            </div>

            <div className="col-md-4 col-lg-3 valign">
              <Link
                to={`/contact/contact-dark`}
                className="butn bord curve"
              >
                <span>Get In Touch</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
}

export default CallToAction