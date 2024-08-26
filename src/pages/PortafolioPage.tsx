// import React from 'react';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEnvelope, faLink } from "@fortawesome/free-solid-svg-icons";
// import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
// import ContactMe from "../components/ContactMe";
import Welcome from "../components/Welcome";
import AboutMe from "../components/AboutMe";
import Certifications from "../components/Certifications";
import Experience from '../components/Experience';
import Projects from '../components/Projects';

interface Props {};

const PortafolioPage = (_props: Props) => {
    return (
        <>
        
            <div className="Main">
                
                <div>
                    <Welcome />
                </div>


                <div>
                    <AboutMe/>
                </div>

                <div>
                    <Experience />
                </div>

                <div>
                    <Projects />
                </div>

                <div>
                    <Certifications />
                </div>

            </div>
        </>
    )
};

export default PortafolioPage;
