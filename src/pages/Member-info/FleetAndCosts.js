import React from "react";
import Costs from "../../components/Costs";
import '../../styles/FleetAndCosts.css';

export default function FleetAndCosts() {
    return (
        <div id="fleet-and-costs" className="fleet-and-costs">
            <h1>Our fleet and costs</h1>

            <h2>Our fleet</h2>
            <p>Imperial College Gliding Club has arguably the best fleet of any university gliding club in the country. We have 3 gliders, one two-seat training aircraft and two high-performance single seat gliders.  </p>

            <h3>496: Grob Twin Acro III </h3>
            <img
                src={require('../../assets/496.png')}
                alt="496"
                className="img"
            />
            <p>496 is our Grob Twin Acro III. It will likely be the first glider that you fly in and it is used for training. The seats are arranged in a tandem position with one in front of the other. Both seats have a full set of controls and instruments allowing it to be flown from the front or back seat. 496 is used for pre-solo training and some of your first solo flights may also be done in it. </p>
            <div className="specifications">
                <p>Specifications:</p>
                <ul>
                    <li>
                        <strong>Length: </strong> 
                        8.18m 
                    </li>
                    <li>
                        <strong>Wingspan: </strong>	
                        18m 
                    </li>
                    <li>
                        <strong>Height: </strong> 
                        1.55m 
                    </li>
                    <li>
                        <strong>Empty Weight: </strong>
                        390kg 
                    </li>
                    <li>
                        <strong>Wing Area: </strong>
                        17.5m² 
                    </li>
                    <li>
                        <strong>Glide Ratio: </strong>
                        38:1 
                    </li>
                    <li>
                        <strong>Vne: </strong> 
                        150kts 
                    </li>
                </ul>
            </div>

            <h3>296: Discus bW </h3>
            <img
                src={require('../../assets/296.png')}
                alt="296"
                className="img"
            />
            <p>296 is one of our two single seat gliders used for cross-country flying and is the first of the Imperial single-seat gliders that you can convert to. It is a very capable cross-country glider despite its age and has achieved some very respectable results in competitions whilst being flown by our members. It is very nice to fly and is suitable for both inexperienced pilots and those with hundreds of hours. </p>
            <div className="specifications">
                <p>Specifications:</p>
                <ul>
                    <li>
                        <strong>Length: </strong> 
                        6.68m 
                    </li>
                    <li>
                        <strong>Wingspan: </strong>	
                        15m 
                    </li>
                    <li>
                        <strong>Height: </strong> 
                        1.27m 
                    </li>
                    <li>
                        <strong>Empty Weight: </strong>
                        233kg 
                    </li>
                    <li>
                        <strong>Wing Area: </strong>
                        10.58m² 
                    </li>
                    <li>
                        <strong>Glide Ratio: </strong>
                        42:5:1 
                    </li>
                    <li>
                        <strong>Vne: </strong> 
                        130kts 
                    </li>
                </ul>
            </div>

            <h3>96: ASW24 </h3>
            <img
                src={require('../../assets/96.png')}
                alt="96"
                className="img"
            />
            <p>96 is our highest performance single seater and the pride of our fleet. It has been used for a huge range of cross-country competitions including some international competitions.  </p>
            <div className="specifications">
                <p>Specifications:</p>
                <ul>
                    <li>
                        <strong>Length: </strong> 
                        6.55m 
                    </li>
                    <li>
                        <strong>Wingspan: </strong>	
                        15m 
                    </li>
                    <li>
                        <strong>Height: </strong> 
                        1.3m 
                    </li>
                    <li>
                        <strong>Empty Weight: </strong>
                        230kg 
                    </li>
                    <li>
                        <strong>Wing Area: </strong>
                        10m² 
                    </li>
                    <li>
                        <strong>Glide Ratio: </strong>
                        44:1 
                    </li>
                    <li>
                        <strong>Vne: </strong> 
                        150kts 
                    </li>
                </ul>
            </div>

            <h2>Costs</h2>
            <Costs />

            <p 
                className="note"
            >
                *Please ensure that your {" "}
                    <a 
                        href="https://www.imperialcollegeunion.org/shop/csp/gliding/gliding-membership-23-24"
                        target="blank"
                    >
                        gliding membership is purchased
                    </a> 
                    {" "} before signing up for trips. 
            </p>
        </div>
    );
}