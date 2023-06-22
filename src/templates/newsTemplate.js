import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import LightTheme from "layouts/Light";
import Navbar from "components/Navbar/navbar";
import PageHeader from "components/Page-header/page-header";
import Footer from "components/Footer/footer";

const NewsTemplate = ({ pageContext }) => {
  const { headline, body, imageUrl, date, author, source } = pageContext;
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    const navbar = navbarRef.current;

    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navbarRef]);

  const richTextContent = JSON.parse(body);

  return (
    <LightTheme>
      <title>{headline} | Wallace & Graham</title>
      <Navbar nr={navbarRef} lr={logoRef} theme="themeL" />
      <div className="blogTitle">
        <PageHeader title={headline} paragraph="" />
      </div>
      <section className="blog-pg single section-padding pt-0">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-11">
              <div className="post">
                <div className="col-lg-12">
                  <div className="img">
                  <img src={imageUrl} alt={headline} />
                  </div>
                  <div className="info">
                    <span className="date">
                      {new Date(date).toLocaleDateString()}
                    </span>
                    <span className="authorName">
                      {author}
                    </span>
                    <span className="source">
                      {source}
                    </span>
                  </div>
                </div>
                <div className="content pt-30">
                  <div className="row justify-content-center">
                    <div className="col-lg-12">
                      {documentToReactComponents(richTextContent)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </LightTheme>
  );
};

export default NewsTemplate;
