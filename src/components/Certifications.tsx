// import React from 'react';
import nasa from '../assets/images/NASA.jpeg';
import iot from '../assets/images/IoT.jpeg';
import c from '../assets/images/C.jpg';

interface Props {}

const Certifications = (_props: Props) => {
    return (
        <>
           <section id="certifications" className="hero bg-black">
                <div className="hero-body">
                    <div className="columns is-justify-content-center">
                        <div className="column is-12">
                            <h1 className="title is-1 has-text-warning-light has-text-centered"
                                style={{
                                    fontFamily: 'Bebas Neue',
                                    fontSize: '70px',
                                    lineHeight: '1.3',
                                    color: '#0a0a0a'
                                }}
                            >
                                Certificates and Recognitions
                            </h1>

                            <div className="columns is-justify-content-center mt-6 gallery">
                                {/* Imagen 1 */}
                                <div className="column is-4">
                                    <figure className="gallery-item">
                                        <img src={nasa} alt="NASA Certificate" />
                                    </figure>
                                </div>

                                {/* Imagen 2 */}
                                <div className="column is-4">
                                    <figure className="gallery-item">
                                        <img src={c} alt="C Certificate" />
                                    </figure>
                                </div>

                                {/* Imagen 3 */}
                                <div className="column is-4">
                                    <figure className="gallery-item">
                                        <img src={iot} alt="IoT Certificate" />
                                    </figure>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
           </section>
        </>
    );
}

export default Certifications;
