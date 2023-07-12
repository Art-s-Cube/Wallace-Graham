import React, { useState } from "react";
import { Client } from "@hubspot/api-client";
const hubspotClient = new Client({ accessToken: 'pat-na1-3fd5ddba-67b6-45b1-9d3b-7fdb6da028b5' });

const ContactForm = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [practice_area, setPractice] = useState('');

  const properties = {
    "firstname": firstname,
    "lastname": lastname,
    "phone": phone,
    "practice_area": practice_area,
    "email": email
  };
  const SimplePublicObjectInput = { properties };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const apiResponse = await hubspotClient.crm.contacts.basicApi.create(SimplePublicObjectInput);
      console.log(JSON.stringify(apiResponse.body, null, 2));
    } catch (e) {
      e.message === 'HTTP request failed'
        ? console.error(JSON.stringify(e.response, null, 2))
        : console.error(e)
    }
  }

  return (
    <section className="contact section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="form md-mb50">
              <h4 className="fw-700 mb-50">Get In Touch.</h4>
              <form method="post" action="https://forms.hubspot.com/uploads/form/v2/6171170/dab5a857-6623-4f10-a9d4-f35bccdcd070" id="hs-form-dab5a857-6623-4f10-a9d4-f35bccdcd070-a9375e18-1ce7-41c6-bcd7-a371e0add1db" className="contactForm mailchimp-one__mc-form mc-form" data-instance-id="a9375e18-1ce7-41c6-bcd7-a371e0add1db" data-form-id="dab5a857-6623-4f10-a9d4-f35bccdcd070" data-portal-id="6171170" lang="en" data-hs-cf-bound="true">
                <div className="hs-form__field hs-form__field-firstname hs-firstname">
                  <input id="firstname-input" className="formInput" type="text" placeholder='First Name' name="firstname" required="" autoComplete="given-name" inputMode="text" aria-invalid="false" aria-labelledby="firstname-label" aria-describedby="firstname-description" aria-required="true" value={firstname} onChange={e => setFirstname(e.target.value)}/>
                </div>
                <div className="hs-form__field hs-form__field-lastname hs-lastname">
                  <input id="lastname-input" className="formInput" type="text" placeholder='Last Name' name="lastname" required="" autoComplete="family-name" inputMode="text" aria-invalid="false" aria-labelledby="lastname-label" aria-describedby="lastname-description" aria-required="true" value={lastname} onChange={e => setLastname(e.target.value)}/>
                </div>
                <div className="hs-form__field hs-form__field-email hs-email">
                  <input id="email-input" className="formInput" type="email" name="email" placeholder='Email' required="" autoComplete="email" inputMode="email" aria-invalid="false" aria-labelledby="email-label" aria-describedby="email-description" aria-required="true" value={email} onChange={e => setEmail(e.target.value)}/>
                </div>
                <div className="hs-form__field__phone">
                  <input id="phone-input" className="hs-formInput" type="tel" placeholder='Phone Number' name="phone" autoComplete="tel" inputMode="tel" aria-invalid="false" aria-labelledby="phone-label" aria-describedby="phone-description" aria-required="true" value={phone} onChange={e => setPhone(e.target.value)}/>
                </div>
                <div className="hs-form__field hs-form__field-practice_area hs-practice_area">
                  <label id="practice_area-label" for="practice_area-input" className="hs-form__field__label" data-required="false">
                    <span>What can we help you with?</span>
                  </label>
                  <select id="practice_area-input" className="hs-form__field__input is-placeholder" name="practice_area" aria-invalid="false" aria-labelledby="practice_area-label" aria-describedby="practice_area-description" value={practice_area} onChange={e => setPractice(e.target.value)} aria-required="false">
                    <option label="What can we help you with?" disabled="" value="">What can we help you with?</option>
                    <option label="Personal Injury" value="Personal Injury">Personal Injury</option>
                    <option label="Social Security Disability" value="Social Security Disability">Social Security Disability</option>
                    <option label="Mesothelioma &amp; Asbestos" value="Mesothelioma &amp; Asbestos">Mesothelioma &amp; Asbestos</option>
                    <option label="Chemical Related Cancers" value="Chemical Related Cancers">Chemical Related Cancers</option>
                    <option label="Wage &amp; Hour Discrimination" value="Wage &amp; Hour Discrimination">Wage &amp; Hour Discrimination</option>
                    <option label="Farm Nuisances" value="Farm Nuisances">Farm Nuisances</option>
                    <option label="Class Action &amp; Consumer Rights" value="Class Action &amp; Consumer Rights">Class Action &amp; Consumer Rights</option>
                    <option label="Employment Benefits &amp; Insurance" value="Employment Benefits &amp; Insurance">Employment Benefits &amp; Insurance</option>
                    <option label="Wills &amp; Estates" value="Wills &amp; Estates">Wills &amp; Estates</option>
                    <option label="Nursing Home Abuse &amp; Neglect" value="Nursing Home Abuse &amp; Neglect">Nursing Home Abuse &amp; Neglect</option>
                    <option label="FELA &amp; Your Rights" value="FELA &amp; Your Rights">FELA &amp; Your Rights</option>
                  </select>
                </div>
                <div className="hs-form__actions">
                  <button type="submit" name="Submit" className="hs-form__actions__submit butn bord">Submit</button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1">
            <div className="cont-info">
              <h4 className="fw-700 mb-50">Contact Info.</h4>
              <h3 className="wow" data-splitting>
                Contact Info
              </h3>
              <div className="item mb-40">
                <h5>
                  <a href="tel:704.633.5244">704.633.5244</a>
                </h5>
                <h5>
                  <a href="tel:800.849.5291">800.849.5291</a></h5>
              </div>
              <h3 className="wow" data-splitting>
                Visit Us.
              </h3>
              <div className="item">
                <h6>
                525 N Main St, Salisbury, NC 28144
                  <br />
                  Mon-Fri 8am- 5pm / Phones are open 24/7
                </h6>
              </div>
              <div className="social mt-50">
                <a href="#0" className="icon">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#0" className="icon">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#0" className="icon">
                  <i className="fab fa-pinterest"></i>
                </a>
                <a href="#0" className="icon">
                  <i className="fab fa-behance"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
