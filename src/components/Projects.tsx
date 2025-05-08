// import React from 'react';
import '../App.css'; // Asegúrate de importar el archivo CSS

// Importa las imágenes
import gardenImage from '../assets/images/dashboard.jpeg'; 
import genomeImage from '../assets/images/sars.jpeg';

interface Props {}

const Projects = (_props: Props) => {
  return (
    <>
      <section id="projects" className="hero bg-white">
        <div className="hero-body">
          <div className="columns is-justify-content-center is-align-items-center">
            <div className="column is-12">
              <h1 className="title is-1 has-text-black has-text-centered"
                style={{
                  fontFamily: 'Bebas Neue',
                  fontSize: '70px',
                  lineHeight: '1.3',
                  color: '#0a0a0a'
                }}
              >
                Projects
              </h1>

              {/* Contenedor de las columnas de proyectos */}
              <div className="columns is-justify-content-center">
                {/* Primera columna de proyectos */}
                <div className="column is-6">
                  
                  {/* Card 1 */}
                  <div className="project-card bg-black rounded-lg p-5 hover-effect"
                    style={{ position: 'relative', overflow: 'hidden', transition: 'all 0.5s ease' }} 
                  >
                    <h1 className="font-bold has-text-warning mt-5 has-text-centered" 
                      style={{
                        fontFamily: 'Bebas Neue',
                        fontSize: '40px',
                        lineHeight: '1.2',
                      }}
                    >
                      Automated Garden
                    </h1>
                    <p className="text-white text-2xl pl-5 pr-5 pb-5"
                      style={{
                        fontFamily: 'Oswald',
                        fontSize: '26px',
                        lineHeight: '1.12'
                      }}
                    >
                      <li className="mb-2">Developed an urban garden with three different ecosystems to monitor and manage each environment.</li>
                      <li className="mb-2">Implemented Internet of Things (IoT) technologies to create a web platform displaying temperature, humidity, luminosity, and other factors of each ecosystem, with data stored in a custom database.</li>
                      <li className="mb-2">Analyzed data corresponding to each ecosystem to determine optimal watering schedules based on specific needs.</li>
                      <li className="mb-2">Demonstrated skills in IoT integration, data analysis, and web platform development using Arduino and Node-Red.</li>
                    </p>

                    {/* Imagen oculta debajo de la card que se despliega en hover */}
                    <div className="image-container">
                      <img 
                        src={gardenImage} 
                        alt="Automated Garden" 
                        className="hover-image" 
                      />
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="project-card bg-black rounded-lg p-5 hover-effect mt-5"
                    style={{ position: 'relative', overflow: 'hidden', transition: 'all 0.5s ease' }} 
                  >
                    <h1 className="font-bold has-text-warning mt-5 has-text-centered" 
                      style={{
                        fontFamily: 'Bebas Neue',
                        fontSize: '40px',
                        lineHeight: '1.2',
                      }}
                    >
                      SARS-CoV-2 Genome Analysis
                    </h1>
                    <p className="text-white text-2xl pl-5 pr-5 pb-5"
                      style={{
                        fontFamily: 'Oswald',
                        fontSize: '26px',
                        lineHeight: '1.12'
                      }}
                    >
                      <li className="mb-2">Analyzed 10 different variants of SARS-CoV-2 from various global locations using a large database.</li>
                      <li className="mb-2">Developed a program with functions and methods to read the SARS-CoV-2 genome sequences from different countries.</li>
                      <li className="mb-2">Compared the genetic content of the variants and created visual representations to observe and analyze their behavior.</li>
                      <li className="mb-2">Demonstrated proficiency in data analysis, programming in R, and genomic data visualization.</li>
                    </p>

                    {/* Imagen oculta debajo de la card que se despliega en hover */}
                    <div className="image-container">
                      <img 
                        src={genomeImage} 
                        alt="SARS-CoV-2 Genome Analysis" 
                        className="hover-image" 
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
