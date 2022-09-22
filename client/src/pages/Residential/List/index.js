import Enums from "config/enums";
import { withRouter } from "hook/withRouter";
import React, { Component, Fragment } from "react";
import { Outlet } from "react-router-dom";
import View from "./view";
export class Residential extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.handleRedirect = this.handleRedirect.bind(this);
  }
  handleRedirect(id) {
    try {
      const { router } = this.props;

      router.navigate(`${Enums.PATH.RESIDENTIAL._}/${id}`);
    } catch (e) {
      console.error("Commercial execute handleRedirect error", e.message);
    }
  }
  render() {
    return (
      <Fragment>
        <View handleRedirect={this.handleRedirect} />;
      </Fragment>
    );
  }
}

export default withRouter(Residential);
