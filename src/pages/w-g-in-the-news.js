import React from "react";
import { graphql } from "gatsby";
import LightTheme from "layouts/Light";
import Navbar from "components/Navbar/navbar";
import BlogGrid from "components/Blog-grid/blog-grid.jsx";
import PageHeader from "components/Page-header/page-header";
import Footer from 'components/Footer/footer'

const BlogGridLight = ({ data }) => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  // Extract the news data from the data object
  const news = data.allContentfulNews.nodes;

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
        title="Our News."
        paragraph="All the most current news and events of our creative team."
        className="section-padding"
      />
      <BlogGrid news={news} />
      <Footer />
    </LightTheme>
  );
};

export const Head = () => {
  return (
    <>
      <title>Wallace & Graph in the News</title>
    </>
  )
}

export default BlogGridLight;
export const query = graphql`
  query {
    allContentfulNews(sort: {date: DESC}) {
    nodes {
      author
      body {
        raw
      }
      date
      id
      image {
        file {
          url
        }
      }
      headline
    }
  }
}`
