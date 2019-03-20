import React from "react";
import { BrowserRouter as Route, Router, Link } from "react-router-dom";
import { Col, Row, Container } from "reactstrap";

const Languages = ({ match }) => (
  <div>
    <Container>
      <Row className="text-center">
        <Col lg={12} md={12} xs={12}>
          <h2 className="text-center">Languages</h2>
        </Col>
        <Col lg={4} md={4} xs={4}>
          <Link to={"/404"}>Python</Link>
        </Col>
        <Col lg={4} md={4} xs={4}>
          <Link to={"/javascript/articles/setup"}>JavaScript</Link>
        </Col>
        <Col lg={4} md={4} xs={4}>
          <Link to={"/404"}>Java</Link>
        </Col>
      </Row>
      <br/><br/>
      <Row className="text-center">
        <Col lg={12} md={12} xs={12}>
          <h3 className="text-center">Coming Soon!</h3>
        </Col>
        <Col lg={3} md={3} xs={3}>
          <Link to={"/404"}>Swift</Link>
        </Col>
        <Col lg={3} md={3} xs={3}>
          <Link to={"/404"}>Shell / Bash</Link>
        </Col>
        <Col lg={3} md={3} xs={3}>
          <Link to={"/404"}>C</Link>
        </Col>
        <Col lg={3} md={3} xs={3}>
          <Link to={"/404"}>C#</Link>
        </Col>
      </Row>
    </Container>
    {/* <ul>
      <li />
      <li />
      <li />
    </ul> */}
    {/* 
    <Route path={`${match.path}/:id`} component={Topic} />
    <Route
      exact
      path={match.path}
      render={() => <h3>Please select a topic.</h3>}
    /> */}
  </div>
);

export { Languages };
