import React from "react";
import { Container } from "react-bootstrap";

export function Footer() {
    return (
        <Container
            fluid
            className="d-flex justify-content-center align-items-center bg-dark text-light"
            style={{ height: "50px" }}
        >
            <h6 className="text-center">
                Website Portfolio Developed by Gerald Jove | © Copyright2024
            </h6>
        </Container>
    );
}
