import React from 'react';
import PropTypes from 'prop-types';


const Footer = () => {
    return (
        <footer className="footer text-center">
            <div className="container">
                <div className="row" style={{ 'alignItems': 'center' }}>
                    {/* Footer Location*/}
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Harrabi Skander</h4>
                        <p className="lead mb-0">
                            skanderharrabi75@gmail.com
                        </p>
                    </div>
                    {/* Footer Social Icons*/}
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Social media</h4>
                        <a className="btn btn-outline-light btn-social mx-1" onClick={() => { window.open('https://www.facebook.com/profile.php?id=100004684519456', "_blank") }}><i className="fab fa-fw fa-facebook-f" /></a>
                        <a className="btn btn-outline-light btn-social mx-1" onClick={() => { window.open('https://github.com/skanderHarrabi', "_blank") }}><i className="fab fa-fw fa-github" /></a>
                        <a className="btn btn-outline-light btn-social mx-1" onClick={() => { window.open('https://www.linkedin.com/in/skander-harrabi-425a14158/', "_blank") }}><i className="fab fa-fw fa-linkedin-in" /></a>
                    </div>
                    {/* Footer About Text*/}

                </div>
            </div>
        </footer>

    );
};


Footer.propTypes = {

};


export default Footer;
