import React, { useState } from "react";
import { Container, Form, Col, Row, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEnvelope,
    faPhone,
    faLocationDot,
    faClock,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("https://formspree.io/f/mvoeqbpk", formData)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log("Error: ", error);
            });
    };

    return (
        <Container
            fluid
            className="bg-light vh-100 py-5 d-flex justify-content-center align-items-center bgImage"
            id="contact"
        >
            <Container>
                <Row>
                    <Col>
                        <h1 className="fw-bold">Get in Touch</h1>
                        <p>
                            Have a question or just want to say hello? Feel free
                            to reach out through the form below and I'll get
                            back to you as soon as possible!
                        </p>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group>
                                <Form.Label className="mt-2">
                                    <h5 className="m-0">Name</h5>
                                </Form.Label>
                                <Form.Control
                                    onChange={handleChange}
                                    value={formData.name}
                                    type="text"
                                    placeholder="John Doe"
                                    name="name"
                                ></Form.Control>
                                <Form.Label className="mt-2">
                                    <h5 className="m-0">Email</h5>
                                </Form.Label>
                                <Form.Control
                                    onChange={handleChange}
                                    value={formData.email}
                                    type="email"
                                    placeholder="email@domain.com"
                                    name="email"
                                ></Form.Control>
                                <Form.Label className="mt-2">
                                    <h5 className="m-0">Message</h5>
                                </Form.Label>
                                <Form.Control
                                    onChange={handleChange}
                                    value={formData.message}
                                    as="textarea"
                                    placeholder="Message"
                                    name="message"
                                ></Form.Control>
                                <Button
                                    type="submit"
                                    className="btn btn-dark w-100 my-3"
                                >
                                    Send
                                </Button>
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col
                        className="d-flex flex-column bg-dark text-light p-5 rounded-5 justify-content-between"
                        md={6}
                    >
                        <h1>Info</h1>
                        <h5>
                            <FontAwesomeIcon
                                icon={faEnvelope}
                                className="me-2"
                            />
                            geraldkevinjove@gmail.com
                        </h5>
                        <h5>
                            <FontAwesomeIcon icon={faPhone} className="me-2" />
                            (+63) 966-331-0965
                        </h5>
                        <h5>
                            <FontAwesomeIcon
                                icon={faLocationDot}
                                className="me-2"
                            />
                            Manila, Philippines
                        </h5>
                        <h5>
                            <FontAwesomeIcon icon={faClock} className="me-2" />
                            09:00 AM - 07:00 PM (GMT +8)
                        </h5>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default ContactForm;
