import { Link } from "react-router-dom";
import "../styles/pages/sitemap.scss";

export default function Sitemap() {
  return (
    <div className="sitemap">
      <h1>Sitemap</h1>
      <div>
        <label>Navbar</label>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/faqs">Frequently Asked Questions</Link>{" "}
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>{" "}
          </li>

          <li>
            <a
              href="https://www.instagram.com/icgliding/"
              target="blank"
              aria-label="Instagram"
            >
              Instagram
            </a>{" "}
          </li>
          <li>
            <a
              href="https://www.facebook.com/ImperialCollegeGlidingClub/"
              target="blank"
              aria-label="Facebook"
            >
              Facebook
            </a>{" "}
          </li>
          <li>
            <a
              href="mailto:gliding@imperial.ac.uk"
              target="blank"
              aria-label="E-mail"
            >
              E-Mail
            </a>{" "}
          </li>
        </ul>
        <label>Main navigation</label>
        <label className="subheading">What Is gliding?</label>
        <ul>
          <li>
            <Link to="/whatisgliding/introduction">What Is gliding?</Link>{" "}
          </li>
          <li>
            <Link to="/whatisgliding/soaring">Soaring</Link>{" "}
          </li>
          <li>
            <Link to="/whatisgliding/cross-country">
              Cross-country Gliding and competitions
            </Link>{" "}
          </li>
          <li>
            <Link to="/whatisgliding/aerobatics">Aerobatics</Link>{" "}
          </li>
        </ul>
        <label className="subheading">Learning To glide</label>
        <ul>
          <li>
            <Link to="/learningtoglide/join">Learn how to glide</Link>{" "}
          </li>
          <li>
            <Link to="/learningtoglide/location">Where do we fly?</Link>{" "}
          </li>
          <li>
            <Link to="/learningtoglide/first-trip">First trip</Link>{" "}
          </li>
          <li>
            <Link to="/learningtoglide/pre-solo-training">
              Pre solo training
            </Link>{" "}
          </li>
          <li>
            <Link to="/learningtoglide/post-solo-progression">
              Post solo progression
            </Link>{" "}
          </li>
        </ul>
        <label className="subheading">Member information</label>
        <ul>
          <li>
            <Link to="/memberinformation/fleet-and-costs">Fleet and costs</Link>{" "}
          </li>
        </ul>
        <div></div>
        <label>Footer</label>
        <label className="subheading">About us</label>
        <ul>
          <li>
            <Link to="/whatisgliding/introduction">What Is gliding?</Link>{" "}
          </li>
          <li>
            <Link to="/learningtoglide/location">Where do we fly?</Link>{" "}
          </li>
          <li>
            <Link to="/faqs">Frequently Asked Questions</Link>{" "}
          </li>
        </ul>
        <label className="subheading">Useful resources</label>
        <ul>
          <li>
            <a
              href="https://chat.whatsapp.com/EcanRrIn34KFmpIbJsSy4d"
              target="blank"
            >
              WhatsApp Group
            </a>{" "}
          </li>
          <li>
            <a href="https://glideandseek.com/" target="blank">
              Glide and Seek
            </a>{" "}
          </li>
          <li>
            <a
              href="https://www.lashamgliding.com/"
              className="link"
              target="blank"
              aria-label="Lasham gliding"
            >
              Lasham Gliding
            </a>
          </li>
        </ul>
        <label className="subheading">Site information</label>
        <ul>
          <li>
            <Link to="/sitemap">Sitemap</Link>{" "}
          </li>
          <li>
            <Link to="/accessibility">Accessibility</Link>{" "}
          </li>
        </ul>
        <label className="subheading">Top links</label>
        <ul>
          <li>
            <Link to="/learningtoglide/join">Learn how to glide</Link>
          </li>
          <li>
            <Link to="/memberinformation/fleet-and-costs">Gliding costs</Link>
          </li>
          <li>
            <Link to="/gallery">Club gallery</Link>
          </li>
        </ul>
        <label className="subheading">Other links</label>
        <ul>
          <li>
            <a
              href="https://register-of-charities.charitycommission.gov.uk/charity-search/-/charity-details/5033166/charity-overview"
              target="blank"
            >
              Imperial College London - Registered Charity No. 1151241
            </a>
          </li>
          <li>
            <a href="https://maps.app.goo.gl/8r8WdNV1TJXYMXqr7" target="blank">
              Imperial College Union, Beit Quadrangle, Prince Consort Road,
              London SW7 2BB
            </a>{" "}
          </li>
          <li>
            <a href="https://icgliding.co.uk/" target="blank">
              Imperial College Gliding Club
            </a>{" "}
          </li>
          <li>
            <a href="https://imperialcollegeunion.org/" target="blank">
              Imperial College Union
            </a>{" "}
          </li>
          <li>
            <a href="https://imperial.ac.uk/" target="blank">
              Imperial College London
            </a>{" "}
          </li>
          <li>
            <a href="https://gliding.co.uk/" target="blank">
              British Gliding Association
            </a>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
}
