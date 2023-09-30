import React, { useContext } from "react";
import { ReactComponent as FacebookIcon } from "../assets/svgs/FacebookIcon.svg";
import { ReactComponent as InstagramIcon } from "../assets/svgs/InstagramIcon.svg";
import { ReactComponent as MailIcon } from "../assets/svgs/MailIcon.svg";
import { scrollToTop } from "../styles/utils/Constants";
import { Link } from "react-router-dom";
import { ThemeContext } from "./ThemeToggle";
import '../styles/Footer.css';

export default function Footer () {

    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div id="footer">
            <div className="footer-container">
                <Link 
                    to="/" 
                    className="footer-content" 
                    onClick={scrollToTop}
                >
                    <div className="footer-title-and-img">
                        <img
                            src="/assets/gliding-logo.png" 
                            alt="imperial-college-gliding-logo"
                            className="footer-img"
                        />
                    <h3 className="footer-title">Imperial College Gliding Club</h3>
                    </div>
                </Link>
                   
                <div className="footer-buttons">
                {/* <div
                    className='navbar__toggle spacing'
                    onClick={() => toggleTheme()}
                >
                    Contrast
                </div> */}
                    <a href="https://www.facebook.com/ImperialCollegeGlidingClub/"
                        target="blank"
                        className="spacing"
                    >
                        <FacebookIcon />
                    </a>
                    <a href="https://www.instagram.com/icgliding/" 
                        target="blank"
                        className="spacing"
                    >
                        <InstagramIcon />                   
                    </a>  
                    <a href="mailto:gliding@imperial.ac.uk" 
                        target="blank"
                    >
                        <MailIcon />
                    </a> 
                </div>
            </div>
        </div>
    );
}