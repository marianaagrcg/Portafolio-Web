import { CalendarIcon, MapPinIcon, GraduationIcon } from './ui/PortfolioIcons';

const educationItems = [
  {
    school: 'Monterrey Institute of Technology and Higher Education · Sonora North Campus',
    degree: 'B.S. in Computer Science and Technology',
    meta: 'Hermosillo, Mexico · Graduation: June 2026 · GPA: 98/100',
  },
  {
    school: 'Relevant Coursework',
    degree: 'Software engineering foundation',
    meta: 'Object-Oriented Programming (OOP), Data Structures & Algorithms, SDLC, Software Construction, Data Science, Web Technologies',
  },
  {
    school: 'Languages',
    degree: 'Professional communication',
    meta: 'Spanish (Native) · English (B2 - Professional working proficiency)',
  },
];

const Education = () => {
  return (
    <section id="education">
      <div className="section-shell">
        <span className="section-kicker">Education</span>
        <h2 className="section-title">A strong academic base with a software-first mindset.</h2>
        <p className="section-summary">
          The CV supports a profile centered on Computer Science fundamentals, software architecture, and professional collaboration in English and Spanish.
        </p>

        <div className="timeline-grid">
          {educationItems.map((item) => (
            <article key={item.school} className="timeline-card">
              <div className="timeline-head">
                <div>
                  <p className="timeline-role timeline-role--inline">
                    <GraduationIcon />
                    <span>{item.school}</span>
                  </p>
                  <p className="timeline-meta timeline-meta--inline">
                    <MapPinIcon />
                    <span>{item.degree}</span>
                  </p>
                </div>
              </div>
              <p className="timeline-body timeline-body--inline">
                <CalendarIcon />
                <span>{item.meta}</span>
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;