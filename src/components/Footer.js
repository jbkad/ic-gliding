import { Link } from "react-router-dom";
import { navigateTo } from "./utils/Constants";
import { instagram_svg, facebook_svg, mail_svg } from "../assets/svgs/navbar";
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
                                to="/memberinformation/fleet-and-costs"
                                onClick={navigateTo}
                                className="link"
                                aria-label="Find out more about gliding costs"
                            >
                                Gliding costs
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
                                aria-label="Club gallery"
                            >
                                Club gallery
                            </Link>
                        </div>
                        <div className="row-2">
                            <label>Useful links</label>
                            <Link 
                                to="/faqs"
                                onClick={navigateTo}
                                className="link"
                                aria-label="Frequently asked questions"
                            >
                                FAQs
                            </Link>
                            <a 
                                href="https://chat.whatsapp.com/EcanRrIn34KFmpIbJsSy4d"
                                className="link"
                                aria-label="Join the WhatsApp gliding group"
                            >
                                WhatsApp group
                            </a>
                            <Link 
                                to="/sitemap"
                                onClick={navigateTo}
                                className="link"
                                aria-label="Sitemap"
                            >
                                Sitemap
                            </Link>
                            <Link 
                                to="/accessibility"
                                onClick={navigateTo}
                                className="link"
                                aria-label="Accessibility"
                            >
                                Accessibility
                            </Link>
                            <a 
                                href="https://glideandseek.com/"
                                className="link"
                                aria-label="Glide and seek"
                            >
                                Glide and Seek
                            </a>
                            <a 
                                href="https://lashamgliding.com/"
                                className="link"
                                aria-label="Lasham gliding"
                            >
                                Lasham Gliding
                            </a>
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
                        <div className="social-links">
                            <a href="https://www.instagram.com/icgliding/" 
                                target="blank"
                                aria-label="Instagram"
                            >
                                {instagram_svg}                   
                            </a>  
                            <a href="https://www.facebook.com/ImperialCollegeGlidingClub/"
                                target="blank"
                                aria-label="Meta"
                            >
                                {facebook_svg}
                            </a>
                            <a href="mailto:gliding@imperial.ac.uk" 
                                target="blank"
                                aria-label="E-mail"
                            >
                                {mail_svg}
                            </a> 
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}