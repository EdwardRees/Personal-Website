import React, { Component } from "react";
import { PrevLessonButton, NextLessonButton } from "./";
import { Row, Col } from "reactstrap";

class PreviousNextLesson extends Component {
  render() {
    const { PrevLocation, NextLocation } = this.props;
    return (
      <div>
        <Row>
          <Col>
            <PrevLessonButton block Location={PrevLocation} />
          </Col>
          <Col>
            <NextLessonButton block Location={NextLocation} />
          </Col>
        </Row>
      </div>
    );
  }
}
export { PreviousNextLesson };
