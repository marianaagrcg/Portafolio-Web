import { CalendarIcon, MapPinIcon, BriefcaseIcon, TechToken } from './ui/PortfolioIcons';
import { getTechLogo } from './ui/techLogoMap';

const experienceItems = [
  {
    role: 'Software Developer Intern',
    company: 'Grupo Gran Auto',
    duration: 'Sep 2025 - Present',
    location: 'Remote / Mexico',
    variant: 'blue', // Variación Cyan/Azul
    summary:
      'Designing and deploying a custom CRM solution with Next.js, Nest.js, and MySQL to automate sales pipelines, improve lead tracking, and reduce manual operational work.',
    tags: ['Next.js', 'Nest.js', 'MySQL', 'CRM', 'Automation'],
  },
  {
    role: 'Research Intern, Embedded Systems',
    company: 'Mitacs Globalink · Carleton University',
    duration: 'Jun 2025 - Sep 2025',
    location: 'Canada',
    variant: 'purple', // Variación Violeta/Púrpura
    summary:
      'Optimized real-time embedded systems using C and Verilog, focusing on performance, hardware-aware implementation decisions, and reliable system behavior under timing constraints.',
    tags: ['C', 'Verilog', 'Embedded Systems', 'Real-time'],
  },
  {
    role: 'Front-End Developer Intern',
    company: 'Gila Software',
    duration: 'Feb 2025 - Jun 2025',
    location: 'Remote',
    variant: 'emerald', // Variación Esmeralda/Menta
    summary:
      'Built UI components for AI-enabled platforms with an Agile/SCRUM workflow, collaborating across design and product functions to ship clean, reusable frontend experiences.',
    tags: ['React', 'UI Systems', 'Agile', 'SCRUM'],
  },
];

const Experience = () => {
  return (
    <section id="experience">
      <div className="section-shell">
        <span className="section-kicker">Professional Experience</span>
        <h2 className="section-title">A chronological view of the roles that shaped my engineering practice.</h2>
        <p className="section-summary">
          The focus is on modern full-stack delivery, embedded systems rigor, and collaborative frontend work inside product teams.
        </p>

        <div className="timeline-grid">
          {experienceItems.map((item) => (
            <article 
              key={`${item.company}-${item.duration}`} 
              className={`timeline-card timeline-card--${item.variant}`}
            >
              <div className="timeline-head">
                <div>
                  <p className="timeline-role timeline-role--inline">
                    <BriefcaseIcon />
                    <span>{item.role}</span>
                  </p>
                  <p className="timeline-meta timeline-meta--inline">
                    <MapPinIcon />
                    <span>{item.company} · {item.location}</span>
                  </p>
                </div>
                <span className="timeline-duration timeline-duration--inline">
                  <CalendarIcon />
                  <span>{item.duration}</span>
                </span>
              </div>

              <p className="timeline-body">{item.summary}</p>

              <div className="tech-tags" aria-label={`${item.role} technologies`}>
                {item.tags.map((tag) => (
                  <TechToken key={tag} name={tag} icon={getTechLogo(tag)} />
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;