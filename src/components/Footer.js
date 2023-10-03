import { ReactComponent as FacebookIcon } from "../assets/svgs/FacebookIcon.svg";
import { ReactComponent as InstagramIcon } from "../assets/svgs/InstagramIcon.svg";
import { ReactComponent as MailIcon } from "../assets/svgs/MailIcon.svg";
import { scrollToTop } from "../styles/utils/Constants";
import { Link } from "react-router-dom";
import '../styles/Footer.css';

export default function Footer () {


    return (
        <div className="footer" id="footer">
            <div className="container">
                <Link 
                    to="/" 
                    className="content" 
                    onClick={scrollToTop}
                >
                    <div className="items">
                        <img
                            src="/assets/gliding-logo.png" 
                            alt="icGC logo"
                            className="img"
                        />
                    <h3 className="title">Imperial College Gliding Club</h3>
                    </div>
                </Link>
                   
                <div className="buttons">
                <Link 
                    to="/faqs" 
                    className="spacing" 
                    onClick={scrollToTop}
                >
                    FAQs
                </Link>
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