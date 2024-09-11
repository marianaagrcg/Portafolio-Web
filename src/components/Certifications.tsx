interface Props{};

const Certifications = (_props: Props) => {
    return (
        <>
           <section id="certifications" className="hero bg-gradient-to-b from-blue-900 via-cyan-600 to-blue-900">
                <div className="hero-body">
                    <div className="columns is-justify-content-space-between">
                        <div className="column is-12">
                            <h1 className="title is-1 has-text-black">Certificates and Recognitions</h1>

                            <div className="columns mt-4">

                                <div className="column is-4">
                                    <figure>
                                        <img src="src\assets\images\NASA.jpeg" alt="C#Certifi" />
                                    </figure>
                                </div>

                                <div className="column is-4">
                                    <figure>
                                        <img src="src\assets\images\C.jpg" alt="C#Certifi" />
                                    </figure>
                                </div>

                                <div className="column is-4">
                                    <figure>
                                        <img src="src\assets\images\IoT.jpeg" alt="C#Certifi" />
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