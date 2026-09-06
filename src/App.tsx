import backgroundImage from './assets/images/background.jpg';
import "./global.css";
import { useEffect } from 'react';
import Sidebar from './components/Sidebar'
import PortafolioPage from './pages/PortafolioPage'
import ContactMe from './components/ContactMe';
import './App.css'

function App() {
  useEffect(() => {
    const targets = document.querySelectorAll(
      '.section-shell, .timeline-card, .skill-card, .project-card, .cert-card, .hero-panel, .portrait-frame, .action-button, .social-link'
    );

    targets.forEach((target) => {
      target.classList.add('scroll-reveal');
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: '0px 0px -8% 0px' }
    );

    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="site-shell">
      <div className="site-background" aria-hidden="true">
        <img className="site-background__image" src={backgroundImage} alt="" />
        <div className="site-background__overlay" />
      </div>
      <header>
        <Sidebar />
      </header>
      <main>
        <PortafolioPage />
      </main>
      <ContactMe />
    </div>
  )
}

export default App
