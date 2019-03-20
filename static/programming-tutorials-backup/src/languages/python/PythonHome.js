import React from "react";
import {
  TopicHeader,
  TopicBody,
  LeftContent,
  RightNav
} from "../../components/lesson-components";
import { Col, Row, Container } from "reactstrap";
import { PythonNav } from "../python";
// import { TopicHeader } from '../../components/lesson-components'
const PythonHome = () => (
  <div>
    <TopicHeader >
      <Col xs="4" />
      <Col xs="4"><h2>Python</h2></Col>
      <Col xs="auto"  md="auto" sm="auto" lg="auto">
        <PythonNav />
      </Col>

      {/* <TopicBody> */}
      {/* <LeftContent>I welcome you to the lessons on Python. Please begin by selecting </LeftContent> */}
    </TopicHeader>
    {/* </TopicBody> */}
  </div>
);

export { PythonHome };
