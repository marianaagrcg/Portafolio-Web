import { useEffect } from "react";

interface Props {};

const AboutMe = (_props: Props) => {
    return (
        <>
            <section id="aboutMe" className="hero bg-gradient-to-b from-blue-900 via-indigo-600 to-blue-900">
                <div className="hero-body">
                    <div className="columns is-align-items-center is-justify-content-space-between">
                        
                        <div className="column is-3 mr-5">
                            <figure className="image is-256x256">
                                <img className="is-rounded" src="src/assets/images/profileMariana.jpeg" alt="Profile" />
                            </figure>
                        </div>

                        {/* Sección de texto */}
                        <div className="column is-7">
                            <h1 className="title is-1"
                                style={{ 
                                    fontFamily: 'Bebas Neue', 
                                    fontSize: '70px', 
                                    lineHeight: '1.3',
                                    color: '#0a0a0a' 
                                }}>
                                About Me!
                            </h1>
                            <h2 className="title is-3 has-text-primary-light p-1"
                                style={{
                                    fontFamily: 'Oswald',
                                    fontSize: '30px', 
                                    color: '#FFFFFF'
                                }}>
Since I was very young, I was very interested in technological and scientific topics. I really enjoyed learning about computing, robotics, and programming. In 2022, taking into account my interests, I began studying Computer Engineering at the best private university in Mexico, Tec de Monterrey.                            </h2>
                            <p className="title is-3 has-text-primary-light p-1" 
                                style={{ 
                                    fontFamily: 'Oswald', 
                                    fontSize: '30px', 
                                    lineHeight: '1.5', 
                                    color: '#FFFFFF'  // Texto blanco, similar al de Welcome
                                }}>
I am currently in the process of learning, but I already have a wide variety of projects that I have developed over the years, which demonstrate my acquired knowledge and skills.                            </p>
                        </div>

                        {/* Imágenes adicionales */}
                        <div className="column is-2">
                            <div className="is-flex is-flex-direction-column is-align-items-center">
                                <figure className="image is-128x128 mb-5">
                                    <img className="is-rounded" src="src/assets/images/programming.jpg" alt="Programming" />
                                </figure>
                                <figure className="image is-128x128 mb-5">
                                    <img className="is-rounded" src="src/assets/images/robotics.jpg" alt="Robotics" />
                                </figure>
                                <figure className="image is-128x128">
                                    <img className="is-rounded" src="src/assets/images/logoTec.png" alt="logoTec" />
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AboutMe;
