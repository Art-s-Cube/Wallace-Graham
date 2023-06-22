import React from "react";
import Navbar from "components/Navbar/navbar";
import CallToAction from "components/Call-to-action/call-to-action";
import Footer from "components/Footer/footer";
import AboutIntro from "components/About-intro";
import LightTheme from 'layouts/Light'

const About = () => {
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

  return (
    <LightTheme>
      <Navbar nr={navbarRef} lr={logoRef} theme="themeL" />
        <section className="section-padding">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7 col-md-9">
                <div className="cont text-center">
                  <h1 className="mb-10">About Us</h1>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </section>
      <AboutIntro />
      <CallToAction />
      <Footer />
    </LightTheme>
  );
};

export const Head = () => {
  return (
    <>
      <title>About Wallace & Graham</title>
    </>
  )
}

export default About;
