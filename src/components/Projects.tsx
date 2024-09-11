interface Props {}

const Projects = (_props: Props) => {
  return (
    <>
      <section id="projects" className="hero bg-gradient-to-b from-blue-900 via-cyan-600 to-blue-900">
        <div className="hero-body">
          <div className="columns is-justify-content-space-between">
            
            <div className="column is-12">
              <h1 className="title is-1 has-text-black">Projects</h1>

              {/* Proyecto 1 */}
              <div className="columns is-vcentered mb-8">
                {/* <div className="column is-5 is-flex is-flex-direction-row">
                  <figure className="image is-256x256 mr-5">
                    <img className="is-rounded" src="src/assets/images/Invernadero1.jpeg" alt="" />
                  </figure>
                  <figure className="image is-256x256 ml-5">
                    <img className="is-rounded" src="src/assets/images/Invernadero.jpeg" alt="" />
                  </figure>
                </div> */}
                <div className="column is-7">
                  <div className="bg-gray-800 bg-opacity-55 rounded-lg p-5">
                    <h1 className="text-gray-800 text-3xl uppercase font-black mb-4">Automated Garden</h1>
                    <p className="text-white font-bold has-text-justified text-2xl">
                      <li className="mb-2">Developed an urban garden with three different ecosystems to monitor and manage each environment.</li>
                      <li className="mb-2">Implemented Internet of Things (IoT) technologies to create a web platform displaying temperature, humidity, luminosity, and other factors of each ecosystem, with data stored in a custom database.</li>
                      <li className="mb-2">Analyzed data corresponding to each ecosystem to determine optimal watering schedules based on specific needs.</li>
                      <li className="mb-2">Demonstrated skills in IoT integration, data analysis, and web platform development using Arduino and Node-Red.</li>
                    </p>
                  </div>
                </div>
              </div>

              {/* Proyecto 2 */}
              <div className="columns is-vcentered mb-5">
                {/* <div className="column is-5 is-flex is-flex-direction-row">
                  <figure className="image is-256x256 mr-5">
                    <img className="is-rounded" src="src/assets/images/sars.jpeg" alt="" />
                  </figure>
                  <figure className="image is-256x256 ml-5">
                    <img className="is-rounded" src="src/assets/images/sars1.jpeg" alt="" />
                  </figure>
                </div> */}
                <div className="column is-7">
                  <div className="bg-gray-800 bg-opacity-55 rounded-lg p-5">
                    <h1 className="text-gray-800 text-3xl uppercase font-black mb-4">SARS-CoV-2 Genome Analysis</h1>
                    <p className="text-white font-bold has-text-justified text-2xl">
                      <li className="mb-2">Analyzed 10 different variants of SARS-CoV-2 from various global locations using a large database.</li>
                      <li className="mb-2">Developed a program with functions and methods to read the SARS-CoV-2 genome sequences from different countries.</li>
                      <li className="mb-2">Compared the genetic content of the variants and created visual representations to observe and analyze their behavior.</li>
                      <li className="mb-2">Demonstrated proficiency in data analysis, programming in R, and genomic data visualization.</li>
                    </p>
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
