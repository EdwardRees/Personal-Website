import React, { Component } from "react";

import { Container, Row, Col } from "reactstrap";
class LeftContent extends Component {
  render() {
    return (
      <div>
        <Col xs={8} md={8} lg={8}>
        {this.props.children}
        </Col>
      </div>
    );
  }
}

export { LeftContent };
