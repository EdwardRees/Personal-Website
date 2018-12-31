import React from "react";
import { TopicHeader } from '../../components/lesson-components'
import { Col } from 'reactstrap';
import { SidebarNav, ArticleNav } from '../frontend/components';

const FrontEndHome = () => (

     <div>
    <TopicHeader>
      <Col xs="4" />
      <Col xs="4">
        <h2>Front End Web Development</h2>
      </Col>
      <Col xs="auto" md="auto" sm="auto" lg="auto">
        <SidebarNav />
        <ArticleNav />
      </Col>
    </TopicHeader>
  </div>

);

export { FrontEndHome };
