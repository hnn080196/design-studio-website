import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { data } from "pages/data";
const View = (props) => {
  const { handleRedirect } = props;
  return (
    <section className="residential">
      <Container fluid>
        <div className="residential__gallery">
          {data.map((item, index) => (
            <div className="residential__gallery--item" key={index}>
              <img src={item.image} />
              <div className="caption">{item.description}</div>
            </div>
          ))}
        </div>
        {/* <Row style={{ padding: "15px" }}>
          {data.map((item, index) => (
            <Col xs={3} key={index} style={{ marginBottom: "24px" }}>
              <Card className="imageCard">
                <div
                  className="imageCard__wrapper"
                  onClick={() => {
                    handleRedirect(item.id);
                  }}
                >
                  <Card.Img
                    // variant="top"
                    src={item.image}
                    className="imageCard-img"
                    // style={{ verticalAlign: "center", width: "100%" }}
                  />
                  <div className="imageCard__wrapper--hover">
                    <p>{item.description}</p>
                  </div>
                </div>
                <Card.Body>
                  <Card.Title>
                    <h3>{item.projectName}</h3>
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row> */}
      </Container>
    </section>
  );
};

export default View;
