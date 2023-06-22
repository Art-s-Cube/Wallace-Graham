import React from "react";
import initIsotope from "common/initIsotope";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import LightTheme from "layouts/Light";
import Navbar from "components/Navbar/navbar";
import Footer from "components/Footer/footer";

const AttorneyTemplate = ({ pageContext }) => {
  const { name, about, education, affiliations, appointments, cases, charities, honors, practiceAreas, email, extension, imageUrl} = pageContext;
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);
  React.useEffect(() => {
    setTimeout(() => {
      initIsotope();
    }, 1000);
  }, []);
  React.useEffect(() => {
    const navbar = navbarRef.current;

    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navbarRef]);
  const aboutSection = about ? JSON.parse(about) : null;
  const eduSection = education ? JSON.parse(education) : null;
  const affiliationSection = affiliations ? JSON.parse(affiliations) : null;
  const appointmentSection = appointments ? JSON.parse(appointments) : null;
  const casesSection = cases ? JSON.parse(cases) : null;
  const charitySection = charities ? JSON.parse(charities) : null;
  const honorsSection = honors ? JSON.parse(honors) : null;
  const practiceSection = practiceAreas;



  return (
    <LightTheme>
      <title>{name} | Wallace & Graham</title>
      <Navbar nr={navbarRef} lr={logoRef} theme="themeL" />
      <section className="min-area section-padding pb-0">
        <div className="container">
            <div className="row">
            <div className="col-lg-6">
                <div className="img attornImage">
                <img
                    className="thumparallax-down"
                    src={imageUrl} alt={name}
                />
                </div>
            </div>
            <div className="col-lg-6 valign">
                <div className="content">
                    <h1 className="fz-50">{name}</h1>
                    <p><strong>Email:</strong> {email}</p>
                    <p><strong>Phone Number:</strong> 704-633-5244 ext. {extension}</p>
                    <div>
                        <h2 className="fz-30">Practice Areas</h2>
                        <ul>
                        {practiceSection && practiceSection.map((area, index) => (<li key={index}>{area}</li>))}
                        </ul>
                    </div>
                
                <br />
                </div>
            </div>
            </div>
        </div>
      </section>
      <section className="portfolio-frl section-padding pt-0">
        <div className="container">
          <div className="row">
          <div className="filtering col-12">
            <div className="filter wow fadeIn" data-wow-delay=".5s">
              <span data-filter=".about" className="active">About</span>
              {eduSection && (<><span data-filter=".education">Education</span></>)}
              {honorsSection && (<><span data-filter=".honors">Honors & Awards</span></>)}
              {casesSection && (<><span data-filter=".cases">Cases</span></>)}
              {charitySection && (<><span data-filter=".charity">Charitable Foundations</span></>)}
              {affiliationSection && (<><span data-filter=".affiliations">Professional Affiliations</span></>)}
              {appointmentSection && (<><span data-filter=".appointments">Professional Appointments</span></>)}
            </div>
          </div>
          <div className="gallery full-width">
            <div className="col-md-12 items about">
              <div className="item-img">
                <div className="cont">
                  <h2>About</h2>
                    {documentToReactComponents(aboutSection)}
                </div>
              </div>
            </div>
            {eduSection && (<><div className="col-md-12 items education">
                <div className="item-img">
                    <div className="cont">
                    <h2>Education</h2>
                    {documentToReactComponents(eduSection)}
                    </div>
                </div>
            </div></>)}
            {honorsSection && (<>
            <div className="col-md-12 items honors">
                <div className="item-img">
                    <div className="cont">
                    <h2>Honors & Awards</h2>
                        {documentToReactComponents(honorsSection)}
                    </div>
                </div>
            </div>
            </>)}
            {affiliationSection && (
                <>
                <div className="col-md-12 items affiliations">
                    <div className="item-img">
                        <div className="cont">
                        <h2>Professional Affiliations</h2>
                        {documentToReactComponents(affiliationSection)}
                        </div>
                    </div>
                </div>
                </>
            )}
            {appointmentSection && (
                <>
                <div className="col-md-12 items appointments">
                    <div className="item-img">
                        <div className="cont">
                        <h2>Professional Appointments</h2>
                        {documentToReactComponents(appointmentSection)}
                        </div>
                    </div>
                </div>
                </>
            )}
            {casesSection && (
                <>
                <div className="col-md-12 items cases">
                    <div className="item-img">
                        <div className="cont">
                        <h2>Cases</h2>
                        {documentToReactComponents(casesSection)}
                        </div>
                    </div>
                </div>
                </>
            )}
            {charitySection && (
                <>
                <div className="col-md-12 items cases">
                    <div className="item-img">
                        <div className="cont">
                        <h2>Charitable Foundations</h2>
                        {documentToReactComponents(charitySection)}
                        </div>
                    </div>
                </div>
                </>
            )}

          </div>
        </div>
        </div>
      </section>
      <Footer />
    </LightTheme>
  );
};

export default AttorneyTemplate;
