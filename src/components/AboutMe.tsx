import profielPicture from "../assets/images/profilePicture.jpeg"

interface props{};

const AboutMe = (_props: props) => {
    return (
        <>
           <div className="aboutMe is-flex is-flex-direction-row">
                <section className="hero has-background-primary-15 is-flex-grow-1">
                    <div className="hero-body is-flex is-justify-content-space-between">
                        <div className="container">
                            <figure className="image is-square">
                                <img className="" src={profielPicture} alt="Profile" />
                            </figure>
                        </div>

                        <div className="container p-1 ml-5">
                            <h1 className="title is-1">About me!</h1>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default AboutMe;