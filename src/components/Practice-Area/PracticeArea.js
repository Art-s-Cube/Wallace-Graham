import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const PracticeArea = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allContentfulPracticeArea(sort: {title: ASC}) {
        nodes {
          title
          text {
            raw
          }
          image {
            gatsbyImageData(width: 236, height: 83, placeholder: BLURRED)
            title
          }
        }
      }
    }
  `);

  return (
    <section className="clients section-padding bg-gray">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 valign md-mb50">
            <div className="sec-head mb-0">
              <h4 className="fw-300 text-u ls10 mb-10 fz-18">
                PRACTICE AREAS
              </h4>
              <h5 className="fw-600 text-u ls1 mb-30 fz-40">How We Can Help You</h5>
              <p className="fw-400">
                Our firm practices a wide array of injury, disease, death, consumer, and environmental tort claims. We investigate the wrongful conduct of companies and the insurance industry. We aim to help our clients in any way possible. Please call to see if we can help.
              </p>
            </div>
          </div>
          <div className="col-lg-8">
            <div>
              <div className="row bord">
                {data.allContentfulPracticeArea.nodes.map((node) => (
                  <div className="col-md-4 col-6 mb-20">
                    <div key={node.title}>
                      {node.image && (
                        <GatsbyImage image={getImage(node.image)} alt={node.title} />
                      )}
                    </div>
                    <a href="#0" className="link fz-12" >
                      {node.title}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticeArea;
