import React from "react";
import Navbar from "components/Navbar/navbar";
import Testimonial from "components/Testimonial/testimonial";
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
      <Testimonial />
      <CallToAction />
      <Footer />
    </LightTheme>
  );
};

export const Head = () => {
  return (
    <>
      <title>Testimonials | Wallace & Graham</title>
    </>
  )
}

export default About;
