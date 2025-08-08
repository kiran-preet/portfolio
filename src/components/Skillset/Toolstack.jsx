import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiDocker,
  SiVercel,
  SiNetlify,
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
    </Row>
  );
}

export default Toolstack;
