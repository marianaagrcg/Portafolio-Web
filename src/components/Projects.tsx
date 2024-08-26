interface Props {}

const Projects = (_props: Props) => {
  return (
    <>
      <section id="projects" className="hero bg-gradient-to-r from-violet-500 via-fuchsia-600 to-purple-800">
        <div className="hero-body">
          <div className="columns is-justify-content-space-between">

            <div className="column is-5">
              <h1 className="title is-1 has-text-black">Projects</h1>

              <div className="is-flex is-flex-direction-row mr-8">
                <figure className="image is-256x256 mr-5">
                  <img  className="is-rounded" src="src\assets\images\Invernadero1.jpeg" alt="" />
                </figure>
                <figure className="image is-256x256 ml-5">
                  <img className="is-rounded" src="src\assets\images\Invernadero.jpeg" alt="" />
                </figure>
              </div>

             <div className="is-flex is-flex-direction-row mt-5">
                <figure className="image is-256x256 mr-5">
                  <img  className="is-rounded" src="src\assets\images\sars.jpeg" alt="" />
                </figure>
                <figure className="image is-256x256 ml-5">
                  <img className="is-rounded" src="src\assets\images\sars1.jpeg" alt="" />
                </figure>
             </div>

            </div>

            <div className="column is-7 mt-8">

              <div className="bg-gray-800 bg-opacity-55 rounded-lg mb-8">
                <h1 className="text-gray-800 text-3xl uppercase font-black is-3 mb-4 pt-5 pl-5">Automated Garden</h1>
                <p className="text-white font-bold has-text-justified text-2xl pl-5 pr-5 pb-5">
                  <li className="mb-2">Developed an urban garden with three different ecosystems to monitor and manage each environment.</li>
                  <li className="mb-2">Implemented Internet of Things (IoT) technologies to create a web platform displaying temperature, humidity, luminosity, and other factors of each ecosystem, with data stored in a custom database.</li>
                  <li className="mb-2"> Analyzed data corresponding to each ecosystem to determine optimal watering schedules based on specific needs.</li>
                  <li className="mb-2">Demonstrated skills in IoT integration, data analysis, and web platform development using Arduino and Node-Red.</li>
                </p>
              </div>

              <div className="bg-gray-800 bg-opacity-55 rounded-lg mb-5">
                <h1 className="text-gray-800 text-3xl uppercase font-black is-3 mb-4 pt-5 pl-5">SARS-CoV-2 Genome Analysis</h1>
                <p className="text-white font-bold has-text-justified text-2xl pl-5 pr-5 pb-5">
                  <li className="mb-2">Analyzed 10 different variants of SARS-CoV-2 from various global locations using a large database.</li>
                  <li className="mb-2">Developed a program with functions and methods to read the SARS-CoV-2 genome sequences from different countries.</li>
                  <li className="mb-2">Compared the genetic content of the variants and created visual representations to observe and analyze their behavior.</li>
                  <li className="mb-2">Demonstrated proficiency in data analysis, programming in R, and genomic data visualization.</li>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
