import React from "react";
import Navbar from "components/Navbar/navbar";
import Team4 from "components/Team4/team4";
import CallToAction from "components/Call-to-action/call-to-action";
import Footer from "components/Footer/footer";
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
      <Team4 style="4item" />
      <CallToAction />
      <Footer />
    </LightTheme>
  );
};

export const Head = () => {
  return (
    <>
      <title>Attorneys | Wallace & Graham</title>
    </>
  )
}

export default About;
