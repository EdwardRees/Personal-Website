import React from "react";
import { TopicHeader } from "../../components/lesson-components";
import { Col } from "reactstrap";
import { JavaScriptNav } from "../javascript";
const JavaScriptHome = () => (
  <div>
    <TopicHeader>
      <Col xs="4" />
      <Col xs="4">
        <h2>JavaScript</h2>
      </Col>
      <Col xs="auto" md="auto" sm="auto" lg="auto">
        <JavaScriptNav />
      </Col>
    </TopicHeader>
  </div>
);

export { JavaScriptHome };
