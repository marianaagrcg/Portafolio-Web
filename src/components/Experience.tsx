import '../App.css'; // Asegúrate de importar el archivo CSS si lo usas
import sipo from '../assets/images/LOGOSIPOWHITE.png';
import front from '../assets/images/SipoFront.jpeg'
import phoenix from '../assets/images/PhoenixEye.png';
import mapaPhoenix from '../assets/images/phoenix.jpeg'
import borrebots from '../assets/images/FRC.png';
import frcTeam from '../assets/images/FRCV.jpeg'
import aista from '../assets/images/AISTA.png';
import mapaAista from '../assets/images/Maps.jpeg'

interface Props {}

const Experience = (_props: Props) => {
  return (
    <>
      <section id="experience" className="hero bg-white">
        <div className="hero-body">
          <h1 className="title is-1 has-text-black has-text-centered"
            style={{
              fontFamily: 'Bebas Neue',
              fontSize: '70px',
              lineHeight: '1.3',
              color: '#0a0a0a'
            }}
          >Experience</h1>

          <div className="columns">
            {/* Primera fila */}
            <div className="column is-6">
              <div className="experience-card bg-black rounded-lg mb-5 is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
                <h1 className="font-bold has-text-warning-light mt-5" 
                  style={{
                    fontFamily: 'Bebas Neue',
                    fontSize: '40px',
                    lineHeight: '1.2',
                  }}
                >Logistica LTC - AISTA</h1>
                <h1 className="text-current text-2xl italic has-text-centered mb-4 has-text-warning-light"
                  style={{
                    fontFamily: "Oswald",
                    fontSize: '20px',
                  }}
                >Logistics Route Simulation Developer</h1>

                {/* Imagen */}
                <figure className="image is-256x256">
                  <img src={aista} alt="Encora" />
                </figure>

                <div className="image-container">
                  <img 
                    src={mapaAista} 
                    alt="Automated Garden" 
                    className="hover-image" 
                  />
                </div>

                <p className="text-white text-2xl has-text-centered pl-5 pr-5 pb-5"
                  style={{
                    fontFamily: 'Oswald',
                    fontSize: '26px',
                    lineHeight: '1.12'
                  }}>
                  Developed an advanced logistics route simulator using Unity, Flask, and MongoDB to optimize transport operations. Collaborated on route visualization and data analysis, providing optimized recommendations to enhance logistical efficiency and planning.
                </p>
              </div>
            </div>

            <div className="column is-6">
              <div className="experience-card bg-black rounded-lg mb-5 is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
                <h1 className="font-bold has-text-warning-light mt-5" 
                  style={{
                    fontFamily: 'Bebas Neue',
                    fontSize: '40px',
                    lineHeight: '1.2',
                  }}
                >Encora Inc - SIPO</h1>
                <h1 className="text-current text-2xl italic has-text-centered mb-4 has-text-warning-light"
                  style={{
                    fontFamily: "Oswald",
                    fontSize: '20px',
                  }}
                >Web Development Feb 2024 – May 2024</h1>

                {/* Imagen */}
                <figure className="image is-256x256">
                  <img className="is-rounded" src={sipo} alt="Encora" />
                </figure>

                <div className="image-container">
                  <img 
                    src={front} 
                    alt="Automated Garden" 
                    className="hover-image" 
                  />
                </div>

                <p className="text-white text-2xl has-text-centered pl-5 pr-5 pb-5"
                  style={{
                    fontFamily: 'Oswald',
                    fontSize: '26px',
                    lineHeight: '1.12'
                  }}>
                  Developed a digital platform using Node.js, React, and PostgreSQL to improve client, project, and resource management. Integrated a PostgreSQL database for streamlined operations, solving outdated infrastructure issues, and enhancing overall efficiency with platform integration.
                </p>
              </div>
            </div>
          </div>

          <div className="columns is-multiline">
            <div className="column is-6">
              <div className="experience-card bg-black rounded-lg mb-5 is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
                <h1 className="font-bold has-text-warning-light mt-5" 
                  style={{
                    fontFamily: 'Bebas Neue',
                    fontSize: '40px',
                    lineHeight: '1.3'
                  }}
                  >NASA - Phoenix Eye
                </h1>
                <h1 className="text-current text-2xl italic has-text-centered mb-4 has-text-warning-light"
                  style={{
                    fontFamily: 'Oswald',
                    fontSize: '20px'
                  }}
                >NASA Space App Challenge 2023 Hackathon Finalist Oct 2023 – Jan 2024</h1>

                {/* Imagen */}
                <figure className="image is-256x256">
                  <img className="is-rounded mb-5 mt-5" src={phoenix} alt="NASA" />
                </figure>

                <div className="image-container">
                  <img 
                    src={mapaPhoenix} 
                    alt="Automated Garden" 
                    className="hover-image" 
                  />
                </div>

                <p className="text-white text-2xl has-text-centered pl-5 pr-5 pb-5"
                  style={{
                    fontFamily: 'Oswald',
                    fontSize: '25px',
                    lineHeight: '1.3'
                  }}>
                  Developed Phoenix Eye, a machine learning system for predicting forest fires using CNN and LSTM in Python. Integrated LoRa technology for fire alerts in areas without internet, displaying data on an interactive 3D map. The project was a finalist in the NASA Space App Challenge 2023.
                </p>
              </div>
            </div>

            {/* Segunda fila */}
            <div className="column is-6">
              <div className="experience-card bg-black rounded-lg mb-5 is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
                <h1 className="font-bold has-text-warning-light mt-5" 
                  style={{
                    fontFamily: 'Bebas Neue',
                    fontSize: '40px',
                    lineHeight: '1.32'
                  }}
                  >Borrebots
                </h1>
                <h1 className="text-current text-2xl italic has-text-centered mb-4 has-text-warning-light"
                  style={{
                    fontFamily: 'Oswald',
                    fontSize: '20px'
                  }}
                >Member and Active Participant of Borrebots Sep 2021 - May 2022</h1>

                {/* Imagen */}
                <figure className="image is-128X128">
                  <img className="is-rounded mb-5 mt-5" src={borrebots} alt="Borrebots" />
                </figure>

                <div className="image-container">
                  <img 
                    src={frcTeam} 
                    alt="Automated Garden" 
                    className="hover-image" 
                  />
                </div>

                <p className="text-white text-2xl has-text-centered pl-5 pr-5 pb-5"
                  style={{
                    fontFamily: 'Oswald',
                    fontSize: '28px',
                    lineHeight: '1.12'
                  }}>
                  As part of the robotics team, contributed to the design and development of competition robots. Focused on innovative solutions and strategies, achieving semifinals in the 2022 FRC competition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
