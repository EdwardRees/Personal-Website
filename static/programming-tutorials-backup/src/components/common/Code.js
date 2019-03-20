import React, { Component } from "react";

class Code extends Component {
  render() {
    return <code style={{height: 100}}>{this.props.children}</code>;
  }
}

export { Code };
