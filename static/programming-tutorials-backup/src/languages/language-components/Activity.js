import React, { Component } from "react";
import { Instructions } from "../../components";

class Activity extends Component {
  render() {
    const { task } = this.props;
    return (
      <div>
        <span style={{}}>Task: {task}</span>
        <br/>
        <span>Instructions:</span>
        <Instructions number>{this.props.children}</Instructions>
      </div>
    );
  }
}

export { Activity };
