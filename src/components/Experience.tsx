// import React from 'react';
import '../App.css'; // Asegúrate de importar el archivo CSS si lo usas
import sipo from '../assets/images/LOGOSIPOWHITE.png'
import phoenix from '../assets/images/PhoenixEye.png'
import borrebots from '../assets/images/FRC.png'

interface Props {}

const Experience = (_props: Props) => {
  return (
    <>
      <section id="experience" className="hero bg-gradient-to-b from-blue-900 via-indigo-600 to-blue-900">
        <div className="hero-body">
          <h1 className="title is-1 has-text-black has-text-centered"
            style={{
              fontFamily: 'Bebas Neue',
              fontSize: '70px',
              lineHeight: '1.3',
              color: '#0a0a0a'
            }}
          >Experience</h1>

          <div className="columns is-multiline">
            {/* Primera fila */}
            <div className="column is-4">
              <div className="project-card bg-gray-600 bg-opacity-55 rounded-lg mb-5 is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
                <h1 className="font-bold has-text-info mt-5" 
                  style={{
                    fontFamily: 'Bebas Neue',
                    fontSize: '40px',
                    lineHeight: '1.2',
                  }}
                >Encora Inc - SIPO</h1>
                <h1 className="text-current text-2xl italic has-text-centered mb-4 has-text-info"
                  style={{
                    fontFamily: "Oswald",
                    fontSize: '20px',
                  }}
                >Software Development Feb 2024 – May 2024</h1>

                {/* Imagen */}
                <figure className="image is-256x256">
                  <img className="is-rounded" src={sipo} alt="Encora" />
                </figure>

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

            <div className="column is-4">
              <div className="project-card bg-gray-600 bg-opacity-55 rounded-lg mb-5 is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
                <h1 className="font-bold has-text-info mt-5" 
                  style={{
                    fontFamily: 'Bebas Neue',
                    fontSize: '40px',
                    lineHeight: '1.3'
                  }}
                  >NASA - Phoenix Eye
                </h1>
                <h1 className="text-current text-2xl italic has-text-centered mb-4 has-text-info"
                  style={{
                    fontFamily: 'Oswald',
                    fontSize: '20px'
                  }}
                >NASA Space App Challenge 2023 Hackathon Finalist Oct 2023 – Jan 2024</h1>

                {/* Imagen */}
                <figure className="image is-256x256">
                  <img className="is-rounded mb-5 mt-5" src={phoenix} alt="NASA" />
                </figure>

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
            <div className="column is-4">
              <div className="project-card bg-gray-600 bg-opacity-55 rounded-lg mb-5 is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
                <h1 className="font-bold has-text-info mt-5" 
                  style={{
                    fontFamily: 'Bebas Neue',
                    fontSize: '40px',
                    lineHeight: '1.32'
                  }}
                  >Borrebots
                </h1>
                <h1 className="text-current text-2xl italic has-text-centered mb-4 has-text-info"
                  style={{
                    fontFamily: 'Oswald',
                    fontSize: '20px'
                  }}
                  >Member and Active Participant of Borrebots Sep 2021 - May 2022</h1>

                  {/* Imagen */}
                <figure className="image is-128X128">
                  <img className="is-rounded mb-5 mt-5" src={borrebots} alt="Borrebots" />
                </figure>

                <p className="text-white text-2xl has-text-centered pl-5 pr-5 pb-5"
                  style={{
                    fontFamily: 'Oswald',
                    fontSize: '28px',
                    lineHeight: '1.45'
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
