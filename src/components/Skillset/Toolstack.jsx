import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiGit } from "react-icons/di";
import {
  SiVisualstudiocode,
  SiPostman,
  SiDocker,
  SiVercel,
  SiJira,
  SiBitbucket
} from "react-icons/si";

const Toolstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode /> <br/>VS Code
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit /><br/>Git
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman /><br/>Postman
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker /><br/>Docker
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJira /><br/>Jira
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBitbucket /><br/>Bitbucket
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel /><br/>Vercel
      </Col>
    </Row>
  );
}

export default Toolstack;
