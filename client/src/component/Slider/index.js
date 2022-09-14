import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { data } from "./data";
import { Col, Container, Row } from "react-bootstrap";

function PrevArrow(props) {
  const { onClick } = props;
  return <div className="custom-slider__prev" onClick={onClick}></div>;
}
function NextArrow(props) {
  const { onClick } = props;
  return <div className="custom-slider__next" onClick={onClick}></div>;
}

const SliderCommon = (props) => {
  const [showDescription, setShowDescription] = useState(false);
  const handleToggle = () => {
    setShowDescription(!showDescription);
  };
  let settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
    autoplay: true,
    speed: 2000,
    centerMode: true,
    centerPadding: "60px",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    adaptiveHeight: true,
    variableWidth: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: "60px"
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "60px"
        }
      },
      {
        breakpoint: 414,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "60px"
        }
      }
    ]
  };
  return (
    <div className="custom-slider">
      <Slider {...settings}>
        {data.image.map((item, index) => (
          <div key={index} className="custom-slider__item" style={{ width: "70vw" }}>
            <img src={item} className="custom-slider__img" />
            <div className="custom-slider__brightness"></div>
          </div>
        ))}
      </Slider>
      <div
        className={`custom-slider__description ${
          showDescription ? "custom-slider__description--show" : "custom-slider__description--hide"
        }`}
      >
        <Container style={{ padding: "30px" }}>
          <Row className="custom-slider__toolbar">
            <Col>
              <h1>Đà Nẵng House</h1>
              <span>Residential</span>
            </Col>
            <Col className="custom-slider__toolbar--right">
              <div className="custom-slider__toolbar--icons">
                <i className="fa fa-angle-double-left" />
                {showDescription ? (
                  <i className="fa fa-angle-down" onClick={() => handleToggle()} />
                ) : (
                  <i className="fa fa-angle-up" onClick={() => handleToggle()} />
                )}

                <i className="fa fa-angle-double-right" />
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia assumenda ipsam placeat veniam possimus et
              nisi consequatur nam saepe.
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default SliderCommon;
