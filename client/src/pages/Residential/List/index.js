import axios from "axios";
import Enums from "config/enums";
import { withRouter } from "hook/withRouter";
import React, { Component, Fragment } from "react";
import { Outlet } from "react-router-dom";
import View from "./view";
export class Residential extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: []
    };
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
  componentDidMount() {
    let { list } = this.state;
    axios.get("/public/project?type=0").then(({ data }) => {
      list = data.data;
      this.setState({ list });
    });
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
