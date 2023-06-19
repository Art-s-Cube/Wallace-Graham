import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const AboutUs = () => {
  const data = useStaticQuery(graphql`
  query {
    aboutImage: file(relativePath: {eq: "img/feat.jpg"}) {
      childImageSharp {
        gatsbyImageData(quality: 90, width: 500, height: 580)
      }
    }
  }
`);

  return (
    <section className="about-us section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 valign md-mb50">
            <div className="mb-50">
              <h2 className="fw-300 text-u ls10 mb-10 fz-18">
              Why Choose Wallace & Graham
              </h2>
              <h3 className="fw-600 text-u ls1 mb-30 fz-40">
              About Us
              </h3>
              <p className="fw-400">
              Our firm continues to operate and thrive under the leadership of Attorney Partners Mona Lisa Wallace, Bill Graham, and Whitney Wallace Williams. Together, they have built a firm of seasoned and dedicated attorneys, paralegals, and legal professionals who share their high standard of excellence and perseverance on behalf of their clients. Our team has the passion, skills, and resources to handle the most complex cases. Our Clients Are Our Priority has been our mission since Day One. Our firm culture is focused on listening to our clients, caring about our clients, and developing legal strategies to advance their legal rights. We aim to lessen the burdens and improve the outlook for our clients as much as possible after a devastating life setback. We are known as one of the hardest-working law firms for harmed and injured persons and their families. We are driven to overcome obstacles blocking our clients' access to justice. We pride ourselves on thinking outside the box. And we are not afraid to go up against some of the largest corporate actors in the world.
                </p>
              <Link to="/about-us/" className="butn bord curve mt-30">
                <span>Read More About Us</span>
              </Link>
            </div>
          </div>
          <div className="col-lg-7 img">
          <GatsbyImage
              image={getImage(data.aboutImage)}
              alt="About Us"
              width={500}
              height={580}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;