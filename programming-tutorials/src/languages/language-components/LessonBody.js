import React, { Component } from "react";

class LessonBody extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>{this.props.children}</div>;
  }
}
export { LessonBody };
