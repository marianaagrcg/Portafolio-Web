import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLink } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

interface Props{};

const ContactMe = (_props: Props) => {
    return (
        <>
            <div className="footer has-background-primary-25 is-flex is-flex-direction-row">

                <div className="content has-text-centered is-flex-grow-1 mt-5">
                    <h1 className="title is-1">Contact Me</h1>
                    <h2 className="subtitle is-4">Feel free to reach out!</h2>
                </div>

                <div className="is-flex-grow-1 is-flex is-flex-direction-column mt-5">
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
            </div>
        </>
    )
}
export	default ContactMe;