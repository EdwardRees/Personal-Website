import React from "react";
import { BrowserRouter as Route, Router, Link } from "react-router-dom";
import { Container, Col, Row } from "reactstrap";
const Projects = () => (
  <div>
     
    <Container>
      <Row className="text-center">
        <Col>
          <h2>Projects:</h2>
        </Col>
        <Col lg={3} xs={12} md={6}>
          <Link to={"/frontend"}>Front End Web Development</Link>
        </Col>
        <Col lg={3} xs={12} md={6}>
          <Link to={"/404"}>React Native Mobile Application Development</Link>
        </Col>
        <Col lg={3} xs={12} md={6}>
          <Link to={"/404"}>Minecraft Modification Development</Link>
        </Col>
        <Col lg={3} xs={12} md={6}>
          <Link to={"/404"}>Topics in Computer Science</Link>
        </Col>
      </Row>
    </Container>
  </div>
);
export { Projects };
