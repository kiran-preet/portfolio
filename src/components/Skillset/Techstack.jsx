import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs
} from "react-icons/di";
import {
  SiMysql,
  SiAmazonapigateway,
  SiVuedotjs,
  SiLaravel,
  SiPhp,
  SiDrupal,
  SiAwsamplify,
  SiAwslambda,
  SiAmazondynamodb,
  SiAmazonecs,
  SiAmazons3,
  SiPython
} from "react-icons/si";

const Techstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiLaravel /> <br/>Laravel
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPhp /> <br />PHP
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVuedotjs /> <br/>Vue.js
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 /> <br/>JavaScript
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonapigateway /><br/>AWS API Gateway
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonecs /><br/>AWS ECS
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAwsamplify /><br/>AWS Amplify
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAwslambda /><br/>AWS Lambda
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazons3 /><br/>AWS S3
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazondynamodb /><br/>AWS DynamoDB
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact /><br/>React
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql /><br/>MySQL
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPython /><br/>Python
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDrupal /><br/>Drupal
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs /> <br/>Node.js
      </Col>
    </Row>
  );
}

export default Techstack;
