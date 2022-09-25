import Banner from "component/Banner";
import Footer from "component/Footer";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { data } from "./data";
const Team = (props) => {
  return (
    <>
      <Banner title="Our Team" />
      <div className="container-fluid" style={{ marginBottom: "5rem" }}>
        <div className="team-wrap">
          <Row>
            {data.map((item, id) => (
              <Col xl={2} lg={3} sm={4} xs={6} key={id} className="box__item">
                <div className="teamImg">
                  <img src={item.image} alt="" />
                  <div className="info">
                    <p>{item.description}</p>
                  </div>
                </div>
                <div className="teamInfo">
                  <h3>{item.name}</h3>
                  <div className="designation">{item.job}</div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Team;
