import { Link } from "react-router-dom";
import { navigateTo } from "./utils/Constants";
import { ReactComponent as MetaIcon } from "../assets/svgs/MetaIcon.svg";
import { ReactComponent as InstagramIcon } from "../assets/svgs/InstagramIcon.svg";
import { ReactComponent as MailIcon } from "../assets/svgs/MailIcon.svg";
import '../styles/components/footer.scss';

export default function Footer () {

    return (
        <footer className="footer">
            <div className="container">
                <div className="section-1">
                    <div className="col-1">
                        <img 
                            src={require('../assets/icgc.png')}
                            alt="Imperial College Gliding Club"
                            className="logo-icgc"
                        /> 
                        <div>
                            <div className="heading">Imperial College Gliding Club</div>
                            <div className="subheading">Est. 1930</div>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="row-1">
                            <label>Top links</label>
                            <Link 
                                to="/whatisgliding/introduction"
                                onClick={navigateTo}
                                className="link"
                                aria-label="What is gliding?"
                            >
                                What is gliding?
                            </Link>
                            <Link 
                                to="/learningtoglide/join"
                                onClick={navigateTo}
                                className="link"
                                aria-label="Learn how to glide"
                            >
                                Learn how to glide
                            </Link>
                            <Link 
                                to="/learningtoglide/location"
                                onClick={navigateTo}
                                className="link"
                                aria-label="Where do we fly?"
                            >
                                Where do we fly?
                            </Link>
                            <Link 
                                to="/gallery"
                                onClick={navigateTo}
                                className="link"
                                aria-label="Gallery"
                            >
                                Gallery
                            </Link>
                        </div>
                        <div className="row-2">
                            <label>Useful links</label>
                            {/* <Link 
                                to="/sitemap"
                                onClick={navigateTo}
                                className="link"
                                aria-label="Sitemap"
                            >
                                Sitemap
                            </Link> */}
                            {/* <Link 
                                to="/accessibility"
                                onClick={navigateTo}
                                className="link"
                                aria-label="Accessibility"
                            >
                                Accessibility
                            </Link> */}
                            <Link 
                                to="/faqs"
                                onClick={navigateTo}
                                className="link"
                                aria-label="Frequently asked questions"
                            >
                                FAQs
                            </Link>
                            <Link 
                                to="/memberinformation/fleet-and-costs"
                                onClick={navigateTo}
                                className="link"
                                aria-label="Costs"
                            >
                                Costs
                            </Link>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="section-2">
                    <div className="col-1">
                        <img 
                            src={require('../assets/imperial.png')}
                            alt="Imperial College London"
                            className="logo-icl"
                        />
                        <div>
                            <div className="note">
                                © 2024 Imperial College Union. Registered Charity No. 1151241 | VAT Reg No. GB 240 5617 84
                            </div>
                            <a className="address" href="https://maps.app.goo.gl/8r8WdNV1TJXYMXqr7" target="blank">
                                Imperial College Union, Beit Quadrangle, Prince Consort Road, London SW7 2BB
                            </a>
                            <div className="links">
                                <a className="link" href="https://icgliding.co.uk/" target="blank">icgliding.co.uk </a>
                                <a className="link" href="https://imperialcollegeunion.org/" target="blank">imperialcollegeunion.org </a>
                                <a className="link" href="https://imperial.ac.uk/" target="blank">imperial.ac.uk </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="social-btns">
                            <a href="https://www.instagram.com/icgliding/" 
                                target="blank"
                                aria-label="Instagram"
                            >
                                <InstagramIcon />                   
                            </a>  
                            <a href="https://www.facebook.com/ImperialCollegeGlidingClub/"
                                target="blank"
                                aria-label="Meta"
                            >
                                <MetaIcon />
                            </a>
                            <a href="mailto:gliding@imperial.ac.uk" 
                                target="blank"
                                aria-label="Mail"
                            >
                                <MailIcon />
                            </a> 
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}