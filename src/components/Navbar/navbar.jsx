import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import appData from "data/app.json";
import { handleDropdown, handleMobileDropdown } from "common/navbar";


const Navbar = ({ lr, nr, theme }) => {
  const data = useStaticQuery(graphql`
  query NavbarQuery {
    allContentfulPracticeArea(sort: { fields: title, order: ASC }) {
      nodes {
        title
      }
    }
  }
`);
  return (
    <nav
      ref={nr}
      className={`navbar navbar-expand-lg change ${
        theme === "themeL" ? "light" : ""
      }`}
    >
      <div className="container">
        <Link to="/" className="logo">
          {theme ? (
            theme === "themeL" ? (
              <img ref={lr} src={appData.darkLogo} alt="Wallace & Graham" />
            ) : (
              <img ref={lr} src={appData.lightLogo} alt="Wallace & Graham" />
            )
          ) : (
            <img ref={lr} src={appData.lightLogo} alt="Wallace & Graham" />
          )}
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={handleMobileDropdown}
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
          <li className="nav-item">
              <Link to={`/`} className="nav-link">
                Home
              </Link>
            </li>

            <li className="nav-item dropdown" onClick={handleDropdown}>
              <span
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                About
              </span>
              <div className="dropdown-menu">
                <Link to={`/about-us/`} className="dropdown-item">
                  About us
                </Link>
                <Link to={`/team/`} className="dropdown-item">
                  Our Team
                </Link>
                <Link to={`/attorneys/`} className="dropdown-item">
                  Attorneys
                </Link>
                <Link to={`/testimonials/`} className="dropdown-item">
                  Testimonials
                </Link>
              </div>
            </li>
            <li className="nav-item dropdown" onClick={handleDropdown}>
              <span
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Practice Areas
              </span>
              <div className="dropdown-menu">
              {data.allContentfulPracticeArea.nodes.map((node) => {
                const slug = node.title.replace(/\s+/g, '-').toLowerCase();

                return (
                  <Link key={slug} to={`/practice-areas/${slug}`} className="dropdown-item">
                    {node.title}
                  </Link>
                );
              })}
              </div>
            </li>
            <li className="nav-item">
              <Link to={`/w-g-in-the-news/`} className="nav-link">
                News
              </Link>
            </li>
            <li className="nav-item">
              <Link to={`/community-outreach/`} className="nav-link">
                W & G Gives
              </Link>
            </li>
            <li className="nav-item">
              <Link to={`/blog/`} className="nav-link">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link to={`/contact/contact-dark`} className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
