import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { data } from "./data";
function ArrowDisplayNone(props) {
  return <div></div>;
}
const SliderCommon = (props) => {
  let settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
    autoplay: false,
    speed: 1000,
    centerMode: true,
    centerPadding: "60px",
    nextArrow: <ArrowDisplayNone />,
    prevArrow: <ArrowDisplayNone />,
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
          slidesToShow: 2,
          slidesToScroll: 2,
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
    <Slider {...settings}>
      {data.image.map((item, index) => (
        <div key={index} style={{ width: "866px !important" }}>
          <img src={item} style={{ width: "100%", height: "auto" }} />
        </div>
      ))}
    </Slider>
  );
};

export default SliderCommon;
