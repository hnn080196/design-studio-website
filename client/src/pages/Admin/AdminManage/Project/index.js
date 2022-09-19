import React, { Fragment } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import ListProject from "./List";
import CreateProject from "./Create";
import UpdateProject from "./Update";
import { withRouter } from "hook/withRouter";
const ProjectComponent = (props) => {
  const { router } = props;
  return (
    <Fragment>
      <Outlet />
    </Fragment>
  );
};

export default withRouter(ProjectComponent);
