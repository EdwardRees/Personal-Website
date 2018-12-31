import React, { Component } from "react";
import { Container, Row } from "reactstrap";

class TopicHeader extends Component {
  render() {
    return (
      <div style={{ flexDirection: "row" }}>
        <Container fluid={true}>
        <h2 className="text-center">{this.props.name}</h2>
          <Row>{this.props.children}</Row>
        </Container>
      </div>
    );
  }
}

export { TopicHeader };
