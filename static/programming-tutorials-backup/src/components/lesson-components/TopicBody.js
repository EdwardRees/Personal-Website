import React, { Component } from "react";

class TopicBody extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export { TopicBody };
