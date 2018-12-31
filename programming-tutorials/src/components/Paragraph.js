import React, { Component } from "react";
class Paragraph extends Component {
  render() {
    return (
      <div>
        <p style={{ textIndent: "40px" }}>{this.props.children}</p>
      </div>
    );
  }
}

export { Paragraph };
