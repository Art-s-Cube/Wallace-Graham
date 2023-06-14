import React from "react";
import { graphql } from "gatsby";
import IntroWithSlider from "components/Intro-with-slider/intro-with-slider";
import LightTheme from "layouts/Light";
import Navbar from "components/Navbar/navbar";
import AboutUs from "components/About-us/about-us";
import PracticeArea from "components/Practice-Area/PracticeArea";
import VideoWithTestimonials from "components/Video-with-testimonials/video-with-testimonials";
import CallToAction from "components/Call-to-action/call-to-action";
import Footer from "components/Footer/footer";
import { getImage } from "gatsby-plugin-image";

const Homepage1 = ({ data }) => {
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

  const teamImageData = getImage(data.teamImage);
  const monaImageData = getImage(data.monaImage);
  const billImageData = getImage(data.billImage);
  const whitImageData = getImage(data.whitImage);

  return (
    <LightTheme>
      <>
        <Navbar nr={navbarRef} lr={logoRef} />
        <IntroWithSlider
          sliderRef={fixedSlider}
          teamImage={teamImageData}
          monaImage={monaImageData}
          billImage={billImageData}
          whitImage={whitImageData}
        />
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
  );
};

export const query = graphql`
  query {
    teamImage: file(relativePath: { eq: "img/slid/team.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    monaImage: file(relativePath: { eq: "img/slid/mona.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    billImage: file(relativePath: { eq: "img/slid/bill.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    whitImage: file(relativePath: { eq: "img/slid/whit.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;

export default Homepage1;
