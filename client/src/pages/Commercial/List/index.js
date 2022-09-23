import axios from "axios";
import Enums from "config/enums";
import { withRouter } from "hook/withRouter";
import React, { Component } from "react";
import View from "./view";
export class Commercial extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: []
    };
    this.handleRedirect = this.handleRedirect.bind(this);
  }
  componentDidMount() {
    let { list } = this.state;
    axios.get("/public/project?type=1").then(({ data }) => {
      list = data.data;
      this.setState({ list });
    });
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
    const { list } = this.state;
    return <View list={list} handleRedirect={this.handleRedirect} />;
  }
}

export default withRouter(Commercial);
