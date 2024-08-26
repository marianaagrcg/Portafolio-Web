interface Props {}

const Welcome = (_props: Props) => {
    return (
        <>
            <section id="Welcome" className="hero bg-gradient-to-r from-violet-500 via-fuchsia-600 to-purple-800">
                <div className="hero-body">
                    <div className="columns is-align-items-center is-justify-content-space-between">
                        <div className="column is-9">
                            <div className="welcome pl-5 pr-5">
                                <h1 className="title is-1 has-text-black">Welcome to my Portfolio!</h1>
                                <h2 className="title is-2 has-text-link-light">I'm Mariana García!</h2>
                                <h2 className="title is-3 has-text-primary-light p-1">I am a dedicated Computer Engineering student from Tecnologico de Monterrey committed to learning and sharing my knowledge with people interested in engineering and computing.</h2>
                                <div className="is-flex is-justify-content-center">
                                    <a href="#contactMe" className="button is-large mt-5">Let's Connect!</a>
                                </div>
                            </div>
                        </div>
                        <div className="column is-3">
                            <figure className="image is-1by1">
                                <img className="is-rounded" src="src/assets/images/MarianaPic.jpeg" alt="Profile1" />
                            </figure>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Welcome;
