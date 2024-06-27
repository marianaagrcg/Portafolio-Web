import C from "../assets/images/C.jpg"
import NASA from "../assets/images/NASA.jpeg"

interface props {};

const Experience = (_props: props) => {
    return (
        <>
            <div className="experience">
                <section className="hero has-background-primary-20">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title is-1">Experience</h1>
                            <h2 className="subtitle is-4">I'm a Mariana Garcia</h2>

                            <div className='is-flex is-flex-direction-row'>
                                <div className='certification1'>
                                    <figure className="image is-128x128">
                                            <img className="" src={C} alt="Profile" />
                                    </figure>
                                </div>

                                <div className='certification2'>
                                    <figure className="image is-128x128">
                                            <img className="" src={NASA} alt="Profile" />
                                    </figure>
                                </div>

                                <div className='certification1'>
                                    <figure className="image is-128x128">
                                            <img className="" src={C} alt="Profile" />
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Experience;