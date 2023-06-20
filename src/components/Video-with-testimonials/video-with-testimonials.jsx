import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const VideoWithTestimonials = () => {
  const [isOpen, setOpen] = React.useState(false);

  React.useEffect(() => {
    console.clear();
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const data = useStaticQuery(graphql`
    query {
      teamImage: file(relativePath: {eq: "img/team.jpg"}) {
        childImageSharp {
          gatsbyImageData(width: 1920, placeholder: BLURRED, quality: 100)
        }
      }
    }
  `);

  return (
    <section className="block-sec">
      <div
        className="background bg-img pt-100 pb-0 parallaxie"
        data-overlay-dark="5"
      >
        <GatsbyImage
          image={getImage(data.teamImage.childImageSharp.gatsbyImageData)}
          alt="Team Image"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            zIndex: -1,
          }}
        />
        <div className="container"> 
          <div className="row"> 
            <div className="col-lg-6"> 
              <div className="vid-area"> 
                <span className="text">Watch Video</span> 
                <div className="vid-icon"> {typeof window !== "undefined" && ( <ModalVideo channel="youtube" isOpen={isOpen} videoId="vy7XSay3wlg" onClose={() => setOpen(false)} /> )} 
                  <a className="vid" onClick={(e) => { e.preventDefault(); setOpen(true); }} > 
                    <div className="vid-butn"> 
                      <span className="icon"> <i className="fas fa-play"></i> </span> 
                    </div> 
                  </a> 
                </div> 
              </div> 
            </div> 
            <div className="col-lg-5 offset-lg-1"> 
              <div className="testim-box"> 
                <div className="head-box"> 
                  <h6> Our Clients </h6> 
                  <h4> What Client&apos;s Say? </h4> 
                </div> 
                <Slider {...settings} className="slic-item" > 
                  <div className="item"> 
                  <p> Whitney and Megan are without question the most professional and polite people I have ever met. They explained every step of the process and made me feel very comfortable. I felt complete trust in their guidance and wisdom. This was an extreme life changing event for my life. I feel honored to have them beside me as I enter a new chapeter in my life. I hope I never need this service again and will suggest them to anyone in need. I would consider them friends! </p> 
                  <div className="info"> 
                    <div className="cont"> 
                      <div className="author"> 
                        <h7 className="author-name ">Lawrence</h7> 
                      </div> 
                    </div>
                  </div> 
                </div> 
                <div className="item"> 
                  <p> I had a great experience with the group. Both Meagan and Whitney have done a great job. Very happy they took my case and helped us get through everything over the last 5 years. Great job to everyone! </p> 
                  <div className="info"> 
                    <div className="cont"> 
                      <div className="author"> 
                        <h7 className="author-name ">Greg</h7> 
                      </div> 
                    </div> 
                  </div> 
                </div> 
                <div className="item"> 
                  <p> I would like to thank you so much for doing all you are doing for me. I wish my husband was here with me. I miss him so much. He is my rock and solemate forever. He would thank you too! </p> 
                    <div className="info"> 
                      <div className="cont"> 
                        <div className="author"> 
                          <h7 className="author-name ">Barbara</h7> 
                        </div> 
                      </div> 
                    </div> 
                  </div> 
                </Slider> 
              </div> 
            </div> 
          </div> 
        </div> 
      </div> 
    </section>
  ); }; 
  export default VideoWithTestimonials;