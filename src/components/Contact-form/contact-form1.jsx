import React, { useState } from "react";
import ContactFromDate from "data/sections/form-info.json";
import { Client } from "@hubspot/api-client";
const hubspotClient = new Client({ accessToken: 'pat-na1-94393d8e-496f-4de0-ada8-9503f72344aa' });

const ContactForm = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');

  const properties = {
    "firstname": {firstname},
    "lastname": {lastname},
    "phone": {phone},
    "website": {website},
    "email": {email},
    "message": {message}
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
              <h4 className="fw-700 color-font mb-50">Get In Touch.</h4>
              <form onSubmit={handleSubmit} className="contactForm mailchimp-one__mc-form mc-form">
                <div className="hs-form__field hs-form__field-firstname hs-firstname">
                  <input id="firstname-input" className="formInput" type="text" placeholder='First Name' name="firstname" required="" autoComplete="given-name" inputMode="text" aria-invalid="false" aria-labelledby="firstname-label" aria-describedby="firstname-description" aria-required="true" value={firstname} onChange={e => setFirstname(e.target.value)}/>
                </div>
                <div className="hs-form__field hs-form__field-lastname hs-lastname">
                  <input id="lastname-input" className="formInput" type="text" placeholder='Last Name' name="lastname" required="" autoComplete="family-name" inputMode="text" aria-invalid="false" aria-labelledby="lastname-label" aria-describedby="lastname-description" aria-required="true" value={lastname} onChange={e => setLastname(e.target.value)}/>
                </div>
                <div className="hs-form__field hs-form__field-email hs-email">
                  <input id="email-input" className="formInput" type="email" name="email" placeholder='Email' required="" autoComplete="email" inputMode="email" aria-invalid="false" aria-labelledby="email-label" aria-describedby="email-description" aria-required="true" value={email} onChange={e => setEmail(e.target.value)}/>
                </div>
                <div className="hs-form__field hs-form__field-website hs-website">
                  <input id="website-input" className="formInput" type="text" name="website" placeholder='Website' required="" autoComplete="website" inputMode="text" aria-invalid="false" aria-labelledby="website-label" aria-describedby="website-description" aria-required="true" value={website} onChange={e => setWebsite(e.target.value)}/>
                </div>
                <div className="hs-form__field__phone">
                  <input id="phone-input" className="hs-formInput" type="tel" placeholder='Phone Number' name="phone" autoComplete="tel" inputMode="tel" aria-invalid="false" aria-labelledby="phone-label" aria-describedby="phone-description" aria-required="true" value={phone} onChange={e => setPhone(e.target.value)}/>
                </div>
                <div className="hs-form__field hs-form__field-message hs-message">
                  <textarea id="message-input" className="formInput" name="message" aria-invalid="false" placeholder='Message' aria-labelledby="message-label" aria-describedby="message-description" aria-required="false" value={message} onChange={e => setMessage(e.target.value)}></textarea>
                </div>
                <div className="hs-form__actions">
                  <button type="submit" name="Submit" className="hs-form__actions__submit">Submit</button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1">
            <div className="cont-info">
              <h4 className="fw-700 color-font mb-50">Contact Info.</h4>
              <h3 className="wow" data-splitting>
                {ContactFromDate.title}
              </h3>
              <div className="item mb-40">
                <h5>
                  <a href="#0">{ContactFromDate.email}</a>
                </h5>
                <h5>{ContactFromDate.phone}</h5>
              </div>
              <h3 className="wow" data-splitting>
                Visit Us.
              </h3>
              <div className="item">
                <h6>
                  {ContactFromDate.location.first}
                  <br />
                  {ContactFromDate.location.second}
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
