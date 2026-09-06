import Welcome from "../components/Welcome";
import AboutMe from "../components/AboutMe";
import Education from "../components/Education";
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from "../components/Skills";
import Certifications from "../components/Certifications";

const PortafolioPage = () => {
    return (
        <div className="portfolio-page">
            <Welcome />
            <AboutMe />
            <Education />
            <Experience />
            <Projects />
            <Skills />
            <Certifications />
        </div>
    )
};

export default PortafolioPage;
