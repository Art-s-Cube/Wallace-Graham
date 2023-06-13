import React from "react";
import { graphql } from "gatsby";
import LightTheme from "layouts/Light";
import Navbar from "components/Navbar/navbar";
import BlogListed from "components/Blog-list/blog-list";
import PageHeader from "components/Page-header/page-header";
import Footer from "components/Footer/footer";

const BlogListLight = ({ data }) => {
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

  const blogs = data.allContentfulBlog.nodes;

  return (
    <LightTheme>
      <div className="circle-bg">
        <div className="circle-color fixed">
          <div className="gradient-circle"></div>
          <div className="gradient-circle two"></div>
        </div>
      </div>
      <Navbar nr={navbarRef} lr={logoRef} theme="themeL" />
      <PageHeader
        className="sub-bg"
        title="W&G Law Blog"
        paragraph=""
      />
      <BlogListed blogs={blogs} />
      <Footer />
    </LightTheme>
  );
};

export const query = graphql`
  query {
    allContentfulBlog {
      nodes {
        title
        image {
          file {
            url
          }
        }
        content {
          raw
        }
        publishDate
      }
    }
  }
`;

export const Head = () => {
  return (
    <>
      <title>W&G Blog</title>
    </>
  )
}

export default BlogListLight;
