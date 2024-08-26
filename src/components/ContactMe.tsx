import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

interface Props {}

const ContactMe = (_props: Props) => {
  return (
    <>
      <section id="contactMe"></section>

      <div className="footer has-background-black p-5">
        <div className="columns is-12 ml-6 is-centered mt-5 mb-5">
          <div className="column is-3 has-text-centered">
            <h1 className="title is-1 has-text-white">Contact Me!</h1>
            <h2 className="subtitle is-4 has-text-white">
              Feel free to reach out!
            </h2>
          </div>

          <div className="column is-3 has-text-centered mt-5">
            <div className="email mb-2">
              <a
                href="mailto:marianagarciagomez2@gmail.com"
                className="subtitle is-4 has-text-white"
              >
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                marianagarciagomez2@gmail.com
              </a>
            </div>
          </div>

          <div className="column is-3 has-text-centered mt-5">
            <div className="linkedin mb-2">
              <a
                href="https://www.linkedin.com/in/mariana-alejandra-garcía-gómez-b0547624a/"
                className="subtitle is-4 has-text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
                LinkedIn
              </a>
            </div>
          </div>

          <div className="column is-3 has-text-centered mt-5">
            <div className="github mb-2">
                <a
                    href="https://github.com/marianaagrcg"
                    className="subtitle is-4 has-text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faGithub} className="mr-2" />
                    GitHub
                </a>
                </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactMe;
