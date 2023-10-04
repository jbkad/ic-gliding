import { ReactComponent as FacebookIcon } from "../assets/svgs/FacebookIcon.svg";
import { ReactComponent as InstagramIcon } from "../assets/svgs/InstagramIcon.svg";
import { ReactComponent as MailIcon } from "../assets/svgs/MailIcon.svg";
import '../styles/Footer.css';

export default function Footer () {


    return (
        <footer className="footer" id="footer">
            <div className="container">
                <div className="grid">
                    <h4 
                        className="title"
                        href="https://www.imperialcollegeunion.org/activities/a-to-z/gliding"
                        target="blank"
                    >
                        Imperial College Gliding Club
                    </h4>

                    <a 
                        className="address"
                        href="https://maps.app.goo.gl/8r8WdNV1TJXYMXqr7"
                        target="blank"
                    >
                        <div>Beit Quad</div>
                        <div>Prince Consort Road</div>
                        <div>London SW7 2BB</div>
                    </a>

                <div>

                    </div>
                
                </div>   

                <div className="buttons">
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
        </footer>
    );
}