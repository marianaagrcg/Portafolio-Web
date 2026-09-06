import profileMariana from '../assets/images/MarianaGBW.jpg';

const AboutMe = () => {
  return (
    <section id="aboutMe">
      <div className="section-shell section-card about-layout-split">
        <div className="about-portrait-column">
          <div className="portrait-frame-sidebar">
            <img src={profileMariana} alt="Mariana García portrait" loading="lazy" />
          </div>
        </div>

        <div className="about-content-column">
          <span className="section-kicker">About Me</span>
          <h2 className="section-title">Concise, product-minded engineering.</h2>

          <p className="section-summary about-summary-full">
            Computer Science engineer focused on solving complex problems with clear, robust, and maintainable software. I specialize in scalable full-stack architectures, clean interfaces, and DX optimization.
          </p>

          <div className="info-stack-horizontal">
            <div className="info-card">
              <p>
                Strong execution across front-end craftsmanship, backend integration, and end-to-end product delivery.
              </p>
            </div>
            <div className="info-card">
              <p>
                Focused on building reliable systems, clean APIs, and software that scales with clear business intent.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;