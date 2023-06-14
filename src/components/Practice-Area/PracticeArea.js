import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image"
const PracticeArea = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allContentfulPracticeArea(sort: { fields: title, order: ASC }) {
        nodes {
          title
          text {
            raw
          }
          image {
            url
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
            <h6 className="wow fadeIn" data-wow-delay=".5s">
            PRACTICE AREAS
            </h6>
            <h3 className="wow mb-20">How We Can Help You</h3>
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
                            <img src={node.image.url} alt={node.image.title} width={236} height={83} />
                        )}
                     </div>
                        <a
                          href="#0"
                          className="link words chars splitting fz-12"
                          data-splitting
                        >
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