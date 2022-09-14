import Enums from "config/enums";
import { withRouter } from "hook/withRouter";
import React, { Component } from "react";
import View from "./view";
export class Commercial extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.handleRedirect = this.handleRedirect.bind(this);
  }
  handleRedirect(id) {
    try {
      const { router } = this.props;
      router.navigate(`${Enums.PATH.COMMERCIAL._}/${id}`);
    } catch (e) {
      console.error("Commercial execute handleRedirect error", e.message);
    }
  }
  render() {
    return <View handleRedirect={this.handleRedirect} />;
  }
}

export default withRouter(Commercial);
