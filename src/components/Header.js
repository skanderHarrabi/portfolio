import React from 'react';
import PropTypes from 'prop-types';
import icon from '../icons/img/avataaars.svg'
import skon from '../icons/skon.png'
import skon2 from '../icons/skon2.jpg'
import Footer from './Footer';
import { SocialIcon } from 'react-social-icons';


const Header = () => {
    return (
        <div>
            <header className="masthead bg-primary text-white text-center">
                <div className="container d-flex align-items-center flex-column">

                    <img
                        className="masthead-avatar mb-5"
                        src={skon}
                        alt=""
                    />

                    <h1 className="masthead-heading text-uppercase mb-0">Harrabi Skander</h1>

                    <div className="divider-custom divider-light">
                        <div className="
divider-custom-line"></div>
                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                        <div className="divider-custom-line"></div>
                    </div>

                    <p className="masthead-subheading font-weight-light mb-0">
                        Software Engineer , FullStack Developer
                    </p>
                    {/* <div className="col-lg-4 mb-5 mb-lg-0" style={{ 'margin-top': '20px' }}>
                        <SocialIcon className="btn-social mx-1" url="https://www.facebook.com/profile.php?id=100004684519456" />
                        <SocialIcon className="btn-social mx-1" url="https://github.com/skanderHarrabi" />
                        <SocialIcon className="btn-social mx-1" url="https://www.linkedin.com/in/skander-harrabi-425a14158/" />
                    </div> */}
                    <div className="col-lg-4 mb-5 mb-lg-0" style={{ 'marginTop': '20px' }}>
                        <a className="btn btn-outline-light btn-social mx-1" onClick={() => { window.open('https://www.facebook.com/profile.php?id=100004684519456', "_blank") }} ><i className="fab fa-fw fa-facebook-f" /></a>
                        <a className="btn btn-outline-light btn-social mx-1" onClick={() => { window.open('https://github.com/skanderHarrabi', "_blank") }} ><i className="fab fa-fw fa-github" /></a>
                        <a className="btn btn-outline-light btn-social mx-1" onClick={() => { window.open('https://www.linkedin.com/in/skander-harrabi-425a14158/', "_blank") }} ><i className="fab fa-fw fa-linkedin-in" /></a>
                    </div>
                </div>
            </header>
        </div>
    );
};



export default Header;
