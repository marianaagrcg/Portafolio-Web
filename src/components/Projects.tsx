interface Props {}

const Projects = (_props: Props) => {
  return (
    <>
      <section id="projects" className="hero has-background-primary-25">
        <div className="hero-body">
          <div className="columns is-justify-content-space-between">
            <div className="column is-12">
                <h1 className="title is-1">Projects</h1>
                
                <div className="columns">
                    <div className="column is-6">
                        <div className="box has-background-primary-10 has-rounded-border mb-5">
                            <h1 className="title is-3 mb-4">Automated Garden</h1>
                            <p className="title is-5 has-text-justified has-text-primary-light p-1">
                            <li className="mb-2">Developed an urban garden with three different ecosystems to monitor and manage each environment.</li>
                            <li className="mb-2">Implemented Internet of Things (IoT) technologies to create a web platform displaying temperature, humidity, luminosity, and other factors of each ecosystem, with data stored in a custom database.</li>
                            <li className="mb-2"> Analyzed data corresponding to each ecosystem to determine optimal watering schedules based on specific needs.</li>
                            <li className="mb-2">Demonstrated skills in IoT integration, data analysis, and web platform development using Arduino and Node-Red.</li>
                            </p>
                        </div>
                    </div>

                    <div className="column is-6">
                        <div className="box has-background-primary-10 has-rounded-border mb-5">
                            <h1 className="title is-3 mb-4 mt-5">SARS-CoV-2 Genome Analysis</h1>
                            <p className="title is-5 has-text-justified has-text-primary-light p-1">
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
