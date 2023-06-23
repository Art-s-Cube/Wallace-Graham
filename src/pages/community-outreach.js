import React from "react";
import Navbar from "components/Navbar/navbar";
import CallToAction from "components/Call-to-action/call-to-action";
import Footer from "components/Footer/footer";
import AboutUs6 from "components/About-gives";
import MinimalArea from "components/Minimal-Area/minimal-area";
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
      <AboutUs6 />
      <MinimalArea />
      <CallToAction />
      <Footer />
    </LightTheme>
  );
};

export const Head = () => {
  return (
    <>
      <title>W&G Gives</title>
    </>
  )
}

export default About;
