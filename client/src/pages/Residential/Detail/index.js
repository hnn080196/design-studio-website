import SliderCommon from "component/Slider";
import Enums from "config/enums";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const ResidentialDetail = (props) => {
  const [item, setItem] = useState(undefined);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { residentialProjectsPublic } = useSelector((state) => state.project);
  const { id } = useParams();

  useEffect(() => {
    const item = residentialProjectsPublic.find((data) => data.id === Number(id).valueOf());
    setItem(item);
  }, [residentialProjectsPublic]);
  const handleRedirectToProject = (step) => {
    try {
      const currentIndex = residentialProjectsPublic.findIndex((dataItem) => dataItem.id === Number(id).valueOf());
      let nextIndex = currentIndex + step;
      if (nextIndex >= residentialProjectsPublic.length || nextIndex < 0) {
        nextIndex = residentialProjectsPublic.length - Math.abs(nextIndex);
      }
      navigate(`${Enums.PATH.RESIDENTIAL._}/${residentialProjectsPublic[nextIndex].id}`, { replace: true });
      setItem(residentialProjectsPublic[nextIndex]);
    } catch (e) {
      console.error(e.message);
    }
  };
  return <SliderCommon data={item} handleRedirectToProject={handleRedirectToProject} />;
};

export default ResidentialDetail;
