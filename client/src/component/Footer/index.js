import React from "react";
import * as Icon from "react-bootstrap-icons";
import { FacebookIcon, InstagramIcon, BehanceIcon } from "../../layout/PublicLayout/social";
const Footer = (props) => {
  return (
    <div className="footer-wrap">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-12 col-xs-12 footer__item">
            <div className="footer-logo">
              <img
                src="https://x11studio.vn/uploads/2020/04/01/picture/79234de8f17394065fcae7e95102d9a4_12e4f187ae5955070c4822.jpg"
                alt=""
              />
            </div>
            <p>KIẾN TRÚC SƯ </p>
            <div className="social">
              <a href="https://www.facebook.com/x11designstudio/" target={"_blank"} rel="noreferrer">
                <FacebookIcon />
              </a>
              <a href="https://www.instagram.com/tuananhtran2801/" target={"_blank"} rel="noreferrer">
                <InstagramIcon />
              </a>
              <a href="https://www.behance.net/tuananhnd22fdc" target={"_blank"} rel="noreferrer">
                <BehanceIcon />
              </a>
            </div>
          </div>
          <div className="col-md-4 col-sm-4 col-xs-12 footer__item">
            <h3>Contact Info</h3>
            <div className="footer-address">
              <Icon.GeoAltFill style={{ marginRight: "12px" }} />
              <span>Số 04, Đường Quang Trung, Hà Đông, Hà Nội</span>
            </div>
            <div className="call-us">
              <Icon.TelephoneFill style={{ marginRight: "12px" }} />
              <span>0849992882</span>
            </div>
            <div className="call-us">
              <Icon.EnvelopeOpenFill style={{ marginRight: "12px" }} />
              <span>x11studiovn@gmail.com</span>
            </div>
          </div>
          <div className="col-md-4 col-sm-4 col-xs-12 footer__item">
            <h3>Fanpage</h3>
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fx11designstudio%2F&tabs=timeline&width=340&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
              width={340}
              height={130}
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              frameBorder={0}
              title="footer"
              // allowFullScreen="false"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            />
          </div>
        </div>
        <div className="footer__line"></div>
        <div className="footerWrp">
          <div className="copyright">© 2020 x11studio.vn | All Rights Reserved</div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
