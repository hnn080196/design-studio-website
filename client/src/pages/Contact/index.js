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
              <a href="mailto:x11studiovn@gmail.com">x11studiovn@gmail.com</a> or call us at 0849992882.
            </p>
            <p>
              Visit us at Facebook{" "}
              <a href="https://www.facebook.com/X11DesignStudio/">https://www.facebook.com/X11DesignStudio/</a>,
              Instagram or Behance to connect with us so that you can be updated with our latest news and works.
            </p>
            <p>Join us</p>
            <p>We look forward to your talent and passion.</p>
            <p>
              Send your resume and portfolio (maximum 10MB) to{" "}
              <a href="mailto:x11studiovn@gmail.com">x11studiovn@gmail.com</a>
            </p>
          </div>
        </div>
        <section className="xs-contact-infomation xs-contact-info-1">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-4">
                <div className="contact-info-group">
                  <a href="https://goo.gl/maps/FswNFDmvHK6cgdFj8">
                    <Icon.GeoAltFill className="contact__icon" />
                    <h4>Address</h4>
                    <span>Số 04, Đường Quang Trung, Hà Đông, Hà Nội</span>{" "}
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="contact-info-group">
                  <Icon.EnvelopeOpenFill className="contact__icon" />
                  <h4>Mail us</h4>
                  <span>x11studiovn@gmail.com</span>{" "}
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="contact-info-group">
                  <Icon.TelephoneFill className="contact__icon" />
                  <h4>Call us</h4>
                  <span>0849992882</span>
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
