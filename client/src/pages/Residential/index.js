import Enums from "config/enums";
import { withRouter } from "hook/withRouter";
import React, { Component, Fragment } from "react";
import { Outlet } from "react-router-dom";
export class Residential extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <Outlet />
      </Fragment>
    );
  }
}

export default withRouter(Residential);
