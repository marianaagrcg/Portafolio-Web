import phoenixEyeImage from '../assets/images/dashboard.jpeg';
import gemsoImage from '../assets/images/sars.jpeg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCodeBranch } from "@fortawesome/free-solid-svg-icons";

const projects = [
  {
    title: 'Phoenix Eye',
    label: 'NASA Space Apps Global Finalist',
    description:
      'Led the frontend architecture for a predictive wildfire visualization experience powered by CNN + LSTM models, presented in Dubai as a global finalist project.',
    tags: ['Next.js', 'Data Visualization', 'AI UI', 'NASA Space Apps'],
    image: phoenixEyeImage,
  },
  {
    title: 'Gemso',
    label: 'Agile Front-End Lead',
    description:
      'Led the team under SCRUM to build a production-ready application officially implemented by the partner company, with a strong focus on delivery quality and maintainability.',
    tags: ['React', 'SCRUM', 'Product Delivery', 'Leadership'],
    image: gemsoImage,
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <div className="section-shell">
        <span className="section-kicker">Featured Projects</span>
        <h2 className="section-title">Selected work that blends interface quality, product thinking, and engineering depth.</h2>
        <p className="section-summary">
          These projects highlight systems I contributed to or led, with a focus on scalable frontend execution and clear technical outcomes.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-media project-browser">
                <div className="project-browser__bar" aria-hidden="true">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="project-browser__frame">
                  <img src={project.image} alt={project.title} loading="lazy" />
                </div>
              </div>

              <div className="project-content">
                <span className="section-kicker">{project.label}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="tech-tags" aria-label={`${project.title} technologies`}>
                  {project.tags.map((tag) => (
                    <span key={tag} className="tech-tag">{tag}</span>
                  ))}
                </div>

                <div className="project-actions">
                  <a className="project-link" href="mailto:marianagarciagomez2@gmail.com?subject=Request%20for%20project%20code">
                    <FontAwesomeIcon icon={faCodeBranch} />
                    View Code
                  </a>
                  <a className="project-link" href="mailto:marianagarciagomez2@gmail.com?subject=Request%20for%20project%20demo">
                    <FontAwesomeIcon icon={faArrowRight} />
                    Request Demo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
