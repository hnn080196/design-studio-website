import SliderCommon from "component/Slider";
import { withRouter } from "hook/withRouter";
import React from "react";

const CommercialDetail = (props) => {
  return (
    <section>
      <SliderCommon />
    </section>
  );
};

export default withRouter(CommercialDetail);
