import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
const AdminComponent = (props) => {
  return (
    <Fragment>
      <Outlet />
    </Fragment>
  );
};

export default AdminComponent;
