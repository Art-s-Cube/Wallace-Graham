import React from "react";
import { graphql } from "gatsby";
import { BLOCKS } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import Navbar from "components/Navbar/navbar";
import LightTheme from 'layouts/Light'
import CallToAction from "components/Call-to-action/call-to-action";
import Footer from "components/Footer/footer";

const PracticeAreaTemplate = ({ data }) => {
  const { contentfulPracticeArea } = data;
  const { title, text, image } = contentfulPracticeArea;
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    var navbar = navbarRef.current;

    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }

    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [navbarRef]);

  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (_, children) => <p>{children}</p>,
    },
  };

  return (
    <LightTheme>
        <Navbar nr={navbarRef} lr={logoRef} theme="themeL" />
        <header className="pages-header circle-bg valign">
            <div className="img practiceImage">
                <div className="row justify-content-center practiceTitle">
                    <h1 className="color-white fw-700">
                        {title}
                    </h1>
                </div>
                <img src={image.url} alt={title} />
            </div>
            
        </header>
        <section className="pt-60 pb-60">
            <div className="container">
                <div className="row practiceArea">
                    {renderRichText(text, options)}
                </div>
            </div>
        </section>
        <CallToAction />
        <Footer />
    </LightTheme>
  );
};

export const query = graphql`
  query PracticeAreaQuery($title: String!) {
    contentfulPracticeArea(title: { eq: $title }) {
      title
      text {
        raw
      }
      image {
        url
        }
    }
  }
`;

export default PracticeAreaTemplate;
