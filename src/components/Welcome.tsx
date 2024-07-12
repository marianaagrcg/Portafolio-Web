interface props {};

const Welcome = (_props: props) => {
    return (
        <>
            <section id="Welcome" className="hero has-background-primary-10">
                <div className="hero-body">
                    <div className="columns is-align-items-center is-justify-content-space-between">
                        <div className="column is-8">
                            <div className="welcome pl-5 pr-5">
                                <h1 className="title is-1 has-text-primary-15">Welcome to my Portfolio!</h1>
                                <h2 className="title is-2 has-text-primary-15">I'm Mariana García!</h2>
                                <h2 className="title is-3 has-text-primary-light p-1">I am a dedicated Computer Engineering student from Tecnologico de Monterrey committed to learning and sharing my knowledge with people interested in engineering and computing.</h2>
                                <div className="is-flex is-justify-content-center">
                                    <a href="#contactMe" className="button is-info is-large mt-5">Let's Connect!</a>
                                </div>
                            </div>
                        </div>
                        <div className="column is-4">
                            <figure className="image is-256x256">
                                <img className="" src="src/assets/images/profilePicture1.jpg" alt="Profile1" />
                            </figure>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Welcome;
