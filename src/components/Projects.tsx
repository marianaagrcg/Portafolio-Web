import serviguiaImage from '../assets/images/Serviguia.jpg';
import crmImage from '../assets/images/grupogranauto.jpg';
import phoenixEyeImage from '../assets/images/phoenixeye.jpg';
import gemsoImage from '../assets/images/gemso.png';

const projects = [
  {
    title: 'ServiGuía',
    label: 'Full-Stack & AI Developer',
    description:
      'Architected a multimodal AI diagnostic platform end-to-end with React (Vite) and Flask, integrating the OpenAI API through the MCP Protocol to connect AI agents with a PostgreSQL database on AWS RDS. Automated CI/CD pipelines with GitHub Actions to AWS S3 and Elastic Beanstalk, backed by unit and end-to-end testing with Pytest, Vitest, and Playwright.',
    tags: ['React', 'Flask', 'Docker', 'OpenAI API', 'MCP Protocol', 'AWS', 'PostgreSQL'],
    image: serviguiaImage,
  },
  {
    title: 'Phoenix Eye',
    label: 'NASA Space Apps Global Finalist',
    description:
      'Led the frontend architecture for a predictive wildfire visualization platform powered by a CNN + LSTM model, featuring a 3D interactive map paired with LoRa technology for offline emergency alerts in low-connectivity regions. Presented in Dubai as a Top 40 global finalist.',
    tags: ['Next.js', 'CNN + LSTM', '3D Mapping', 'LoRa', 'NASA Space Apps'],
    image: phoenixEyeImage,
  },
  {
    title: 'Grupo Gran Auto CRM',
    label: 'Software Developer Intern',
    description:
      'Architected and deployed a custom CRM solution with Next.js, Nest.js, and Tailwind CSS to automate sales pipelines, designing MySQL data models and scalable RESTful APIs with high-performance server-side rendering.',
    tags: ['Next.js', 'Nest.js', 'MySQL', 'Tailwind CSS', 'CRM', 'REST API'],
    image: crmImage,
  },
  {
    title: 'Gemso',
    label: 'Agile Front-End Lead',
    description:
      'Led the team under SCRUM, applying Object-Oriented Programming principles to architect modular web interfaces integrated into live company operations, and managed cloud deployment end-to-end with a strong focus on delivery quality.',
    tags: ['React', 'SCRUM', 'OOP', 'Product Delivery', 'Leadership'],
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
              <div className="project-content">
                <span className="section-kicker">{project.label}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="tech-tags" aria-label={`${project.title} technologies`}>
                  {project.tags.map((tag) => (
                    <span key={tag} className="tech-tag">{tag}</span>
                  ))}
                </div>

                {/* <div className="project-actions">
                  <a className="project-link" href="mailto:marianagarciagomez2@gmail.com?subject=Request%20for%20project%20code">
                    <FontAwesomeIcon icon={faCodeBranch} />
                    View Code
                  </a>
                  <a className="project-link" href="mailto:marianagarciagomez2@gmail.com?subject=Request%20for%20project%20demo">
                    <FontAwesomeIcon icon={faArrowRight} />
                    Request Demo
                  </a>
                </div> */}
              </div>

              <img className="project-card__bg" src={project.image} alt="" aria-hidden="true" loading="lazy" />
              <div className="project-card__scrim" aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
