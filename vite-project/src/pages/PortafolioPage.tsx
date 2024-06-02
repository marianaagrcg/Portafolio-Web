import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLink } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import profielPicture from "../assets/images/profilePicture.jpeg"

interface Props {};

const PortafolioPage = (_props: Props) => {
    return (
        <>
            <div className="Main">

                <div className="welcome is-flex is-flex-direction-row">
                    <section className="hero has-background-primary-35 is-flex-grow-1">
                        <div className="hero-body">
                            <div className="container">
                                <h1 className="title is-1 has-text-primary-15">Welcome to my Portfolio, I'm Mariana García!</h1>
                                <h2 className="subtitle is-4 has-text-primary-light">I am a dedicated computer science student from Tecnologico de Monterrey <br /> excited to learn and share my knowledge with others.</h2>
                            </div>
                        </div>
                    </section>
                    {/* <section className="hero has-background-primary-35 is-flex-grow-1">
                        <div className="hero-body">
                            <div className="container">
                                <h1 className="title is-1">titulo2</h1>
                            </div>
                        </div>
                    </section> */}
                </div>


                <div className="aboutMe has-background-primary-35">
                    <section className="hero">
                        <div className="hero-body">
                            <div className="container">
                                <h1 className="title is-1">About me!</h1>

                                <div className='is-flex is-flex-direction-row'>
                                    <div className='profielPicture'>
                                        <figure className="image is-128x128">
                                            <img className="is-rounded" src={profielPicture} alt="Profile" />
                                        </figure>
                                    </div>
                                    <div className='infoAbMe'>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <div className="experience">
                    <section className="hero has-background-primary-35">
                        <div className="hero-body">
                            <div className="container">
                                <h1 className="title is-1">Experience</h1>
                                <h2 className="subtitle is-4">I'm a Mariana Garcia</h2>
                            </div>
                        </div>
                    </section>
                </div>

                <div className="projects">
                    <section className="hero has-background-primary-35">
                        <div className="hero-body">
                            <div className="container">
                                <h1 className="title is-1">Projects</h1>
                                <h2 className="subtitle is-4">I'm a Mariana Garcia</h2>
                            </div>
                        </div>
                    </section>
                </div>

                <div className="Certifications">
                    <section className="hero has-background-primary-35">
                        <div className="hero-body">
                            <div className="container">
                                <h1 className="title is-1">Certifications</h1>
                                <h2 className="subtitle is-4">I'm a Mariana Garcia</h2>
                            </div>
                        </div>
                    </section>
                </div>

                <footer className="footer has-background-primary-25 is-flex is-flex-direction-row">
                    <div className="content has-text-centered is-flex-grow-1">
                        <h1 className="title is-1">Contact Me</h1>
                        <h2 className="subtitle is-4">Feel free to reach out!</h2>
                    </div>

                    <div className="is-flex-grow-1 is-flex is-flex-direction-column">
                        <div className="email mb-2">
                            <a href="mailto:marianagarciagomez2@gmail.com" className="subtitle is-3">
                                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                                marianagarciagomez2@gmail.com
                            </a>
                        </div>
                        <div className="linkedin mb-2">
                            <a href="https://www.linkedin.com/in/mariana-alejandra-garcía-gómez-b0547624a/" className="subtitle is-3" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
                                LinkedIn
                            </a>
                        </div>
                        <div className="github">
                            <a href="https://github.com/marianaagrcg" className="subtitle is-3" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithub} className="mr-2" />
                                GitHub
                            </a>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
};

export default PortafolioPage;
