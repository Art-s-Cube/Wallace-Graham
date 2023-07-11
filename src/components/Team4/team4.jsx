import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

const Team4 = () => {
  const data = useStaticQuery(graphql`
    query AttorneyListQuery {
      allContentfulAttorneys(sort: {order: ASC}) {
        nodes {
          about {
            raw
          }
          email
          image {
            resize(format: WEBP, width: 353) {
              src
            }
          }
          name
        }
      }
    }
  `);

  const attorneysData = data.allContentfulAttorneys.nodes;

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
          {attorneysData.map((attorney) => {
            const cleanedName = attorney.name ? attorney.name.replace(/\?&/g, "") : "";
            const slug = cleanedName.replace(/\s+/g, "-").toLowerCase();
            
            return (
              <div key={slug} className="col-lg-3 col-md-6 mb-10">
                <Link to={`/attorneys/${slug}`}>
                  <div className="item cir">
                    <div className="img attorneyListImg">
                      <img src={attorney.image.resize.src} alt={attorney.name} width="360" height="392" />
                      <div className="info">
                        <h6>{attorney.name}</h6>
                        <p className="text-extra-light-gray">{attorney.email}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export const Head = () => {
  return (
    <>
      <title>Our Attorneys | Wallace & Graham</title>
    </>
  )
}
export default Team4;