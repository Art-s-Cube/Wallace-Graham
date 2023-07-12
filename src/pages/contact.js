import React from "react";
import Navbar from "components/Navbar/navbar";
import Footer from "components/Footer/footer";
import ContactHeader from "components/Contact-header/contact-header";
import ContactForm1 from "components/Contact-form/contact-form1";
import LightTheme from "layouts/Light";

const Contact = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    document.querySelector("body").classList.add("contact-page");

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

    return () => {
      document.querySelector("body").classList.remove("contact-page");
    };
  }, [navbarRef]);

  return (
    <LightTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      <ContactHeader />
      <div className="main-content">
        <ContactForm1 />
        <div className="map" id="ieatmaps">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2092.984640643201!2d-80.46318704964443!3d35.67080833691029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8853f2d76aed7e21%3A0x54ed455f2526e231!2sWallace%20%26%20Graham%2C%20P.A.!5e0!3m2!1sen!2sus!4v1689095209568!5m2!1sen!2sus"
            loading="lazy"
          ></iframe>
        </div>
        <Footer hideBGCOLOR />
      </div>
    </LightTheme>
  );
};

export const Head = () => {
  return (
    <>
      <title>Contact Us for Expert Legal Representation | Wallace & Graham</title>
    </>
  )
}

export default Contact;
