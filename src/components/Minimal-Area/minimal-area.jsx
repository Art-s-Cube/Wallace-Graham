import React from "react";
import cardMouseEffect from "common/cardMouseEffect";

const MinimalArea = () => {
  React.useEffect(() => {
    cardMouseEffect(document.querySelectorAll(".feat .items"));
    
  }, []);

  return (
    <section className="min-area sub-bg pt-40 pb-40">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="img">
              <img
                className="thumparallax-down"
                src="/img/WGg1.jpg"
                alt=""
              />
              <img
                className="thumparallax-down"
                src="/img/WGg2.jpg"
                alt=""
              />
              <img
                className="thumparallax-down"
                src="/img/WGg3.jpg"
                alt=""
              />
              <img
                className="thumparallax-down"
                src="/img/WGg4.jpg"
                alt=""
              />
              <img
                className="thumparallax-down"
                src="/img/WGg5.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="content pt-0">
              <h4 className="wow color-font">Our 2021-2022 initiatives and projects</h4>
              <p className="wow txt">
                Our creative Ad agency is ranked among the finest in the US. We
                cultivate smart ideas for start-ups and seasoned players.
              </p>
              <ul className="feat">
                <li className="wow fadeInUp">
                  <h6>
                    <span>1</span> Relay for Life of Rowan County *Primary sponsor* | 9/17/22| Cause: Access to health care/Cancer prevention.
                  </h6>
                  <p>
                  Cancer prevention is a top priority of our firm. We were honored to donate $5,000 to the Relay for Life and American Cancer Society to be used for cancer prevention services in Rowan County. Our heart goes out to every life touched by cancer.
                  </p>
                </li>
                <li className="wow fadeInUp">
                  <h6>
                    <span>2</span> Mental Health Counseling for Veterans: | Cause: Veteran services/Mental Health.
                  </h6>
                  <p>
                  Partnered with Rowan County United Way and One Love to initiate a new program to expand mental health services available to veterans in Rowan County, regardless of military discharge status or access to funding. The program brings *combat veteran to combat veteran* mental health counseling to Rowan County. The Salisbury Post featured our donation here. The success stories associated with this new program are remarkable, thanks to One Love’s combat veteran mental health counselor, James. We extremely proud to have initiated this program.
                  </p>
                </li>
                <li className="wow fadeInUp">
                  <h6>
                    <span>3</span> PowerCross | Cause: Education/Children/Poverty:
                  </h6>
                  <p>
                  PowerCross’s remarkable program supports underprivileged young men with after school meals, athletics coaching and academic tutoring with pick-up and delivery from school to home. PowerCross has provided over 9,000 hours of academic support, served over 250,000 hot meals, and has a 100% high school graduation rate for young men who are a part of the program for at least 2 years, with 70% progressing to college or vocational training.
                  </p>
                </li>
                <li className="wow fadeInUp">
                  <h6>
                    <span>4</span> W&G Family Crisis Council | Survivor bags | Cause: abused women and children.
                  </h6>
                  <p>
                  W&G Gives packed 30 survivor buckets full of essentials for adult and children who have suffered mental or physical abuse plus a donation of $3,000.00 to fight abuse in our community. The Salisbury Post featured our donation here.                  
                  </p>
                </li>
                <li className="wow fadeInUp">
                  <h6>
                    <span>5</span> W&G Gives “Overcoming Adversity” Scholarship Program | Cause: Education.
                  </h6>
                  <p>
                  W&G Gives awarded 5 scholarships to Rowan County high school seniors who have “overcome adversity.” We presented at each of our winner’s high school graduation ceremonies. Reading the applications was an incredibly humbling experience. It is an honor to support these strong survivors of abuse, disability, misfortune, and exceptional hardship.                  
                  </p>
                </li>
                <li className="wow fadeInUp">
                  <h6>
                    <span>6</span> Special Olympics | Sponsor | Cause: To benefit disabled.
                  </h6>
                  <p>
                  Supported Sheriff Kevin Auten’s initiative to raise money for Special Olympics competition in spring/summer games.
                  </p>
                </li>
                <li className="wow fadeInUp">
                  <h6>
                    <span>7</span> Pedal Factory *Sponsor* | Event to support the Earn-A-Bike program. | April 30, 2022 | Cause: Transportation/Low-Income.
                  </h6>
                  <p>
                  Pedal Factory’s mission allows any individual the opportunity to earn a bike in exchange for volunteer services. Watch video here. Learn more about event and nonprofit here: https://www.thepedalfactory.org/.
                  </p>
                </li>
                <li className="wow fadeInUp">
                  <h6>
                    <span>8</span> Happy Roots’ Earth Day Jam *Sponsor* | Saturday, May 14. 2022 at Belltower Green. Cause: Support local farmers, environment, education in school system and nursing homes for sustainability/horticulture programs.
                  </h6>
                  <p>
                  Happy Roots enjoyed a successful first annual festival at the new downtown park, BellTower Green. Our firm served 600 patrons with free water and lemonade and gave away over 250 sustainable W&G Gives cups and 100 Earth-day themed stress balls. To learn more about the incredible work of Happy Roots, visit https://www.happyrootsnc.org/earth-day-jam-2022.
                  </p>
                </li>
                <li className="wow fadeInUp">
                  <h6>
                    <span>9</span> Walk Like MADD Charlotte *Sponsor* | June 4, 2022 |11-1 | Cause: Support victims of drunk drivers.
                  </h6>
                  <p>
                  Our firm has handled hundreds of personal injury and death claims on behalf of individuals harmed by drunk drivers. W&G sponsored this event and had firm participants walk to remember those we have lost and to inspire other to join the fight and commit to a future with no more victims of impaired driving. Proceeds provide: emotional support and assistance with medical and legal struggles that follow drunk driving crash; work with state legislators to adopt tougher laws for DUI offenders and close loopholes. To learn more visit, https://www.madd.org/north-carolina/event/walk-like-madd-charlotte-metro-2021/
                  </p>
                </li>
                <li className="wow fadeInUp">
                  <h6>
                    <span>10</span> Overton Scholars Luncheon | May 2022 | Cause Education/ Children.
                  </h6>
                  <p>
                  Donated to support a luncheon in honor of Overton Elementary 5th grade students who excelled academically. Of the 50 scholars, 42 were from low-income families. We congratulate these young men and women on their excellent grades and achievements.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row mt-40">
          <div className="col-lg-12">
            <p>To learn more about Wallace & Graham Gives, or how your organization or cause may be considered in our annual giving efforts, please email wwallace@wallacegraham.com.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinimalArea;
