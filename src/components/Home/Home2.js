import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import uvaLogo from "../../Assets/uva.png";
import {
    AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
    return (
        <Container fluid className="home-about-section" id="about">
            <Container>
                <Row>
                    <Col md={7} className="home-about-description">
                        <h1 style={{ fontSize: "2.6em" }}>
                            LET ME <span className="purple"> INTRODUCE </span> MYSELF
                        </h1>
                        <p className="home-about-body">
                            I'm a current
                            <i>
                                <b className="purple"> {" "} 4th year {" "}</b>
                            </i>
                            at the University of Virginia, working towards a
                            Bachelor's of Science in
                            <i>
                                <b className="purple">{ " "}Computer Science. </b>
                            </i>
                            and a minor in
                            <i>
                                <b className="purple">{ " "}Data Science. </b>
                            </i>
                            <br/>
                            <br/>I am fluent in
                            <i>
                                <b className="purple"> Python, Java, JavaScript/TypeScript, and C/C++. </b>
                            </i>
                            <br/>

                            <br/>
                            Currently, I work as a {" "}
                            <i>
                                <b className="purple">Machine Learning</b>
                            </i>{" "}
                            Intern at{" "}
                            <a href="https://ccam-va.com/" target="_blank" rel="noopener noreferrer" className="purple">
                                <b>CCAM</b>
                            </a>, a{" "}
                            <i>
                                <b className="purple">Teaching Assistant</b>
                            </i>{" "}
                            at the University of Virginia for the advanced computer architecture course,{" "}
                            and serve as the{" "}
                            <i>
                                <b className="purple">Webmaster</b>
                            </i>{" "}
                            for the Taiwanese Student Association at UVA.
                            <br/>

                            <br/>
                           My field of interests include: Machine Learning, Data Science, Full-Stack Development,
                            and Computer Architecture.

                        </p>
                    </Col>
                    <Col md={5} className="home-about-social" style={{paddingLeft: 0}}>
                        <img
                            src={uvaLogo}
                            alt="UVA Logo"
                            style={{maxWidth: "100px", marginBottom: "20px", marginTop: "175px"}}
                        />
                        <p>
                            Feel free to connect with me
                        </p>
                        <ul className="home-about-social-links">
                            <li className="social-icons">
                                <a
                                    href="https://github.com/BrandonYuan01"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="icon-colour home-social-icons"
                                >
                                    <AiFillGithub/>
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://www.linkedin.com/in/brandon-yuan/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="icon-colour home-social-icons"
                                >
                                    <FaLinkedinIn/>
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Home2;