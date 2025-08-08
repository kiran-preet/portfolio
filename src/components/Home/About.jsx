import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";


const About = () => {
    return (
        <Container fluid className="home-about-section" id="about">
          <Container>
            <Row>
              <Col md={8} className="home-about-description">
                <h1 style={{ fontSize: "2.6em" }}>
                  LET ME <span className="yellow"> INTRODUCE </span> MYSELF
                </h1>
                <p className="home-about-body">
                 Hi, my name is <span className="yellow">Kiranpreet Kaur </span>
                 and I'm from <span className="yellow"> Ontario, Canada.</span>
                <br />
                <br />
                Experienced Full Stack Developer with expertise in <b className="yellow"> Drupal,Python, Laravel, and JavaScript frameworks </b> including React and Vue.js. I specialize in building secure, scalable web applications and optimizing system architecture for peak performance.
                <br />
                <br />
                  With strong proficiency in <b className="yellow">AWS cloud</b> services and containerization technologies, I deliver robust solutions from concept through deployment.
                  <br />
                  <br />Strong command of JavaScript and modern frameworks, including <b className="yellow">React, Angular, and Vue.js,</b> and adept at REST API development and integration. Experienced with Amazon Web Services (AWS) for application deployment and management
                  <br />
                  <br />
                  bringing proven problem-solving abilities to resolve complex application issues effectively. Known for high attention to detail, excellent communication skills, and a collaborative approach to delivering quality software solutions.
                  <br />
                  <br />
                  Committed to continuous learning and improvement, with a solid foundation in modern web development trends and technologies.
                  <br />
                  
                </p>
              </Col>
              <Col md={4} className="myAvtar">
                <Tilt>
                  <img src={LaptopImg} className="img-fluid" alt="avatar" />
                </Tilt>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="home-about-social">
                <h1>FIND ME ON</h1>
                <p>
                Please don't hesitate to reach out to me and <span className="yellow">connect.</span>
                </p>
                <ul className="home-about-social-links">
                  <li className="social-icons">
                    <a
                      href="https://github.com/kiran-preet?tab=repositories"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="github"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://www.linkedin.com/in/kiranpreet-kaur-b672ab215/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="linkedin"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Container>
      );
    
}

export default About