import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUser,
    faBriefcase,
    faProjectDiagram,
    faEnvelope,
    faBolt,
    faCode
} from "@fortawesome/free-solid-svg-icons";
import '../App.css'

const Sidebar = () => {
    return (
        <nav className="topbar" role="navigation" aria-label="Primary">
            <div className="topbar-inner">
                <a className="brand-mark" href="#welcome" aria-label="Go to top of page">
                    <span className="brand-mark__dot" aria-hidden="true"></span>
                    <span>Mariana García</span>
                </a>

                <div className="nav-links">
                    <a className="nav-link" href="#aboutMe">
                        <FontAwesomeIcon icon={faUser} />
                        About
                    </a>
                    <a className="nav-link" href="#experience">
                        <FontAwesomeIcon icon={faBriefcase} />
                        Experience
                    </a>
                    <a className="nav-link" href="#projects">
                        <FontAwesomeIcon icon={faProjectDiagram} />
                        Projects
                    </a>
                    <a className="nav-link" href="#skills">
                        <FontAwesomeIcon icon={faBolt} />
                        Skills
                    </a>
                    <a className="nav-link" href="#contactMe">
                        <FontAwesomeIcon icon={faEnvelope} />
                        Contact
                    </a>
                    <a className="nav-link" href="https://github.com/marianaagrcg" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faCode} />
                        Code
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Sidebar;
