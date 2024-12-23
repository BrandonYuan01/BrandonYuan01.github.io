import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import SipC from "../../Assets/Projects/sipc.png";
import rsa from "../../Assets/Projects/rsa.png";
import course from "../../Assets/Projects/course.png";


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

              {/*      <Col md={4} className="project-card">*/}
              {/*          <ProjectCard*/}
              {/*              imgPath={suicide}*/}
              {/*              isBlog={false}*/}
              {/*              title="Ai For Social Good"*/}
              {/*              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."*/}
              {/*              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"*/}
              {/*              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here*/}
              {/*          />*/}
              {/*      </Col>*/}

              {/*      <Col md={4} className="project-card">*/}
              {/*          <ProjectCard*/}
              {/*              imgPath={emotion}*/}
              {/*              isBlog={false}*/}
              {/*              title="Face Recognition and Emotion Detection"*/}
              {/*              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.*/}
              {/*Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."*/}
              {/*              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"*/}
              {/*              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here*/}
              {/*          />*/}
              {/*      </Col>*/}
                </Row>
            </Container>
        </Container>
    );
}

export default Projects;