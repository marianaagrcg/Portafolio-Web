//import profielPicture1 from "../assets/images/profilePic.jpg"

interface props{};

const Welcome = (_props: props) => {
    return (
        <>

            <div className="welcome is-flex is-flex-direction-row">
                    <section className="hero has-background-primary-10 is-flex-grow-1">
                        <div className="hero-body is-flex is-justify-content-space-around">
                            <div className="container">
                                <h1 className="title is-1 has-text-primary-15">Welcome to my Portfolio!</h1>
                                <h2 className="title is-2 has-text-primary-15">I'm Mariana García!</h2>
                                <h2 className="title is-3 has-text-primary-light p-1">I am a dedicated computer science student from Tecnologico de Monterrey excited to learn and share my knowledge with others.</h2>
                            </div>

                            <div className="container">
                                <figure className="profile">
                                    {/* <img className="" src={profielPicture1} alt="Profile" /> */}
                                </figure>
                            </div>
                        </div>
                    </section>
                </div>
        </>
    );
}

export default Welcome;