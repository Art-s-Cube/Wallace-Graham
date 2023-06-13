import React from "react";
import attorneysData from "data/sections/attorneys.json";

const Team4 = () => {
  return (
    <section className="team section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head text-center">
              <h6 className="wow fadeIn" data-wow-delay=".5s">
                Our Attorneys
              </h6>
              <h3 className="wow">
                Here to help you.
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          {attorneysData.map((attorney) => (
            <div key={attorney.id} className="col-lg-3 col-md-6">
              <div className="item cir">
                <div className="img">
                  <img src={attorney.image} alt={attorney.name} />
                  <div id={`circle${attorney.id}`}>
                      <g>
                        <text fill="#fff">
                          <textPath xlinkHref={`#circlePath${attorney.id}`}>
                            {attorney.description}
                          </textPath>
                        </text>
                      </g>
                  </div>
                  <div className="info">
                    <h6>{attorney.name}</h6>
                    <span>{attorney.position}</span>
                    <span>{attorney.email}</span>
                    <span>(704) 633-4244 ext.{attorney.extension}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team4;
