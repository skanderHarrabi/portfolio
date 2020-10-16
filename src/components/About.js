import React from 'react';

const About = () => {
    return (
        <section className="page-section bg-primary text-white mb-0" id="about">
            <div className="container">
                {/* About Section Heading*/}
                <h2 className="page-section-heading text-center text-uppercase text-white">
                    About
    </h2>
                {/* Icon Divider*/}
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line" />
                    <div className="divider-custom-icon"><i className="fas fa-star" /></div>
                    <div className="divider-custom-line" />
                </div>
                {/* About Section Content*/}
                <div className="row">
                    <div className="col-lg-4 ml-auto">
                        <p className="lead">
                            I've always loved computers and that's what eventually lead me to programming , I enjoy solving problems and writing algorithms.
        </p>
                    </div>
                    <div className="col-lg-4 mr-auto">
                        <p className="lead">
                            I am also very interested in web development especially the amazing and ever expanding world of JavaScript
        </p>
                    </div>
                </div>
                {/* About Section Button*/}
                <div className="text-center mt-4">
                    <a className="btn btn-xl btn-outline-light" onClick={() => { window.open('https://drive.google.com/file/d/1q-DqtwolafsV-1T82-MESSgd6VN39PQ6/view?usp=sharing', "_blank") }} >
                        <i className="fas fa-download mr-2" />
                    Download CV!
      </a>
                </div>
            </div>
        </section>

    );
};



export default About;
