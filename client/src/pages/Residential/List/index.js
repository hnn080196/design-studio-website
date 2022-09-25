import React, { useEffect } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { data } from "pages/data";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllResidentProject } from "store/action/project";
import Enums from "config/enums";
import Loading from "component/Loading";

const View = (props) => {
  // const { handleRedirect } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { residentialProjectsPublic } = useSelector((state) => state.project);
  const { loading } = useSelector((state) => state.loading);

  useEffect(() => {
    dispatch(getAllResidentProject());
  }, []);

  const handleRedirect = (item) => {
    try {
      navigate(`${Enums.PATH.RESIDENTIAL._}/${item.id}`);
    } catch (e) {
      console.error("Commercial execute handleRedirect error", e.message);
    }
  };

  if (loading) return <Loading />;
  return (
    <section className="residential">
      <Container fluid>
        <Row style={{ padding: "15px" }}>
          {residentialProjectsPublic.map((item, index) => (
            <Col sm={12} md={4} xl={3} key={index} style={{ marginBottom: "24px" }}>
              <Card className="imageCard">
                <div
                  className="imageCard__wrapper"
                  onClick={() => {
                    handleRedirect(item);
                  }}
                >
                  <Card.Img src={JSON.parse(item.images)[0]} className="imageCard-img" />
                  <div className="imageCard__wrapper--hover">
                    <p className="imageCard__wrapper--subTitle">{item.subTitle}</p>
                  </div>
                </div>
                <Card.Body>
                  <Card.Title>
                    <h3>{item.title}</h3>
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
