import { withRouter } from "hook/withRouter";
import React, { Component } from "react";
import View from "./view";

class PublicLayout extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.handleRedirect = this.handleRedirect.bind(this);
  }
  handleRedirect(route) {
    try {
      const { router } = this.props;
      router.navigate(route);
    } catch (e) {
      console.error("PublicLayout executes handleRedirect error", e.message);
    }
  }
  render() {
    const { children } = this.props;
    return <View handleRedirect={this.handleRedirect}>{children}</View>;
  }
}

export default withRouter(PublicLayout);
