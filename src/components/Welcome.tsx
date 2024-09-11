import { useEffect } from "react";

interface Props {}

const Welcome = (_props: Props) => {
    return (
        <>
            <section id="Welcome" className="hero is-fullheight-with-navbar bg-fixed" 
            style={{ 
                backgroundImage: `url('src/assets/images/background2.jpeg')`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center' ,
                opacity: '0.7'
                }}>

                <div className="hero-body">
                    <div className="columns is-align-items-center is-justify-content-center">
                        <div className="column is-9">
                            <div className="welcome pl-5 pr-5" 
                                style={{ 
                                    maxWidth: '80%', 
                                    textAlign: 'center' 
                                }}>
                                <h1 className="title is-1" 
                                    style={{ 
                                        fontFamily: 'Bebas Neue', 
                                        fontSize: '95px', 
                                        lineHeight: '1.3',
                                        color: '#2b50e3'
                                        }}
                                        >I'm Mariana García!
                                </h1>
                                <h2 className="title is-3 has-text-white" 
                                    style={{ 
                                        fontFamily: 'Oswald', 
                                        fontSize: '35px' 
                                        }}
                                        >Computer Engineering Student
                                </h2>
                                <p className="has-text-white mt-4" 
                                    style={{ 
                                        fontFamily: 'Oswald',
                                        fontSize: '20px', 
                                        maxWidth: '500px', 
                                        lineHeight: '1.5' 
                                    }}
                                    >Let's get to know each other.
                                </p>
                                <div className="is-flex is-justify-content-center mt-5">
                                    <a href="#contactMe" className="button is-large is-info" 
                                        style={{ 
                                            borderRadius: '28px', 
                                            backgroundColor: '#2b02f5',
                                            color: '#fff',
                                            }}
                                        >Let's Connect!
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
