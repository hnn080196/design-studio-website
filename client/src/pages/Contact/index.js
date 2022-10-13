import Banner from "component/Banner";
import React from "react";
import * as Icon from "react-bootstrap-icons";

const Contact = (props) => {
  return (
    <>
      <Banner title="Contact Us" />
      <div className="container contact-wrap">
        <div className="title-box  text-left pt-4" style={{ paddingTop: 30 }}>
          <div className="text-left">
            <p>
              Engage us We’d love to hear from you. Enquiries, feedback or simply for a chat. Email to{" "}
              <a href="mailto:sosastudiovn@gmail.com">sosastudiovn@gmail.com</a> or call us at 0962944204.
            </p>
            <p>
              Visit us at Facebook{" "}
              <a href="https://www.facebook.com/Sound.Of.Space.Architecture" target={"_blank"}>
                https://www.facebook.com/Sound.Of.Space.Architecture
              </a>
              , Instagram or Behance to connect with us so that you can be updated with our latest news and works.
            </p>
            <p>Join us</p>
            <p>We look forward to your talent and passion.</p>
            <p>
              Send your resume and portfolio (maximum 10MB) to{" "}
              <a href="mailto:sosastudiovn@gmail.com">sosastudiovn@gmail.com</a>
            </p>
          </div>
        </div>
        <section className="xs-contact-infomation xs-contact-info-1">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-4">
                <div className="contact-info-group">
                  <a href="https://goo.gl/maps/WJzmBiC2fGqfMDPo8" target={"_blank"}>
                    <Icon.GeoAltFill className="contact__icon" />
                    <h4>Address</h4>
                    <span>466/41, Lê Văn Sỹ, Phường 14, Quận 3, TP HỒ CHÍ MINH</span>{" "}
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="contact-info-group">
                  <Icon.EnvelopeOpenFill className="contact__icon" />
                  <h4>Mail us</h4>
                  <span>sosastudiovn@gmail.com</span>{" "}
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="contact-info-group">
                  <Icon.TelephoneFill className="contact__icon" />
                  <h4>Call us</h4>
                  <span>0962944204</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
