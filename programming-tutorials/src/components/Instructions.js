import React, { Component } from "react";

class Instructions extends Component {
  render() {
    const { number } = this.props;
    if (number) {
      return <ol>{this.props.children}</ol>;
    } else {
      return <ul>{this.props.children}</ul>;
    }
  }
}

export { Instructions };
