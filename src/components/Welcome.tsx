// import { useEffect } from "react";
// import { assertAccessor } from "@babel/types";
import BackgroundImage from "../assets/images/backgroundImage.jpeg"

interface Props {}

const Welcome = (_props: Props) => {
    return (
        <>
            <section
                id="Welcome"
                className="hero is-fullheight-with-navbar bg-fixed"
                style={{
                    backgroundImage: `url(${BackgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'relative',
                }}
            >
                {/* Capa de opacidad sobre la imagen */}
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Ajusta la opacidad aquí
                        zIndex: 1,
                    }}
                ></div>

                <div className="hero-body" style={{ position: 'relative', zIndex: 2 }}>
                    <div className="columns is-align-items-center is-justify-content-center">
                        <div className="column is-9">
                            <div className="welcome pl-5 pr-5"
                                style={{
                                    maxWidth: '100%',
                                    textAlign: 'center'
                                }}>
                                <h1 className="title is-1 has-text-warning-light"
                                    style={{
                                        fontFamily: 'Bebas Neue',
                                        fontSize: '80px',
                                        lineHeight: '1.3',
                                        color: '#000000'
                                    }}
                                >
                                    I'm Mariana García!
                                </h1>
                                <h2 className="title is-3 has-text-white"
                                    style={{
                                        fontFamily: 'Oswald',
                                        fontSize: '35px'
                                    }}
                                >
                                    Computer Engineering Student
                                </h2>
                                <p className="has-text-white mt-4"
                                    style={{
                                        fontFamily: 'Oswald',
                                        fontSize: '20px',
                                        maxWidth: '500px',
                                        lineHeight: '1.5'
                                    }}
                                >
                                    Let's get to know each other.
                                </p>
                                <div className="is-flex is-justify-content-center mt-5">
                                    <a href="#contactMe" className="button is-large is-info"
                                        style={{
                                            borderRadius: '28px',
                                            backgroundColor: '#000000',
                                            color: '#fff',
                                        }}
                                    >
                                        Let's Connect!
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
}

export default Welcome;
