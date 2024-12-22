import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import uvaLogo from "../../Assets/uva.png";
import Tilt from "react-parallax-tilt";
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
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
                            I'm a current 3rd year at the University of Virginia, working towards a
                            Bachelor's of Science for Computer Science.
                            <br />
                            <br />I am fluent in
                            <i>
                                <b className="purple"> Python, Java, JavaScript, and C++. </b>
                            </i>
                            <br />
                            <br />
                            My field of Interest's are building new &nbsp;
                            <i>
                                <b className="purple">Web Technologies and Products </b> and
                                also in areas related to{" "}
                                <b className="purple">
                                    Blockchain.
                                </b>
                            </i>
                            <br />
                            <br />
                            Whenever possible, I also apply my passion for developing products
                            with <b className="purple">Node.js</b> and
                            <i>
                                <b className="purple">
                                    {" "}
                                    Modern Javascript Library and Frameworks
                                </b>
                            </i>
                            &nbsp; like
                            <i>
                                <b className="purple"> React.js and Next.js</b>
                            </i>
                        </p>
                    </Col>
                    <Col md={5} className="home-about-social">
                        <img
                            src={uvaLogo}
                            alt="UVA Logo"
                            style={{maxWidth: "100px", marginBottom: "20px", marginTop: "175px"}}
                        />
                        <p>
                            Feel free to <span className="purple">connect </span>with me
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