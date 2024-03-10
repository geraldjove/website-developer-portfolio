import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import thingsToDo from "../images/things-to-do.JPG";
import Ecommerce from "../images/ecommerce.JPG";
import Forex from "../images/forex.JPG";

function ProjectCard() {
    const portCards = [
        {
            portImage: `${Forex}`,
            portAlt: "forex-web",
            portTitle: "ForEx App",
            portParagraph: `Looking to convert currencies effortlessly? Our forex calculator offers instant and accurate conversions at the latest exchange rates. Whether you're a traveler, investor, or simply curious, streamline your financial calculations hassle-free with our tool!
            
            `,
            portCode: `https://github.com/geraldjove/forex-calculator`,
            portLink: `https://geraldjove.github.io/forex-calculator/`,
        },
        {
            portImage: `${Ecommerce}`,
            portAlt: "ecommerce-web",
            portTitle: "Ecommerce Shop",
            portParagraph: `Welcome to our user-friendly e-commerce platform! Shop seamlessly through our wide range of products with intuitive navigation. Explore today for a convenient online shopping experience brought to life through stylish design and seamless functionality.`,
            portCode: `https://github.com/geraldjove/b335-jove-capstone-3`,
            portLink: `https://b335-capstone-jove-3.vercel.app/`,
        },
        {
            portImage: `${thingsToDo}`,
            portAlt: "things-to-do",
            portTitle: "To Do List App",
            portParagraph: `Presenting a sleek and intuitive Things To Do app website, designed for seamless organization and productivity. With its minimalist interface and user-friendly features, users can effortlessly create, manage, and prioritize tasks. Elevate efficiency and streamline daily routines with this indispensable tool, showcasing my proficiency in UI/UX design and web development.`,
            portCode: `https://github.com/geraldjove/simple-things-to-do-app`,
            portLink: `https://geraldjove.github.io/simple-things-to-do-app/`,
        },
    ];

    return (
        <Container className="py-5" fluid>
            <h4 className="text-primary fw-bold d-flex justify-content-center align-items-center">
                PROJECTS
            </h4>
            {portCards.map((portCard) => (
                <Row className="d-flex justify-content-center align-items-center my-5">
                    <Col xs={12} md={6} className="order-1 order-md-0">
                        <h1>{portCard.portTitle}</h1>
                        <p>{portCard.portParagraph}</p>
                        <Row className="d-flex">
                            <Col>
                                <a
                                    href={portCard.portCode}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    <Button className="mx-1 btn btn-dark">
                                        <FontAwesomeIcon icon={faGithub} /> Code
                                    </Button>
                                </a>
                                <a
                                    href={portCard.portLink}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    <Button className="mx-1 btn btn-dark">
                                        <FontAwesomeIcon
                                            icon={faGlobe}
                                            className="me-2"
                                        />
                                        Live Demo
                                    </Button>
                                </a>
                            </Col>
                        </Row>
                    </Col>
                    <Col
                        xs={12}
                        md={"auto"}
                        className="d-flex justify-content-center my-5"
                    >
                        <img
                            src={portCard.portImage}
                            alt={portCard.portAlt}
                            width={"300px"}
                            className=" imgShadow rounded-5 boxStroke"
                        />
                    </Col>
                </Row>
            ))}
        </Container>
    );
}

export default ProjectCard;
