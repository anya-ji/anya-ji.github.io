import React, { Component } from "react";
import About from "./About";
import Others from "./Others";
import Projects from "./Projects";
import Research from "./Research";

class Content extends Component {
  render() {
    if (this.props.content === 0) {
      return <About />;
    } else if (this.props.content === 1) {
      return <Research />;
    } else if (this.props.content === 2) {
      return <Projects />;
    } else if (this.props.content === 3) {
      return <Others />;
    } else {
      return <></>;
    }
  }
}

export default Content;
