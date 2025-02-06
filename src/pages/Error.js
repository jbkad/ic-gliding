import { Link } from "react-router-dom";
import "../styles/components/error.scss";

export default function Error() {
  return (
    <div className="error">
      <h1>
        Uh oh. <br /> Looks like you've flown off course!
      </h1>
      <p>You can reroute back to a safe destination:</p>
      <ul>
        <li>
          <Link to="/">Head back to the homepage</Link>
        </li>
        <li>
          <Link to="/gallery">Check out our gallery</Link>
        </li>
        <li>
          <a href="mailto:gliding@imperial.ac.uk">Get in touch with us</a>
        </li>
      </ul>
      <div className="status-code">404 - Not found</div>
    </div>
  );
}
