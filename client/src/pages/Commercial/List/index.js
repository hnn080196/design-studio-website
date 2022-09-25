import React, { useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Enums from "config/enums";
import { getAllProject } from "store/action/project";
import Loading from "component/Loading";

const View = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { projectsPublic } = useSelector((state) => state.project);
  const { loading } = useSelector((state) => state.loading);

  useEffect(() => {
    dispatch(getAllProject());
  }, []);

  const handleRedirect = (item) => {
    try {
      navigate(`${Enums.PATH.COMMERCIAL._}/${item.id}`, { state: item });
    } catch (e) {
      console.error("Commercial execute handleRedirect error", e.message);
    }
  };
  if (loading) return <Loading />;

  return (
    <section className="commercial">
      <div className="commercial__gallery">
        {projectsPublic?.map((item, index) => (
          <div className="commercial__gallery--item" key={index} onClick={(e) => handleRedirect(item)}>
            <img src={JSON.parse(item.images)[0]} />
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
