import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

function AppNavBar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary" bg="dark" sticky="top">
            <Container>
                <Navbar.Brand href="#home" className="fw-bold roboto-black">
                    GKBJ.DEV
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#portfolio">Projects</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default AppNavBar;
