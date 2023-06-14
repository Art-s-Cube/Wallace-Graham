import React from "react";
import LightTheme from "layouts/Light";
import Navbar from "components/Navbar/navbar";
import IntroWithSlider from "components/Intro-with-slider/intro-with-slider";
import AboutUs from "components/About-us/about-us";
import PracticeArea from "components/Practice-Area/PracticeArea";
import VideoWithTestimonials from "components/Video-with-testimonials/video-with-testimonials";
import appData from 'data/app.json'
import CallToAction from "components/Call-to-action/call-to-action";
import Footer from "components/Footer/footer";



const Homepage1 = () => {
  const fixedSlider = React.useRef(null);
  const MainContent = React.useRef(null);
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    setInterval(() => {
      if (fixedSlider.current) {
        var slidHeight = fixedSlider.current.offsetHeight;
      }
      if (MainContent.current) {
        MainContent.current.style.marginTop = slidHeight + "px";
      }
      
    }, 10);
    
    var navbar = navbarRef.current,
      logo = logoRef.current;

    if (window.scrollY > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }

    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        navbar.classList.add("nav-scroll");
        logo.setAttribute("src", appData.darkLogo);
      } else {
        navbar.classList.remove("nav-scroll");
        logo.setAttribute("src", appData.lightLogo);
      }
    });

  }, [fixedSlider, MainContent, navbarRef]);

  return (
    <LightTheme>
      <>
        <Navbar nr={navbarRef} lr={logoRef} />
        <IntroWithSlider sliderRef={fixedSlider} />
        <div ref={MainContent} className="main-content">
          <AboutUs />
          <PracticeArea />
          <VideoWithTestimonials />
          <CallToAction />
          <Footer />
        </div>
      </>
    </LightTheme>
  );
};

export const Head = () => {
  return (
    <>
      <title>Wallace & Graham</title>
    </>
  )
}

export default Homepage1;
