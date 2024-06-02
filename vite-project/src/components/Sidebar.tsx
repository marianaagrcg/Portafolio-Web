import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUser,
    faBriefcase,
    faProjectDiagram,
    faEnvelope,
    faCode,
} from "@fortawesome/free-solid-svg-icons";
import "bulma/css/bulma.min.css";

const Navbar = () => {
    return (
        <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="/">
                    <FontAwesomeIcon icon={faCode} size="2x" className="mr-2" />
                    <h1 className="title is-4 has-text-white">My Portfolio</h1>
                </a>
                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <a className="navbar-item" href="#about-me">
                        <FontAwesomeIcon icon={faUser} className="mr-2" />
                        About Me!
                    </a>
                    <a className="navbar-item" href="#experience">
                        <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
                        Experience
                    </a>
                    <a className="navbar-item" href="#projects">
                        <FontAwesomeIcon icon={faProjectDiagram} className="mr-2" />
                        Projects
                    </a>
                    <a className="navbar-item" href="#contact">
                        <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                        Contact
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
