import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "../images/web-design.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapPin } from "@fortawesome/free-solid-svg-icons";

function AboutSection() {
    return (
        <Container
            fluid
            className="bg-light d-flex align-items-center"
            id="about"
        >
            <Container fluid>
                <Row className="d-flex justify-content-center align-items-center my-5">
                    <Col
                        md={"auto"}
                        className="d-flex justify-content-center align-items-center"
                    >
                        <img
                            src={Image}
                            alt="profile_picture"
                            width={"500px"}
                            className="rounded-4 img-fluid imgShadow"
                        />
                    </Col>
                    <Col className="my-5" md={4}>
                        <h4 className="text-primary fw-bold">ABOUT ME</h4>
                        <h3 className="fw-bold">
                            A dedicated and passionate Full-stack Web Developer
                            based in Manila, Philippines
                            <FontAwesomeIcon icon={faMapPin} className="ms-2" />
                        </h3>
                        <p>
                            With expertise in front-end, back-end, and
                            full-stack web development, I offer a comprehensive
                            skill set. Proficient in HTML5, CSS3, Bootstrap, and
                            JavaScript, I create visually appealing and
                            responsive websites. I am experienced in version
                            control with Git and GitHub and adept in back-end
                            technologies like Node.js, Express.js, and MongoDB.
                            Additionally, I excel in React.js for dynamic
                            interfaces and API integration. As a multimedia
                            artist and digital marketing specialist, I bring
                            creativity and strategic thinking to projects,
                            ensuring success across various domains.
                        </p>
                    </Col>
                </Row>
                <Row className="my-5">
                    <Col className="d-flex justify-content-center">
                        <h4 className="text-primary fw-bold">SKILLS & TOOLS</h4>
                    </Col>
                </Row>
                <Row className="d-flex justify-content-center my-5">
                    <Col
                        className="boxStroke rounded-5 text-dark d-flex flex-column p-5 my-2 mx-2"
                        md={"auto"}
                    >
                        <h4 className="text-center mb-3">
                            Front-end Programming
                        </h4>
                        <ul className="px-5">
                            <li>HTML 5</li>
                            <li>CSS 3</li>
                            <li>Sass</li>
                            <li>Bootstrap</li>
                            <li>Figma Wireframes & Mockups</li>
                            <li>Git & GitHub</li>
                            <li>Vercel</li>
                        </ul>
                    </Col>
                    <Col
                        className="boxStroke rounded-5 text-dark d-flex flex-column p-5 my-2  mx-2"
                        md={"auto"}
                    >
                        <h4 className="text-center  mb-3">
                            Back-end Programming
                        </h4>
                        <ul className="px-5">
                            <li>JavaScript</li>
                            <li>PHP</li>
                            <li>Java</li>
                            <li>MySQL</li>
                            <li>Node.js</li>
                            <li>JQuery</li>
                            <li>Express.js</li>
                            <li>MongoDB</li>
                            <li>Postman</li>
                            <li>REST API</li>
                        </ul>
                    </Col>
                    <Col
                        className="boxStroke rounded-5 text-dark d-flex flex-column p-5 my-2  mx-2"
                        md={"auto"}
                    >
                        <h4 className="text-center  mb-3">
                            Full-stack Programming
                        </h4>
                        <ul className="px-5">
                            <li>React.js</li>
                            <li>JS DOM Manipulation</li>
                            <li>Amazon Web Services (AWS)</li>
                            <li>API Intergration with Fetch</li>
                            <li>Google Cloud API</li>
                            <li>Software Development Life Cycle</li>
                            <li>Trello</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default AboutSection;
