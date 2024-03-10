import React from "react";
import { Container } from "react-bootstrap";
import ProjectCard from "./ProjectCard";

function Portfolio() {
    return (
        <Container fluid id="portfolio">
            <Container>
                <ProjectCard />
            </Container>
        </Container>
    );
}

export default Portfolio;
