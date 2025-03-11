import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import SipC from "../../Assets/Projects/sipc.png";
import rsa from "../../Assets/Projects/rsa.png";
import course from "../../Assets/Projects/course.png";
import page from "../../Assets/Projects/page.png";
import clustering from "../../Assets/Projects/clustering.png";


function Projects() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    My Recent <strong className="purple">Works </strong>
                </h1>
                <p style={{ color: "white" }}>
                    Here are a few projects I've worked on.
                </p>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={SipC}
                            isBlog={false}
                            title="SipC Compiler"
                            description="A compiler developed by me and a teammate. Features include booleans, ternary
                            expressions, arrays, for loops, and more."
                            ghLink="https://github.com/BrandonYuan01/SipC-Compiler"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={course}
                            isBlog={false}
                            title="Course Reviews Application"
                            description="A simple app I developed with a team of 3 to practice Full-Stack Development.
                            Used SQLite as the database."
                            ghLink="https://github.com/BrandonYuan01/Course-Reviews-Application"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={rsa}
                            isBlog={false}
                            title="RSA Encrypter"
                            description="A program to encrypt messages using the RSA algorithm."
                            ghLink="https://github.com/BrandonYuan01/RSA-Encrypter"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={page}
                            isBlog={false}
                            title="Pagetable"
                            description="A pagetable implementation that allows for allocating
                            and translating virtual addresses."
                            ghLink="https://github.com/BrandonYuan01/pagetable"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={clustering}
                            isBlog={false}
                            title="California Housing Clustering"
                            description="This project applies K-Means clustering to analyze housing market segmentation in California."
                            ghLink="https://github.com/BrandonYuan01/California-Housing-Clustering"
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Projects;