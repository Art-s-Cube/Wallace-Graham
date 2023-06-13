import React from "react";
import teamsData from "data/sections/teams.json";

const Team2 = () => {
  return (
    <section className="team section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head text-center">
              <h6 className="wow fadeIn" data-wow-delay=".5s">
                Our Team
              </h6>
              <h3 className="wow">
                An original team of creators designers &amp; dreamers.
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          {teamsData.map((team) => (
            <div key={team.id} className="col-lg-3 col-md-6">
              <div className="item cir">
                <div className="img">
                  <img src={team.image} alt={team.name} />
                  <div id={`circle${team.id}`}>
                      <g>
                        <text fill="#fff">
                          <textPath xlinkHref={`#circlePath${team.id}`}>
                            {team.description}
                          </textPath>
                        </text>
                      </g>
                  </div>
                  <div className="info">
                    <h6>{team.name}</h6>
                    <span>{team.position}</span>
                    <span>{team.email}</span>
                    <span>(704) 633-4244 ext.{team.extension}</span>
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

export default Team2;
