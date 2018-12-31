import React, { Component } from "react";

class Code extends Component {
  render() {
    return <code style={{height: 100, backgroundColor: rgba(0,0,0,0.5)}}>{this.props.children}</code>;
  }
}

export { Code };
