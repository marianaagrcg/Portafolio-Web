import nasa from '../assets/images/NASA.jpeg';
import iot from '../assets/images/IoT.jpeg';
import c from '../assets/images/C.jpg';

const certifications = [
    {
        title: 'NASA Space Apps Challenge',
        subtitle: 'Global finalist recognition',
        image: nasa,
    },
    {
        title: 'C Programming Certificate',
        subtitle: 'Core programming foundation',
        image: c,
    },
    {
        title: 'IoT Certificate',
        subtitle: 'Connected systems and hardware integration',
        image: iot,
    },
];

const Certifications = () => {
    return (
        <section id="certifications">
            <div className="section-shell">
                <span className="section-kicker">Certificates</span>
                <h2 className="section-title">Recognitions that reinforce the technical profile behind the portfolio.</h2>
                <p className="section-summary">
                    A minimal gallery that keeps the focus on the credential itself while matching the dark premium visual language of the site.
                </p>

                <div className="cert-grid">
                    {certifications.map((certificate) => (
                        <article className="cert-card" key={certificate.title}>
                            <div className="cert-card__frame">
                                <img src={certificate.image} alt={certificate.title} loading="lazy" />
                            </div>
                            <div className="cert-card__content">
                                <h3>{certificate.title}</h3>
                                <p>{certificate.subtitle}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Certifications;
