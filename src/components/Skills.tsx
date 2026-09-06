import { TechToken } from './ui/PortfolioIcons';
import { getTechLogo } from './ui/techLogoMap';

const skillGroups = [
  {
    title: 'Languages',
    items: ['JavaScript (ES6+)', 'TypeScript', 'Python', 'C++', 'C#', 'Java', 'SQL', 'Verilog', 'HTML/CSS'],
  },
  {
    title: 'Frameworks & Libraries',
    items: ['Next.js', 'Nest.js', 'React', 'Node.js', 'Express.js', 'Tailwind CSS', 'Shadcn UI'],
  },
  {
    title: 'Tools & Databases',
    items: ['Git', 'GitHub', 'Docker', 'AWS', 'MySQL', 'PostgreSQL', 'MongoDB', 'Figma'],
  },
  {
    title: 'Core Competencies',
    items: ['Software Engineering', 'SDLC', 'Object-Oriented Programming (OOP)', 'Data Modeling', 'Version Control', 'Debugging', 'Software Design'],
  },
  {
    title: 'Communication',
    items: ['Spanish (Native)', 'English (B2)', 'Technical Documentation', 'Stakeholder Communication'],
  },
];

const Skills = () => {
  return (
    <section id="skills">
      <div className="section-shell">
        <span className="section-kicker">Technical Skills</span>
        <h2 className="section-title">Organized by the layers I use to ship production software.</h2>
        <p className="section-summary">
          The stack below mirrors the CV: programming languages, frameworks, tools, databases, and the engineering competencies behind the work.
        </p>

        <div className="skill-grid">
          {skillGroups.map((group) => (
            <article key={group.title} className="skill-card">
              <h3>{group.title}</h3>
              <div className="skill-pills">
                {group.items.map((item) => (
                  <TechToken key={item} name={item} icon={getTechLogo(item)} />
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;