import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { data } from "pages/data";
const View = (props) => {
  const { handleRedirect, list } = props;

  return (
    <section className="residential">
      <div className="residential__gallery">
        {list?.map((item, index) => (
          <div className="residential__gallery--item" key={index} onClick={(e) => handleRedirect(item.id)}>
            {/* <img src={item.image} /> */}
            <div className="caption">
              <h4 className="caption__title">{item.title}</h4>
              <span className="caption__subTitle">{item.subTitle}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default View;
