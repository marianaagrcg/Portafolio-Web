import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const ContactMe = () => {
  return (
    <footer id="contactMe" className="contact-footer">
      <div className="contact-inner">
        <div className="contact-row">
          <div>
            <span className="section-kicker">Contact</span>
            <h2 className="section-title" style={{ marginTop: '0.35rem' }}>Minimal, direct, and ready for collaboration.</h2>
            <p className="contact-note">Available for software engineering opportunities, product teams, and high-impact full-stack work. Open to remote or relocation.</p>
          </div>

          <a className="action-button action-button--primary" href="mailto:marianagarciagomez2@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} />
            marianagarciagomez2@gmail.com
          </a>
        </div>

        <div className="hero-socials" aria-label="Contact shortcuts">
          <a className="social-link" href="https://www.linkedin.com/in/mariana-alejandra-garcía-gómez-b0547624a/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
            LinkedIn
          </a>
          <a className="social-link" href="https://github.com/marianaagrcg" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default ContactMe;
