import BackgroundImage from "../assets/images/backgroundImage.jpeg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Welcome = () => {
    return (
        <section
            id="welcome"
            className="hero-section hero-section--photo"
            style={{ backgroundImage: `url(${BackgroundImage})` }}
        >
            <div className="hero-overlay" aria-hidden="true" />
            <div className="section-shell hero-grid">
                <div className="hero-copy">
                    <span className="section-kicker">Software Engineer Portfolio</span>
                    <h1 className="hero-title">
                        Mariana García
                        <span className="hero-title__accent">Software Engineer</span>
                    </h1>
                    <p className="hero-subtitle">
                        Specialized in building scalable full-stack applications with Next.js, Nest.js, and clean software architecture.
                    </p>

                    <div className="hero-actions">
                        <a className="action-button action-button--primary" href="#projects">
                            View Work
                            <FontAwesomeIcon icon={faArrowRight} />
                        </a>
                        <a className="action-button action-button--secondary" href="#contactMe">
                            Let's Connect
                        </a>
                    </div>

                    <div className="hero-socials" aria-label="Professional links">
                        <a className="social-link" href="https://github.com/marianaagrcg" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faGithub} />
                            GitHub
                        </a>
                        <a className="social-link" href="https://www.linkedin.com/in/mariana-alejandra-garcía-gómez-b0547624a/" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} />
                            LinkedIn
                        </a>
                        <a className="social-link" href="mailto:marianagarciagomez2@gmail.com">
                            <FontAwesomeIcon icon={faEnvelope} />
                            Email
                        </a>
                    </div>
                </div>

                <aside className="hero-panel" aria-label="Profile overview">
                    <div className="hero-panel__frame">
                        <div className="hero-panel__eyebrow">Full-Stack Focus</div>

                        <div className="hero-panel__statement">
                            Building premium, scalable products with clean architecture and thoughtful UX.
                        </div>

                        <div className="hero-panel__metric">
                            <div className="metric-card">
                                <strong>98/100 GPA</strong>
                                <span>Monterrey Institute of Technology and Higher Education · B.S. in Computer Science and Technology.</span>
                            </div>
                            <div className="metric-card">
                                <strong>Open to Remote</strong>
                                <span>Hermosillo-based, open to remote work or relocation.</span>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </section>
    );
}

export default Welcome;
