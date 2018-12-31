import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Container, Col, Row } from "reactstrap";

const Articles = () => (
  <div>
    <Container fluid className="text-center">
      <h2>Articles</h2>
      <Row>
        <Col>
          <Link to="/introduction">Introduction</Link>
        </Col>
        <Col>
          <Link to="/ide">
            Integrated Development Environment vs. Source Code Editors
          </Link>
        </Col>
      </Row>
    </Container>
  </div>
);

export { Articles };
