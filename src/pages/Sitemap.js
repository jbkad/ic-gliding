import { Link } from 'react-router-dom';
import '../styles/pages/sitemap.scss';

export default function Sitemap() {
    return (
        <div className="sitemap">
            <h1>Sitemap</h1>
            <div>
                <label>Navbar</label>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><a href="https://www.instagram.com/icgliding/" target="blank" aria-label="Instagram">Instagram</a> </li>
                    <li><a href="https://www.facebook.com/ImperialCollegeGlidingClub/" target="blank"aria-label="Meta">Meta</a> </li>
                    <li><a href="mailto:gliding@imperial.ac.uk" target="blank" aria-label="E-mail">E-Mail</a> </li>
                </ul>
                <label>Main navigation</label>
                <ul>
                    <li><Link to="/faqs">Frequently Asked Questions</Link> </li>
                    <li><Link to="/gallery">Gallery</Link> </li>
                </ul>
                <label className="subheading">What Is Gliding?</label>
                <ul>
                    <li><Link to="/whatisgliding/introduction">What Is Gliding?</Link> </li>
                    <li><Link to="/whatisgliding/soaring">Soaring</Link> </li>
                    <li><Link to="/whatisgliding/cross-country">Cross-Country Gliding and competitions</Link> </li>
                    <li><Link to="/whatisgliding/aerobatics">Aerobatics</Link> </li>
                </ul>
                <label className="subheading">Learning To Glide</label>
                <ul>
                    <li><Link to="/learningtoglide/join">Learn How To Glide</Link> </li>
                    <li><Link to="/learningtoglide/location">Where Do We Fly?</Link> </li>
                    <li><Link to="/learningtoglide/first-trip">First Trip</Link> </li>
                    <li><Link to="/learningtoglide/pre-solo-training">Pre Solo Training</Link> </li>
                    <li><Link to="/learningtoglide/post-solo-progression">Post Solo Progression</Link> </li>
                </ul>
                <label className="subheading">Member information</label>
                <ul>
                    <li><Link to="/memberinformation/fleet-and-costs">Fleet and Costs</Link> </li>
                </ul>
                <div>
                    <Link to="/gallery"></Link> 
                </div>
                <label>Footer</label>
                <ul>
                    <li><a href="https://chat.whatsapp.com/EcanRrIn34KFmpIbJsSy4d" target="blank">WhatsApp Group</a> </li>
                    <li><Link to="/sitemap">Sitemap</Link> </li>
                    <li><Link to="/accessibility">Accessibility</Link> </li>
                    <li><a href="https://glideandseek.com/" target="blank">Glide and Seek</a> </li>
                    <li><a href="https://maps.app.goo.gl/8r8WdNV1TJXYMXqr7" target="blank">Address</a> </li>
                    <li><a href="https://icgliding.co.uk/" target="blank">Imperial College Gliding Club</a> </li>
                    <li><a href="https://imperialcollegeunion.org/" target="blank">Imperial College Union</a> </li>
                    <li><a href="https://imperial.ac.uk/" target="blank">Imperial College London</a> </li>
                </ul>
            </div>
        </div>
    );
}