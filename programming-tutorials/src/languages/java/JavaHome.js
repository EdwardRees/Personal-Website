import React from 'react';
import { TopicHeader } from '../../components/lesson-components'
import { JavaNav } from '../java';
import { Col } from 'reactstrap';
const JavaHome = () => (
    <div>
    <TopicHeader>
      <Col xs="4" />
      <Col xs="4">
        <h2>Java</h2>
      </Col>
      <Col xs="auto" md="auto" sm="auto" lg="auto">
        <JavaNav />
      </Col>
    </TopicHeader>
  </div>
);
export { JavaHome };