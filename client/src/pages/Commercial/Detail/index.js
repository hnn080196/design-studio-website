import SliderCommon from "component/Slider";
import Enums from "config/enums";
import { withRouter } from "hook/withRouter";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
// import { getAllProject } from "store/action/project";

const CommercialDetail = (props) => {
  const [item, setItem] = useState(undefined);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { projectsPublic } = useSelector((state) => state.project);
  const { id } = useParams();
  // useEffect(() => {
  //   dispatch(getAllProject());
  // }, []);

  useEffect(() => {
    const item = projectsPublic.find((data) => data.id === Number(id).valueOf());
    setItem(item);
  }, [projectsPublic]);
  const handleRedirectToProject = (step) => {
    try {
      const currentIndex = projectsPublic.findIndex((dataItem) => dataItem.id === Number(id).valueOf());
      let nextIndex = currentIndex + step;
      if (nextIndex >= projectsPublic.length || nextIndex < 0) {
        nextIndex = projectsPublic.length - Math.abs(nextIndex);
      }
      navigate(`${Enums.PATH.COMMERCIAL._}/${projectsPublic[nextIndex].id}`, { replace: true });
      setItem(projectsPublic[nextIndex]);
    } catch (e) {
      console.error(e.message);
    }
  };
  return <SliderCommon data={item} handleRedirectToProject={handleRedirectToProject} />;
};

export default withRouter(CommercialDetail);
