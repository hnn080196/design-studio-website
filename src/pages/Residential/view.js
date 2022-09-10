import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { data } from "pages/data";
const View = () => {
  return (
    <section className="residential">
      <Container fluid>
        <Row style={{}}>
          {data.map((item, index) => (
            <Col xs={3} key={index} style={{ marginBottom: "24px" }}>
              <Card className="imageCard">
                <div>
                  <Card.Img
                    // variant="top"
                    src={item.image}
                    className="imageCard-img"
                    // style={{ verticalAlign: "center", width: "100%" }}
                  />
                </div>

                {/* <img src > */}

                <Card.Body>
                  <Card.Title>
                    <h3>{item.projectName}</h3>
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default View;
