import React from "react";
import * as Icon from "react-bootstrap-icons";

const Footer = (props) => {
  return (
    <div className="footer-wrap">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-12 col-xs-12 footer__item">
            <div className="footer-logo">
              <a href>
                <img
                  src="https://x11studio.vn/uploads/2020/04/01/picture/79234de8f17394065fcae7e95102d9a4_12e4f187ae5955070c4822.jpg"
                  alt=""
                />
              </a>
            </div>
            <p>KIẾN TRÚC SƯ</p>
            <div className="social">
              <a href>
                <Icon.Facebook />
              </a>
              <a href>
                <Icon.Twitter />
              </a>
              <a href>
                <Icon.Google />
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
              <a href="tel:0849992882">0849992882</a>
            </div>
          </div>
          <div className="col-md-4 col-sm-4 col-xs-12 footer__item">
            <h3>Fanpage</h3>
            <div
              className="fb-page fb_iframe_widget"
              data-href="https://www.facebook.com/X11DesignStudio/"
              data-tabs
              data-width
              data-height
              data-small-header="false"
              data-adapt-container-width="true"
              data-hide-cover="false"
              data-show-facepile="true"
              fb-xfbml-state="rendered"
              fb-iframe-plugin-query="adapt_container_width=true&app_id=1883779138304798&container_width=360&hide_cover=false&href=https%3A%2F%2Fwww.facebook.com%2FX11DesignStudio%2F&locale=vi_VN&sdk=joey&show_facepile=true&small_header=false&tabs=&width="
            >
              <span
                style={{ verticalAlign: "bottom", width: 0, height: 0 }}
              ></span>
            </div>
          </div>
        </div>
        <div className="footer__line"></div>
        <div className="footerWrp">
          <div className="copyright">
            © 2020 x11studio.vn | All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
