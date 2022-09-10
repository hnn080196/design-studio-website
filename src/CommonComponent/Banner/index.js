import React from "react";
import Background from "assets/images/layout/banner.jpg";
const Banner = (props) => {
  return (
    <div
    className="box__banner"
      style={{ backgroundImage: `url(${Background})`, backgroundSize: "cover" }}
    >
      <div className="container">
        <h1>{props.title}</h1>
      </div>
    </div>
  );
};
export default Banner;
